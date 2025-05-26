import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tag = searchParams.get("tag")
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    let query = `
      SELECT b.*, u.name as author_name 
      FROM blogs b
      JOIN users u ON b.user_id = u.id
      WHERE b.published = true
    `

    const queryParams: any[] = []

    if (tag) {
      query += ` AND $1 = ANY(b.tags)`
      queryParams.push(tag)
    }

    query += ` ORDER BY b.created_at DESC LIMIT $${queryParams.length + 1} OFFSET $${queryParams.length + 2}`
    queryParams.push(limit, offset)

    const result = await pool.query(query, queryParams)

    // Get total count for pagination
    let countQuery = `
      SELECT COUNT(*) FROM blogs b
      WHERE b.published = true
    `

    if (tag) {
      countQuery += ` AND $1 = ANY(b.tags)`
    }

    const countResult = await pool.query(countQuery, tag ? [tag] : [])
    const totalCount = Number.parseInt(countResult.rows[0].count)

    return NextResponse.json({
      blogs: result.rows,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 })
  }
}
