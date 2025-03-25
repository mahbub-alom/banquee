"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import AllData from "@/lib/getAllBlog";

// Define Blog Type
interface BlogType {
  id: number;
  title: string;
  image: string;
  description: string;
  categories: string[];
}

// Define Categories
const categories: Array<"All" | "Product" | "Technology" | "App"> = [
  "All",
  "Product",
  "Technology",
  "App",
];

const BlogsPage = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Fetch blogs on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await AllData();
        setBlogs(data);
        setFilteredBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  // Filter Blogs by Category
  const filterBlogs = useCallback((category: string) => {
    setSelectedCategory(category);
    setFilteredBlogs(
      category === "All" ? blogs : blogs.filter((blog) => blog.categories.includes(category))
    );
  }, [blogs]);

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Category Filters */}
      <div className="flex flex-wrap mb-6 items-center gap-3 md:gap-5 text-center justify-center md:justify-start">
        <span className="font-medium text-gray-900">Categories:</span>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => filterBlogs(category)}
            className={`transition-all duration-300 px-3 py-1 rounded cursor-pointer text-sm md:text-base text-gray-900 ${
              selectedCategory === category ? "bg-gray-200 font-bold" : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
              <div className="bg-white  rounded-lg overflow-hidden cursor-pointer transition w-full">
                <img src={blog.image} alt={blog.title} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
                <div className="py-4">
                  <h2 className="text-lg font-semibold leading-tight text-gray-900">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">
                    {blog.description.length > 100
                      ? `${blog.description.substring(0, 100)}...`
                      : blog.description}
                  </p>
                  {blog.description.length > 100 && (
                    <Link href={`/blogs/${blog.id}`} className="text-blue-500 mt-2 block">Read More</Link>
                  )}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {blog.categories.map((category, index) => (
                      <span key={index} className="badge border border-gray-300 text-gray-600 bg-white text-xs px-2 py-1 rounded-md">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center col-span-3">No blogs available in this category.</p>
        )}
      </div>
    </div>
    </section>
  );
};

export default BlogsPage;
