import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, description } = await request.json()

    if (!name || !email || !phone || !service || !description) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    const result = await pool.query(
      `INSERT INTO contacts (name, email, phone, service, description)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, email, phone, service, description],
    )

    return NextResponse.json(
      { message: "Contact request submitted successfully", contact: result.rows[0] },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error submitting contact:", error)
    return NextResponse.json({ error: "Failed to submit contact request" }, { status: 500 })
  }
}
