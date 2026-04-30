// export default function Blog() {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-10">
//       <h1 className="text-3xl font-bold mb-6">My Blog</h1>

//       <div className="space-y-4">
//         <div className="bg-gray-800 p-4 rounded">
//           <h2 className="text-xl font-bold">How I built my app</h2>
//           <p className="text-gray-400">
//             Learn how I created scalable mobile apps.
//           </p>
//         </div>

//         <div className="bg-gray-800 p-4 rounded">
//           <h2 className="text-xl font-bold">Swift vs Flutter</h2>
//           <p className="text-gray-400">
//             Which one should you choose?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";
import blogs from "../data/blogs";

export default function Blog() {
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">

      <h1 className="text-3xl font-bold mb-10">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="cursor-pointer group"
          >

            {/* Image */}
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="rounded-lg mb-4 group-hover:scale-105 transition"
            />

            {/* Title */}
            <h2 className="font-semibold text-lg group-hover:text-primary">
              {blog.title}
            </h2>

            {/* Meta */}
            <p className="text-gray-400 text-sm mt-2">
              {blog.author} • {blog.date} • {blog.readTime}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}