"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Loader2, Calendar, User } from "lucide-react"
import { format } from "date-fns"

interface Blog {
  id: number
  title: string
  description: string
  content: string
  image_url?: string
  tags: string[]
  author_name: string
  created_at: string
}

export default function BlogDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const [blog, setBlog] = useState<Blog | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${params.id}`)

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog not found")
          }
          throw new Error("Failed to fetch blog")
        }

        const data = await response.json()
        setBlog(data.blog)
      } catch (err) {
        console.error("Error fetching blog:", err)
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlog()
  }, [params.id])

  if (isLoading) {
    return (
      <div className="container py-12 flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (error || !blog) {
    return (
      <div className="container py-12 flex flex-col items-center justify-center min-h-[50vh]">
        <h1 className="text-2xl font-bold mb-4">{error || "Blog not found"}</h1>
        <p className="text-muted-foreground mb-6">
          The blog post you're looking for doesn't exist or has been removed.
        </p>
      </div>
    )
  }

  return (
    <article className="container py-8 max-w-4xl">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{blog.title}</h1>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            {blog.author_name}
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {format(new Date(blog.created_at), "MMMM d, yyyy")}
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {blog.image_url && (
        <div className="aspect-video overflow-hidden rounded-lg mb-8">
          <img src={blog.image_url || "/placeholder.svg"} alt={blog.title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="prose prose-lg max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: blog.content }} />
    </article>
  )
}
