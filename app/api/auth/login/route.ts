import { type NextRequest, NextResponse } from "next/server"
import { verifyUser } from "@/lib/auth"
import { signJwt } from "@/lib/jwt"

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const user = await verifyUser(email, password)

    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const token = signJwt({ id: user.id, email: user.email })

    // Log the token for debugging
    console.log("Generated token:", token)

    return NextResponse.json({ user, token })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Failed to login" }, { status: 500 })
  }
}
