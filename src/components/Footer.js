import { Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Location */}
        <div className="flex items-center gap-2 text-sm">
          <Globe size={18} className="text-blue-400" />
          <span>Noida, India</span>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          SAURABH GUPTA © {new Date().getFullYear()}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">

          {/* LinkedIn (SVG FIXED) */}
          <a
            href="https://www.linkedin.com/in/saurabh92gupta/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:bg-blue-600 hover:text-white transition"
          >
            <svg
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7.5 0h3.8v1.7h.1c.5-.9 1.7-1.9 3.6-1.9 3.9 0 4.6 2.6 4.6 6V20h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V20h-4V8z" />
            </svg>
          </a>

          {/* GitHub (SVG FIXED) */}
          <a
  href="https://github.com/your-username"
  target="_blank"
  rel="noreferrer"
  className="group p-3 rounded-xl bg-gray-900 border border-gray-800 hover:bg-white transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    className="text-gray-400 group-hover:text-black transition"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.12.82-.26.82-.58 
    0-.28-.01-1.02-.02-2-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77
    -1.1-.75.08-.74.08-.74 1.22.09 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 
    3.53 1 .11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 
    0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 
    3.3 1.23a11.5 11.5 0 013-.4c1.02 0 2.04.14 3 .4 
    2.28-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 
    1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.92.43.37.81 1.1.81 
    2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.7.83.58A12.01 12.01 0 0024 
    12c0-6.63-5.37-12-12-12z"/>
  </svg>
</a>

          {/* Arrow */}
          <a
            href="/"
            className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:bg-green-600 hover:text-white transition"
          >
            <ArrowUpRight size={18} />
          </a>

        </div>

      </div>

    </footer>
  );
}