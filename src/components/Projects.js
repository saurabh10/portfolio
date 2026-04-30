// export default function Projects() {
//   return (
//     <section className="p-10">
//       <h2 className="text-2xl font-bold">Projects</h2>
//     </section>
//   );
// }

// import { motion } from "framer-motion";

// const projects = [
//   {
//     title: "Video to Audio App",
//     desc: "Convert videos into audio with smooth UX.",
//     img: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
//   {
//     title: "Meditation App",
//     desc: "Streaming + subscription-based wellness app.",
//     img: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
//   {
//     title: "Finance Tracker",
//     desc: "Track expenses with analytics & charts.",
//     img: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
//   {
//     title: "Video to Audio App",
//     desc: "Convert videos into audio with smooth UX.",
//     img: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
//   {
//     title: "Meditation App",
//     desc: "Streaming + subscription-based wellness app.",
//     img: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
//   {
//     title: "Finance Tracker",
//     desc: "Track expenses with analytics & charts.",
//     img: "https://via.placeholder.com/600x400",
//     link: "#",
//   },
// ];

// export default function Projects() {
//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      
//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Featured Projects
//       </h2>

//       {/* Grid */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
//           >
            
//             {/* Image */}
//             <div className="overflow-hidden">
//               <img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-full h-48 object-cover hover:scale-110 transition duration-500"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-4 space-y-2">
//               <h3 className="text-xl font-bold">{p.title}</h3>
//               <p className="text-gray-400 text-sm">{p.desc}</p>

//               <a
//                 href={p.link}
//                 className="inline-block mt-2 text-blue-400 hover:underline"
//               >
//                 View Project →
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//     </section>
//   );
// }

import { motion } from "framer-motion";

const projects = [
  {
    title: "Video to Audio App Saurabh",
    desc: "Convert videos into audio with smooth UX.",
    img: "https://i.ibb.co/CKGhTkHS/Screenshot-2026-04-29-at-5-44-43-PM.png",
    playStore: "#",
    appStore: "#",
  },
  {
    title: "Meditation App",
    desc: "Streaming + subscription-based wellness app.",
    img: "https://via.placeholder.com/600x400",
    playStore: "#",
  },
  {
    title: "Finance Tracker",
    desc: "Track expenses with analytics & charts.",
    img: "https://via.placeholder.com/600x400",
    appStore: "#",
  },
  {
    title: "Video to Audio App",
    desc: "Convert videos into audio with smooth UX.",
    img: "https://via.placeholder.com/600x400",
    playStore: "#",
    appStore: "#",
  },
  {
    title: "Meditation App",
    desc: "Streaming + subscription-based wellness app.",
    img: "https://via.placeholder.com/600x400",
    playStore: "#",
  },
  {
    title: "Finance Tracker",
    desc: "Track expenses with analytics & charts.",
    img: "https://via.placeholder.com/600x400",
    appStore: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group relative rounded-xl overflow-hidden"
          >

            {/* Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

            {/* Bottom content */}
            <div className="absolute bottom-0 p-5 z-10">
              <h3 className="text-xl font-bold text-white">
                {p.title}
              </h3>

              <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                {p.desc}
              </p>
            </div>

            {/* Hover Buttons */}
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition z-20">

              {/* Play Store */}
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

              {/* App Store */}
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

          </motion.div>
        ))}

      </div>

    </section>
  );
}