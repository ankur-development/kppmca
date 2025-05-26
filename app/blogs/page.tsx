"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2 } from "lucide-react"
import { format } from "date-fns"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface Blog {
  id: number
  title: string
  description: string
  image_url?: string
  tags: string[]
  author_name: string
  created_at: string
}

interface PaginationData {
  total: number
  page: number
  limit: number
  pages: number
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 9,
    pages: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchBlogs = async (page = 1) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/blogs?page=${page}&limit=${pagination.limit}`)

      if (!response.ok) {
        throw new Error("Failed to fetch blogs")
      }

      const data = await response.json()
      setBlogs(data.blogs || [])
      setPagination(data.pagination || pagination)
    } catch (error) {
      console.error("Error fetching blogs:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="container py-8 md:py-12">
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Our Blog</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the latest insights, tutorials, and updates from our team
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">No blogs found</h3>
          <p className="text-muted-foreground">Check back later for new content</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <Link key={blog.id} href={`/blogs/${blog.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                  {blog.image_url && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={blog.image_url || "/placeholder.svg"}
                        alt={blog.title}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
                    <CardDescription>
                      By {blog.author_name} • {format(new Date(blog.created_at), "MMM d, yyyy")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground line-clamp-3">{blog.description}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-1">
                      {blog.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          {pagination.pages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => fetchBlogs(Math.max(1, pagination.page - 1))}
                      className={pagination.page <= 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                    .filter((page) => {
                      return page === 1 || page === pagination.pages || Math.abs(page - pagination.page) <= 1
                    })
                    .map((page, i, arr) => {
                      if (i > 0 && page - arr[i - 1] > 1) {
                        return (
                          <PaginationItem key={`ellipsis-${page}`}>
                            <span className="px-4">...</span>
                          </PaginationItem>
                        )
                      }

                      return (
                        <PaginationItem key={page}>
                          <PaginationLink onClick={() => fetchBlogs(page)} isActive={page === pagination.page}>
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      )
                    })}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => fetchBlogs(Math.min(pagination.pages, pagination.page + 1))}
                      className={
                        pagination.page >= pagination.pages ? "pointer-events-none opacity-50" : "cursor-pointer"
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </>
      )}
    </div>
  )
}
