import BlogForm from "@/components/blog-form"

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Create New Blog</h1>
        <p className="text-muted-foreground">Create a new blog post to share with your audience</p>
      </div>

      <BlogForm />
    </div>
  )
}
