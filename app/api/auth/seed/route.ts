import { type NextRequest, NextResponse } from "next/server"
import { createUser } from "@/lib/auth"
import pool from "@/lib/db"

export async function POST(request: NextRequest) {
  try {
    // Check if the user already exists
    const checkResult = await pool.query("SELECT * FROM users WHERE email = $1", ["ankurauti@gmail.com"])

    if (checkResult.rows.length > 0) {
      return NextResponse.json({ message: "User already exists" }, { status: 200 })
    }

    // Create the specified user
    const user = await createUser("ankurauti@gmail.com", "Ankur@123", "Ankur Auti")

    return NextResponse.json({ message: "Initial user created successfully", user }, { status: 201 })
  } catch (error) {
    console.error("Seed error:", error)
    return NextResponse.json({ error: "Failed to seed initial user" }, { status: 500 })
  }
}
