import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export function signJwt(payload: any) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" }) // Extend token expiration to 7 days
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    console.error("JWT verification error:", error)
    return null
  }
}
