import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyJwt } from "@/lib/jwt"

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1]

    if (!token) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const payload = verifyJwt(token)

    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = (page - 1) * limit

    const result = await pool.query("SELECT * FROM contacts ORDER BY created_at DESC LIMIT $1 OFFSET $2", [
      limit,
      offset,
    ])

    const countResult = await pool.query("SELECT COUNT(*) FROM contacts")
    const totalCount = Number.parseInt(countResult.rows[0].count)

    return NextResponse.json({
      contacts: result.rows,
      pagination: {
        total: totalCount,
        page,
        limit,
        pages: Math.ceil(totalCount / limit),
      },
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 })
  }
}
