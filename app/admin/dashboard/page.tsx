"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, FileText, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { token } = useAuth()
  const [stats, setStats] = useState({
    totalBlogs: 0,
    totalContacts: 0,
    isLoading: true,
  })

  useEffect(() => {
    async function fetchStats() {
      try {
        if (!token) {
          setStats((prev) => ({ ...prev, isLoading: false }))
          return
        }

        // Fetch blog count
        const blogsResponse = await fetch("/api/blogs?limit=1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!blogsResponse.ok) {
          const errorData = await blogsResponse.json()
          throw new Error(errorData.error || "Failed to fetch blog stats")
        }

        const blogsData = await blogsResponse.json()

        // Fetch contact count
        const contactsResponse = await fetch("/api/contacts/list?limit=1", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!contactsResponse.ok) {
          const errorData = await contactsResponse.json()
          throw new Error(errorData.error || "Failed to fetch contact stats")
        }

        const contactsData = await contactsResponse.json()

        setStats({
          totalBlogs: blogsData.pagination?.total || 0,
          totalContacts: contactsData.pagination?.total || 0,
          isLoading: false,
        })
      } catch (error) {
        console.error("Error fetching stats:", error)
        setStats((prev) => ({ ...prev, isLoading: false }))
      }
    }

    fetchStats()
  }, [token])

  if (stats.isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your blog and contact management system</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/admin/blogs">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Total Blogs</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBlogs}</div>
              <p className="text-xs text-muted-foreground">Manage your blog posts</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/contacts">
          <Card className="hover:bg-muted/50 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Contact Requests</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground">View and manage contact requests</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
