import { type NextRequest, NextResponse } from "next/server"
import { getSignedUploadUrl } from "@/lib/s3"
import { verifyJwt } from "@/lib/jwt"

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1]

    if (!token) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 })
    }

    const payload = verifyJwt(token)

    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    const { fileName, contentType } = await request.json()

    if (!fileName || !contentType) {
      return NextResponse.json({ error: "File name and content type are required" }, { status: 400 })
    }

    const { signedUrl, imageUrl } = await getSignedUploadUrl(fileName, contentType)

    return NextResponse.json({ signedUrl, imageUrl })
  } catch (error) {
    console.error("Error generating upload URL:", error)
    return NextResponse.json({ error: "Failed to generate upload URL" }, { status: 500 })
  }
}
