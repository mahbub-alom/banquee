"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AllData from "@/lib/getAllBlog";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const data = await AllData();
      setBlogs(data);
      setFilteredBlogs(data);
    };

    fetchData();
  }, []);

  const categories = ["All", "Product", "Technology", "App"];

  const filterBlogs = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(
        blogs.filter((blog) => blog.categories.includes(category))
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="flex flex-wrap mb-6 items-center gap-3 md:gap-5 text-center justify-center md:justify-start">
        <span className="font-medium">Categories:</span>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => filterBlogs(category)}
            className={`transition-all duration-300 px-3 py-1 rounded cursor-pointer text-sm md:text-base ${
              selectedCategory === category
                ? "bg-gray-200 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold leading-tight">{blog.title}</h2>
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
                    <span key={index} className="badge border border-gray-300 text-gray-600 text-xs px-2 py-1 rounded-md">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
