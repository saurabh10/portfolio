import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black sticky top-0 z-50">

      <h1 className="text-blue-400 font-bold">SG.DEV</h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        {/* <Link to="/blog">Blog</Link> */}
        <a href="#contact">Contact</a>
      </div>

      {/* Button */}
      <a href="#contact" className="hidden md:block bg-white text-black px-4 py-2 rounded-full">
        Get In Touch
      </a>

      {/* Mobile Icon */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-white">
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 md:hidden">
          <a href="#about" onClick={()=>setOpen(false)}>About</a>
          <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          {/* <Link to="/blog" onClick={()=>setOpen(false)}>Blog</Link> */}
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}