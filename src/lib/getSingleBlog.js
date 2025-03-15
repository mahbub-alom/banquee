export default async function getSingleBlog(id) {
    const response = await fetch("/blogs.json");
    const blogs = await response.json();
    return blogs.find(blog => blog.id === id) || null;
  }
  