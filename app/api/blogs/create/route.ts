import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyJwt } from "@/lib/jwt"

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization")

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const token = authHeader.split(" ")[1]
    console.log("Received token in API:", token) // Debug log

    const payload = verifyJwt(token) as { id: string } | null

    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    console.log("Verified payload:", payload) // Debug log

    const { title, description, content, imageUrl, tags, published = false } = await request.json()

    if (!title || !description || !content) {
      return NextResponse.json({ error: "Title, description, and content are required" }, { status: 400 })
    }

    const result = await pool.query(
      `INSERT INTO blogs (title, description, content, image_url, tags, published, user_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [title, description, content, imageUrl, tags, published, payload.id],
    )

    return NextResponse.json({ blog: result.rows[0] }, { status: 201 })
  } catch (error) {
    console.error("Error creating blog:", error)
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 })
  }
}
