"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getSingleBlog from "@/lib/getSingleBlog";
import AllData from "@/lib/getAllBlog";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      const data = await getSingleBlog(parseInt(id));
      const allBlog = await AllData();
      setAllBlogs(allBlog);
      setBlog(data);
    };

    if (id) fetchBlog();
  }, [id]);

  if (!blog) return <div className="text-center p-10">Blog not found</div>;

  return (
    <div>
    <div className="max-w-3xl mx-auto p-6 text-center">
      <div className="mt-4 flex gap-2 justify-center space-y-4">
        {blog.categories.map((category, index) => (
          <p
            key={index}
            className="text-[#5bb5a2] text-[16px] badge bg-[#E8F2EE] p-4 my-4"
          >
            {category}
          </p>
        ))}
      </div>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-64 object-cover my-4 rounded-lg"
      />
      <p className="text-gray-600">{blog.description}</p>

      {/* Related Articles Section */}
    
    </div>
    <div className="mt-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-left">Related Articles</h2>
          <h2 className="">
            <Link href="/blogs" className="flex items-center gap-2 text-[#5bb5a2]">
              <span>All Articles</span> <span><FaArrowRight /></span>
            </Link>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {allBlogs.slice(0, 3).map((blog) => (
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
                    {blog.description}
                  </p>
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
    </div>
  );
};

export default SingleBlogPage;
