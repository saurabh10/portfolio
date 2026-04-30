import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Rashid Khan",
    role: "Co-Founder at OrderGenie Synergy",
    isHTML: true,
    text: `
      <strong>Working with Saurabh was a great experience. We needed a robust and scalable mobile application for both iOS and Android, and he delivered exactly what we envisioned.</strong><br/><br/>

      From UI/UX design to seamless API integration, everything was handled professionally. The app performs smoothly across platforms, and the code quality is excellent.<br/><br/>

      <strong>What stood out the most was his problem-solving approach and timely delivery.</strong> Even after deployment, he provided great support and quick updates when needed.<br/><br/>

      We highly recommend Saurabh for anyone looking for a reliable mobile app developer.
    `,
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQE4KPPCg1YKUw/profile-displayphoto-scale_400_400/B56ZlwpNMwHkAg-/0/1758531475166?e=1779321600&v=beta&t=7Bot4UvCIdG-kXVtcTbeGqzNQetT7UYaNX0KnjFMeHk",
  },
  {
    name: "Aman Verma",
    role: "CTO at StartupX",
    text: "We approached Saurabh to build a mobile app for our business, and the results exceeded our expectations. The app improved our customer engagement and streamlined our operations significantly. The UI is intuitive, performance is fast, and the overall experience is excellent. is dedication, communication, and technical expertise made the entire process seamless.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Product Manager at FinTech",
    text: "Saurabh delivered a high-quality cross-platform mobile app with smooth performance and clean UI. Very professional, responsive, and reliable throughout the project.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto Slide (every 4 sec)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const next = () =>
    setIndex((prev) => (prev + 1) % testimonials.length);

  const t = testimonials[index];

  return (
    <section className="py-20 px-6 text-center bg-black text-white">
      
      {/* Title */}
      <h2 className="text-3xl font-bold mb-12">
        What Our Freelance Clients Say
      </h2>

      <div className="relative max-w-3xl mx-auto">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 
          bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 
          bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
        >
          <ChevronRight size={20} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center">

          {/* Image */}
          <img
            src={t.image}
            alt={t.name}
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6 object-cover"
          />

          {/* Text */}
          {t.isHTML ? (
            <p
              className="text-gray-400 max-w-xl leading-relaxed mb-6 italic"
              dangerouslySetInnerHTML={{ __html: t.text }}
            />
          ) : (
            <p className="text-gray-400 max-w-xl leading-relaxed mb-6 italic">
              {t.text}
            </p>
          )}

          {/* Name + Role */}
          <div className="flex items-center gap-2 justify-center">
            <h3 className="text-xl font-bold">{t.name}</h3>
            <span className="text-gray-400 text-sm">
              — {t.role}
            </span>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer transition ${
                  i === index
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-600"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}