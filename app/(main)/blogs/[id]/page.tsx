"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Loader2, Calendar, User, ArrowLeft, Share2, Linkedin } from "lucide-react";
import { format } from "date-fns";
import DOMPurify from "dompurify";

interface Blog {
  id: number;
  title: string;
  description: string;
  content: string;
  image_url?: string;
  tags: string[];
  author_name: string;
  created_at: string;
}

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(`/api/blogs/${id}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog not found");
          }
          throw new Error("Failed to fetch blog");
        }

        const data = await response.json();
        setBlog(data.blog);
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBlog();
  }, [id]);

  const shareBlog = (platform: "linkedin" | "twitter") => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog?.title || "KPPM Blog Post");
    if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  if (isLoading) {
    return (
      <section
        id="blog-detail"
        className="py-16 md:py-24 bg-muted relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-primary" aria-label="Loading blog post" />
        </div>
      </section>
    );
  }

  if (error || !blog) {
    return (
      <section
        id="blog-detail"
        className="py-16 md:py-24 bg-muted relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-tr-full opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.history.back()}
                className="flex items-center gap-2 text-primary hover:text-primary/80"
                aria-label="Go back to blogs"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </div>
            <div className="flex flex-col items-center justify-center min-h-[50vh] bg-card rounded-lg p-6 sm:p-8">
              <h1 className="text-xl sm:text-2xl font-bold mb-4">
                {error || "Blog not found"}
              </h1>
              <p className="text-muted-foreground mb-6 text-center max-w-md">
                The blog post you're looking for doesn't exist or has been removed.
              </p>
              <Button
                variant="outline"
                asChild
                className="flex items-center"
                aria-label="Return to blogs page"
              >
                <Link href="/blogs">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Blogs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="blog-detail"
      className="py-16 md:py-24 bg-muted relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/10 rounded-bl-full opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-tr-full opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-primary hover:text-primary/80"
              aria-label="Go back to blogs"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          <article className="space-y-6">
            <div className="w-fit bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
              Blog Post
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
              {blog.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center mb-2 sm:mb-0">
                <User className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>{blog.author_name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" aria-hidden="true" />
                <span>{format(new Date(blog.created_at), "MMMM d, yyyy")}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareBlog("linkedin")}
                className="flex items-center gap-2"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => shareBlog("twitter")}
                className="flex items-center gap-2"
                aria-label="Share on Twitter"
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
            </div>
            {blog.image_url && (
              <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
                <Image
                  src={blog.image_url || "/placeholder.svg"}
                  alt={`Cover image for ${blog.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
                  priority
                />
              </div>
            )}
            <div
              className="prose prose-sm sm:prose-lg max-w-none dark:prose-invert bg-card p-4 sm:p-6 rounded-lg shadow-sm"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(blog.content),
              }}
            />
          </article>
        </div>
      </div>
    </section>
  );
}