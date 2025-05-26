import { type NextRequest, NextResponse } from "next/server"
import { verifyJwt } from "@/lib/jwt"

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json()

    if (!token) {
      return NextResponse.json({ error: "Token is required" }, { status: 400 })
    }

    const payload = verifyJwt(token)

    if (!payload) {
      return NextResponse.json({ valid: false, error: "Invalid token" }, { status: 200 })
    }

    return NextResponse.json({ valid: true, payload }, { status: 200 })
  } catch (error) {
    console.error("Token verification error:", error)
    return NextResponse.json({ valid: false, error: "Failed to verify token" }, { status: 500 })
  }
}
