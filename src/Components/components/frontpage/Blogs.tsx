"use client";
import AllData from "@/lib/getAllBlog";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface BlogType {
  id: number;
  title: string;
  image: string;
  description: string;
  categories: string[];
}

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        setLoading(true);
        const allBlog = await AllData();
        setAllBlogs(allBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, []);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h2 className="text-2l md:text-4xl font-bold text-gray-900">Blog</h2>
          <Link
            href="/blogs"
            className="flex items-center gap-2 text-[#5bb5a2] mt-4 md:mt-0"
          >
            <span>All Articles</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {allBlogs.slice(0, 3).map((relatedBlog) => (
            <Link
              key={relatedBlog.id}
              href={`/blogs/${relatedBlog.id}`}
              passHref
            >
              <div className="bg-white rounded-lg overflow-hidden cursor-pointer  transition">
                <img
                  src={relatedBlog.image}
                  alt={relatedBlog.title}
                  className="w-full h-40 md:h-48 object-cover rounded-md"
                />
                <div className="my-4">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {relatedBlog.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {relatedBlog.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedBlog.categories.map((category, index) => (
                      <span
                        key={index}
                        className="badge border border-gray-300 text-gray-900 bg-white text-xs px-2 py-1 rounded-md"
                      >
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
    </section>
  );
};

export default Blogs;
