import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogCard = ({ title, excerpt, date, readTime, category, image }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-xl overflow-hidden w-full max-w-md transition-all duration-500 hover:shadow-2xl border border-gray-100 dark:border-gray-800">
      <div className="h-56 overflow-hidden relative">
        <img
          src={image || "/api/placeholder/800/600"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide shadow-sm">
          {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-grow line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center">
              <Calendar size={14} className="mr-1 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="mr-1 text-primary" />
              <span>{readTime} min read</span>
            </div>
          </div>

          <button className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
            Read <ArrowRight size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
