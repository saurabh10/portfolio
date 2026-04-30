import { useParams } from "react-router-dom";
import blogs from "../data/blogs";

export default function BlogDetail() {
  const { id } = useParams();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="text-white p-10">Blog not found</div>;

  return (
    <div className="bg-white text-black min-h-screen px-6 py-10">

      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-4">
          {blog.title}
        </h1>

        {/* Meta */}
        <p className="text-gray-500 mb-8">
          {blog.author} • {blog.date} • {blog.readTime}
        </p>

        {/* Content (HTML render) */}
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

      </div>
    </div>
  );
}