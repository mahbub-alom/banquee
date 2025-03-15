"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation
import AllData from "@/lib/getAllBlog";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      const data = await AllData();
      setBlogs(data);
      setFilteredBlogs(data); // Show all blogs initially
    };

    fetchData();
  }, []);

  const categories = ["All", "Product", "Technology", "App"];

  // Filter blogs based on category
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
    <div className="max-w-6xl mx-auto p-6">
      {/* Category Filter */}
      <div className="flex mb-6 items-center gap-5">
        <span>Categories:</span>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => filterBlogs(category)}
            className={`transition-all duration-300 p-2 rounded cursor-pointer ${
              selectedCategory === category
                ? "bg-gray-200 font-bold"
                : "hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`} passHref>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{blog.title}</h2>
                <p className="text-gray-600 text-sm mt-2">
                  {blog.description.length > 100
                    ? `${blog.description.substring(0, 100)}...`
                    : blog.description}
                </p>
                {
                  blog.description.length > 100 &&(
                    <Link href={`/blogs/${blog.id}`} className="text-blue-500 mt-2 block">Read More</Link>
                  )
                }
                <div className="mt-3 flex gap-2">
                  {blog.categories.map((category, index) => (
                    <span key={index} className="badge badge-outline">
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
