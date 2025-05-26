import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyJwt } from "@/lib/jwt"

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1]

    if (!token) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const payload = verifyJwt(token) as { id: string } | null

    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const id = params.id
    const { title, description, content, imageUrl, tags, published } = await request.json()

    // Check if blog exists and belongs to the user
    const checkResult = await pool.query("SELECT * FROM blogs WHERE id = $1", [id])

    if (checkResult.rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 })
    }

    if (checkResult.rows[0].user_id !== payload.id) {
      return NextResponse.json({ error: "Unauthorized to update this blog" }, { status: 403 })
    }

    // Update the blog
    const updateFields = []
    const updateValues = []
    let paramCounter = 1

    if (title !== undefined) {
      updateFields.push(`title = $${paramCounter++}`)
      updateValues.push(title)
    }

    if (description !== undefined) {
      updateFields.push(`description = $${paramCounter++}`)
      updateValues.push(description)
    }

    if (content !== undefined) {
      updateFields.push(`content = $${paramCounter++}`)
      updateValues.push(content)
    }

    if (imageUrl !== undefined) {
      updateFields.push(`image_url = $${paramCounter++}`)
      updateValues.push(imageUrl)
    }

    if (tags !== undefined) {
      updateFields.push(`tags = $${paramCounter++}`)
      updateValues.push(tags)
    }

    if (published !== undefined) {
      updateFields.push(`published = $${paramCounter++}`)
      updateValues.push(published)
    }

    updateFields.push(`updated_at = NOW()`)

    if (updateFields.length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 })
    }

    const updateQuery = `
      UPDATE blogs
      SET ${updateFields.join(", ")}
      WHERE id = $${paramCounter}
      RETURNING *
    `

    updateValues.push(id)

    const result = await pool.query(updateQuery, updateValues)

    return NextResponse.json({ blog: result.rows[0] })
  } catch (error) {
    console.error("Error updating blog:", error)
    return NextResponse.json({ error: "Failed to update blog" }, { status: 500 })
  }
}
