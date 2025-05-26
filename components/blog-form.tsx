"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Loader2, Upload } from "lucide-react"
import { toast } from "sonner"
import TipTapEditor from "./tiptap-editor"

interface BlogFormProps {
  blogId?: string
}

interface BlogData {
  title: string
  description: string
  content: string
  imageUrl: string
  tags: string
  published: boolean
}

export default function BlogForm({ blogId }: BlogFormProps) {
  const { token } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [formData, setFormData] = useState<BlogData>({
    title: "",
    description: "",
    content: "",
    imageUrl: "",
    tags: "",
    published: false,
  })

  useEffect(() => {
    // If editing an existing blog, fetch its data
    if (blogId && token) {
      setIsLoading(true)
      fetch(`/api/blogs/${blogId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.blog) {
            setFormData({
              title: data.blog.title,
              description: data.blog.description,
              content: data.blog.content,
              imageUrl: data.blog.image_url || "",
              tags: data.blog.tags?.join(", ") || "",
              published: data.blog.published,
            })
          }
        })
        .catch((error) => {
          console.error("Error fetching blog:", error)
          toast.error("Failed to fetch blog data")
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [blogId, token])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, published: checked }))
  }

  const handleContentChange = (content: string) => {
    setFormData((prev) => ({ ...prev, content }))
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !token) return

    setIsUploading(true)

    try {
      console.log("Uploading with token:", token) // Debug log

      // Get a signed URL for uploading
      const urlResponse = await fetch("/api/blogs/upload-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          fileName: file.name,
          contentType: file.type,
        }),
      })

      if (!urlResponse.ok) {
        const errorData = await urlResponse.json()
        throw new Error(errorData.error || "Failed to get upload URL")
      }

      const { signedUrl, imageUrl } = await urlResponse.json()

      // Upload the file directly to S3
      const uploadResponse = await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": file.type,
        },
      })

      if (!uploadResponse.ok) {
        throw new Error("Failed to upload image")
      }

      // Update form with the image URL
      setFormData((prev) => ({ ...prev, imageUrl }))

      toast.success("Image uploaded successfully")
    } catch (error) {
      console.error("Error uploading image:", error)
      toast.error(error instanceof Error ? error.message : "Failed to upload image")
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!token) {
      toast.error("You must be logged in to perform this action")
      return
    }

    setIsSaving(true)

    try {
      console.log("Submitting with token:", token) // Debug log

      const url = blogId ? `/api/blogs/update/${blogId}` : "/api/blogs/create"
      const method = blogId ? "PUT" : "POST"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          content: formData.content,
          imageUrl: formData.imageUrl,
          tags: formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean),
          published: formData.published,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error("API error response:", errorData) // Debug log
        throw new Error(errorData.error || `Failed to ${blogId ? "update" : "create"} blog`)
      }

      toast.success(`Blog ${blogId ? "updated" : "created"} successfully`)
      router.push("/admin/blogs")
    } catch (error) {
      console.error("Error saving blog:", error)
      toast.error(error instanceof Error ? error.message : `Failed to ${blogId ? "update" : "create"} blog`)
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter a short description"
              rows={3}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="e.g. technology, programming, web"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <Card>
              <CardContent className="p-4">
                {formData.imageUrl ? (
                  <div className="space-y-4">
                    <div className="aspect-video overflow-hidden rounded-md border">
                      <img
                        src={formData.imageUrl || "/placeholder.svg"}
                        alt="Featured"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={isUploading}
                        className="hidden"
                      />
                      <Label
                        htmlFor="image"
                        className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                      >
                        {isUploading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Uploading...
                          </>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Change Image
                          </>
                        )}
                      </Label>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <div className="text-center">
                      <Upload className="mx-auto h-8 w-8 text-muted-foreground" />
                      <p className="mt-2 text-sm text-muted-foreground">Upload a featured image for your blog</p>
                    </div>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                    <Label
                      htmlFor="image"
                      className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="mr-2 h-4 w-4" />
                          Upload Image
                        </>
                      )}
                    </Label>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="published" checked={formData.published} onCheckedChange={handleSwitchChange} />
            <Label htmlFor="published">Publish this blog</Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <TipTapEditor value={formData.content} onChange={handleContentChange} />
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.push("/admin/blogs")}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSaving}>
          {isSaving ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {blogId ? "Updating..." : "Creating..."}
            </>
          ) : blogId ? (
            "Update Blog"
          ) : (
            "Create Blog"
          )}
        </Button>
      </div>
    </form>
  )
}
