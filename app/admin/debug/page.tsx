"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export default function DebugPage() {
  const { token } = useAuth()
  const [isVerifying, setIsVerifying] = useState(false)
  const [result, setResult] = useState<any>(null)

  const verifyToken = async () => {
    if (!token) {
      toast.error("No token available")
      return
    }

    setIsVerifying(true)
    try {
      const response = await fetch("/api/auth/verify-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })

      const data = await response.json()
      setResult(data)

      if (data.valid) {
        toast.success("Token is valid")
      } else {
        toast.error("Token is invalid: " + (data.error || "Unknown error"))
      }
    } catch (error) {
      console.error("Error verifying token:", error)
      toast.error("Error verifying token")
    } finally {
      setIsVerifying(false)
    }
  }

  const testBlogsFetch = async () => {
    if (!token) {
      toast.error("No token available")
      return
    }

    setIsVerifying(true)
    try {
      const response = await fetch("/api/blogs?limit=1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await response.json()
      setResult(data)

      if (response.ok) {
        toast.success("Successfully fetched blogs")
      } else {
        toast.error("Failed to fetch blogs: " + (data.error || "Unknown error"))
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
      toast.error("Error fetching blogs")
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Debug Tools</h1>
        <p className="text-muted-foreground">Test authentication and API functionality</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Token Verification</CardTitle>
            <CardDescription>Verify the current authentication token</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm">Current token:</p>
              <pre className="bg-muted p-2 rounded-md text-xs overflow-auto max-h-32">
                {token || "No token available"}
              </pre>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={verifyToken} disabled={isVerifying || !token}>
              {isVerifying ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Verify Token
            </Button>
            <Button onClick={testBlogsFetch} disabled={isVerifying || !token}>
              {isVerifying ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Test Blogs API
            </Button>
          </CardFooter>
        </Card>

        {result && (
          <Card>
            <CardHeader>
              <CardTitle>Result</CardTitle>
              <CardDescription>API response details</CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-2 rounded-md text-xs overflow-auto max-h-96">
                {JSON.stringify(result, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
