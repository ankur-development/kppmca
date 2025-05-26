import React from "react";
import BlogCard from "../components/blog-card";

const Blogs = () => {
  // Sample blog data
  const blogPosts = [
    {
      title: "Tax Optimization Strategies for Small Businesses in 2025",
      excerpt:
        "Discover actionable strategies to minimize your tax burden legally while maximizing deductions available to small business owners this fiscal year.",
      date: "May 15, 2025",
      readTime: 7,
      category: "Taxation",
      image: "/placeholder.svg",
    },
    {
      title: "Understanding Market Volatility: Protecting Your Investments",
      excerpt:
        "Learn how to safeguard your portfolio against market fluctuations with diversification strategies designed for long-term financial security.",
      date: "May 8, 2025",
      readTime: 5,
      category: "Investing",
      image: "/placeholder.svg",
    },
    {
      title: "The Future of Digital Banking: Trends to Watch",
      excerpt:
        "Explore emerging technologies reshaping financial services and how they'll transform the way you manage, save, and grow your money.",
      date: "April 29, 2025",
      readTime: 6,
      category: "Finance Tech",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 md:py-16 w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <div className="py-4 max-w-4xl text-center flex flex-col items-center mb-8 sm:mb-12">
        <div className="w-fit bg-accent text-primary px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
          Expert Insights
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl mt-3 sm:mt-4">
          Financial Knowledge Hub
        </h1>
        <p className="max-w-xl mt-3 sm:mt-4 text-sm sm:text-base md:text-lg">
          Our expert-crafted articles deliver practical wisdom, actionable
          strategies, and forward-thinking insights to help you make smarter
          financial decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl w-full px-4">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            category={post.category}
            image={post.image}
          />
        ))}
      </div>

      <div className="mt-8 sm:mt-12">
        <button className="bg-card border hover:bg-accent/90 font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full cursor-pointer transition-colors text-sm sm:text-base">
          View All Articles
        </button>
      </div>
    </div>
  );
};

export default Blogs;
