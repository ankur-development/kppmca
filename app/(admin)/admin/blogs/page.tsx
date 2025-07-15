"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Badge } from "@/components/ui/badge"
import { Loader2, Plus, Pencil, Trash2 } from "lucide-react"
import { format } from "date-fns"
import { toast } from "sonner"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

interface Blog {
  id: number
  title: string
  description: string
  tags: string[]
  published: boolean
  created_at: string
}

interface PaginationData {
  total: number
  page: number
  limit: number
  pages: number
}

export default function BlogsPage() {
  const { token } = useAuth()
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 10,
    pages: 0,
  })
  const [isLoading, setIsLoading] = useState(true)

  const fetchBlogs = async (page = 1) => {
    if (!token) return

    setIsLoading(true)
    try {
      console.log("Fetching blogs with token:", token) // Debug log

      const response = await fetch(`/api/blogs?page=${page}&limit=${pagination.limit}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("API error response:", errorData) // Debug log
        throw new Error(errorData.error || "Failed to fetch blogs")
      }

      const data = await response.json()
      setBlogs(data.blogs || [])
      setPagination(data.pagination || pagination)
    } catch (error) {
      console.error("Error fetching blogs:", error)
      toast.error(error instanceof Error ? error.message : "Failed to fetch blogs")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!token) return

    try {
      const response = await fetch(`/api/blogs/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to delete blog")
      }

      toast.success("Blog deleted successfully")

      // Refresh the blogs list
      fetchBlogs(pagination.page)
    } catch (error) {
      console.error("Error deleting blog:", error)
      toast.error(error instanceof Error ? error.message : "Failed to delete blog")
    }
  }

  useEffect(() => {
    if (token) {
      fetchBlogs()
    }
  }, [token])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Blogs</h1>
          <p className="text-muted-foreground">Manage your blog posts</p>
        </div>
        <Link href="/admin/blogs/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Blog
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 border rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">No blogs found</h3>
          <p className="text-muted-foreground mb-4">Get started by creating a new blog post</p>
          <Link href="/admin/blogs/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Blog
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="border rounded-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead className="hidden md:table-cell">Tags</TableHead>
                  <TableHead className="hidden md:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell className="hidden md:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                        {blog.tags.length > 3 && <Badge variant="outline">+{blog.tags.length - 3}</Badge>}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Badge variant={blog.published ? "default" : "secondary"}>
                        {blog.published ? "Published" : "Draft"}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {format(new Date(blog.created_at), "MMM d, yyyy")}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Link href={`/admin/blogs/edit/${blog.id}`}>
                          <Button size="icon" variant="outline">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </Link>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="icon" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the blog post.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction onClick={() => handleDelete(blog.id)}>Delete</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {pagination.pages > 1 && (
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
                    // Show first page, last page, current page, and pages around current page
                    return page === 1 || page === pagination.pages || Math.abs(page - pagination.page) <= 1
                  })
                  .map((page, i, arr) => {
                    // Add ellipsis
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
          )}
        </>
      )}
    </div>
  )
}
