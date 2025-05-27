import BlogForm from "@/components/blog-form";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Await the params to get the id

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Edit Blog</h1>
        <p className="text-muted-foreground">Make changes to your blog post</p>
      </div>

      <BlogForm blogId={id} />
    </div>
  );
}