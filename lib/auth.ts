import { compare, hash } from "bcrypt"
import pool from "./db"

export async function createUser(email: string, password: string, name: string) {
  try {
    const hashedPassword = await hash(password, 10)
    const result = await pool.query(
      "INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name",
      [email, hashedPassword, name],
    )
    return result.rows[0]
  } catch (error) {
    console.error("Error creating user:", error)
    throw new Error("Failed to create user")
  }
}

export async function verifyUser(email: string, password: string) {
  try {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email])
    const user = result.rows[0]

    if (!user) {
      return null
    }

    const isValid = await compare(password, user.password)

    if (!isValid) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    }
  } catch (error) {
    console.error("Error verifying user:", error)
    throw new Error("Failed to verify user")
  }
}
