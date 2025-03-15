"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getSingleBlog from "@/lib/getSingleBlog";
import AllData from "@/lib/getAllBlog";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// Define Blog Type
interface BlogType {
  id: number;
  title: string;
  image: string;
  description: string;
  categories: string[];
}

const SingleBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<BlogType | null>(null);
  const [allBlogs, setAllBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await getSingleBlog(parseInt(id, 10));
        const allBlog = await AllData();
        setBlog(data);
        setAllBlogs(allBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (!blog) return <div className="text-center p-10">Blog not found</div>;

  return (
    <div className="p-4 md:p-6">
      {/* Blog Content */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {blog.categories.map((category, index) => (
            <p key={index} className="text-[#5bb5a2] text-sm md:text-[16px] badge bg-[#E8F2EE] px-4 py-2">
              {category}
            </p>
          ))}
        </div>
        <h1 className="text-xl md:text-2xl font-bold mt-4">{blog.title}</h1>
        <img src={blog.image} alt={blog.title} className="w-full h-48 md:h-64 object-cover my-4 rounded-lg" />
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">{blog.description}</p>
      </div>

      {/* Related Articles */}
      <div className="mt-12 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-bold">Related Articles</h2>
          <Link href="/blogs" className="flex items-center gap-2 text-[#5bb5a2] mt-4 md:mt-0">
            <span>All Articles</span>
            <FaArrowRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          {allBlogs.slice(0, 3).map((relatedBlog) => (
            <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`} passHref>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition">
                <img src={relatedBlog.image} alt={relatedBlog.title} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{relatedBlog.title}</h2>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{relatedBlog.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedBlog.categories.map((category, index) => (
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
    </div>
  );
};

export default SingleBlogPage;
