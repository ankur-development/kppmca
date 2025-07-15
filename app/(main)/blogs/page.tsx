"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader2, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog-card";

interface Blog {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  tags: string[];
  author_name: string;
  created_at: string;
}

interface PaginationData {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [pagination, setPagination] = useState<PaginationData>({
    total: 0,
    page: 1,
    limit: 9,
    pages: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchBlogs = async (page = 1) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/blogs?page=${page}&limit=${pagination.limit}`);

      if (!response.ok) {
        throw new Error("Failed to fetch blogs");
      }

      const data = await response.json();
      setBlogs(data.blogs || []);
      setPagination(data.pagination || pagination);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <section
      id="blogs"
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
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </div>
          <div className="text-center mb-8 md:mb-12">
            <div className="w-fit mx-auto bg-accent text-primary px-4 py-1 rounded-full text-sm font-medium">
              Our Blog
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mt-4 mb-2">
              Insights & Updates
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the latest insights, tutorials, and updates from our team at KPPM.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogs.map((blog) => (
                  <Link key={blog.id} href={`/blogs/${blog.id}`}>
                    <BlogCard
                      title={blog.title}
                      image={blog.image_url || "/placeholder.svg"}
                      excerpt={blog.description}
                      date={blog.created_at}
                      readTime={5}
                      author={blog.author_name}
                      tags={blog.tags}
                    />
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
                          return (
                            page === 1 ||
                            page === pagination.pages ||
                            Math.abs(page - pagination.page) <= 1
                          );
                        })
                        .map((page, i, arr) => {
                          if (i > 0 && page - arr[i - 1] > 1) {
                            return (
                              <PaginationItem key={`ellipsis-${page}`}>
                                <span className="px-4">...</span>
                              </PaginationItem>
                            );
                          }

                          return (
                            <PaginationItem key={page}>
                              <PaginationLink
                                onClick={() => fetchBlogs(page)}
                                isActive={page === pagination.page}
                              >
                                {page}
                              </PaginationLink>
                            </PaginationItem>
                          );
                        })}
                      <PaginationItem>
                        <PaginationNext
                          onClick={() =>
                            fetchBlogs(Math.min(pagination.pages, pagination.page + 1))
                          }
                          className={
                            pagination.page >= pagination.pages
                              ? "pointer-events-none opacity-50"
                              : "cursor-pointer"
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
      </div>
    </section>
  );
}