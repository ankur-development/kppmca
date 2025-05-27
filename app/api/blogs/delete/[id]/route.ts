import { type NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { verifyJwt } from "@/lib/jwt";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.headers.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Authentication required" }, { status: 401 });
    }

    const payload = verifyJwt(token) as { id: string } | null;

    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { id } = await params; // Await the params to get the id

    // Check if blog exists and belongs to the user
    const checkResult = await pool.query("SELECT * FROM blogs WHERE id = $1", [id]);

    if (checkResult.rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    if (checkResult.rows[0].user_id !== payload.id) {
      return NextResponse.json({ error: "Unauthorized to delete this blog" }, { status: 403 });
    }

    // Delete the blog
    await pool.query("DELETE FROM blogs WHERE id = $1", [id]);

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}