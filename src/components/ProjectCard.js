import { useState, useEffect } from "react";

export default function ProjectCard({ p }) {
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (hovered) {
      interval = setInterval(() => {
        setImgIndex((prev) => (prev + 1) % p.images.length);
      }, 1200);
    }

    return () => clearInterval(interval);
  }, [hovered, p.images.length]);

  return (
    <div
      className="group relative rounded-xl overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setImgIndex(0);
      }}
    >
      {/* Image */}
      <img
        src={p.images[imgIndex]}
        alt={p.title}
        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

      {/* Content */}
      <div className="absolute bottom-0 p-5 z-10">
        <h3 className="text-xl font-bold text-white">{p.title}</h3>
        <p className="text-gray-300 text-sm mt-1 line-clamp-2">
          {p.desc}
        </p>
      </div>

      {/* Buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition z-20">

        {p.playStore && (
          <a
            href={p.playStore}
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
          >
            Play Store
          </a>
        )}

        {p.appStore && (
          <a
            href={p.appStore}
            target="_blank"
            rel="noreferrer"
            className="border border-white px-5 py-2 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition"
          >
            App Store
          </a>
        )}

      </div>
    </div>
  );
}