// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const projects = [
//   {
//     title: "Chaayos.com",
//     desc: "Chai & Snacks Order.",
//     images: [
//       "https://i.ibb.co/kVm2xLLz/1.png",
//       "https://i.ibb.co/rfdPm5S3/2.png",
//       "https://i.ibb.co/VWJmdKmP/3.png",
//     ],
//     playStore: "https://play.google.com/store/apps/details?id=com.chaayos&hl=en_IN",
//     appStore: "https://apps.apple.com/in/app/chaayos-india/id1521406820",
//   },
//   {
//     title: "Meditation App",
//     desc: "Streaming + subscription-based wellness app.",
//     images: [
//       "https://via.placeholder.com/600x400",
//       "https://via.placeholder.com/600x400/333",
//     ],
//     playStore: "#",
//   },
//   {
//     title: "Finance Tracker",
//     desc: "Track expenses with analytics & charts.",
//     images: [
//       "https://via.placeholder.com/600x400",
//       "https://via.placeholder.com/600x400/444",
//     ],
//     appStore: "#",
//   },
//   {
//     title: "Video to Audio App",
//     desc: "Convert videos into audio with smooth UX.",
//     images: [
//       "https://via.placeholder.com/600x400",
//       "https://via.placeholder.com/600x400/555",
//     ],
//     playStore: "#",
//     appStore: "#",
//   },
//   {
//     title: "Meditation App",
//     desc: "Streaming + subscription-based wellness app.",
//     images: [
//       "https://via.placeholder.com/600x400",
//       "https://via.placeholder.com/600x400/666",
//     ],
//     playStore: "#",
//   },
//   {
//     title: "Finance Tracker",
//     desc: "Track expenses with analytics & charts.",
//     images: [
//       "https://via.placeholder.com/600x400",
//       "https://via.placeholder.com/600x400/777",
//     ],
//     appStore: "#",
//   },
// ];

// export default function Projects() {
//   const [hovered, setHovered] = useState(null);
//   const [imgIndex, setImgIndex] = useState(0);

//   useEffect(() => {
//     if (hovered !== null) {
//       const interval = setInterval(() => {
//         setImgIndex((prev) => {
//           const total = projects[hovered].images.length;
//           return (prev + 1) % total;
//         });
//       }, 1200); // speed control

//       return () => clearInterval(interval);
//     }
//   }, [hovered]);

//   return (
//     <section id="projects" className="max-w-6xl mx-auto px-6 py-20">
      
//       {/* Title */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         Projects
//       </h2>

//       {/* Grid */}
//       <div className="grid md:grid-cols-3 gap-6">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.15 }}
//             viewport={{ once: true }}
//             className="group relative rounded-xl overflow-hidden"
//           >

//             {/* IMAGE WITH HOVER SLIDER */}
//             <div
//               onMouseEnter={() => setHovered(i)}
//               onMouseLeave={() => {
//                 setHovered(null);
//                 setImgIndex(0);
//               }}
//               className="relative w-full h-64 overflow-hidden"
//             >
//               <img
//                 src={
//                   hovered === i
//                     ? p.images[imgIndex]
//                     : p.images[0]
//                 }
//                 alt={p.title}
//                 className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
//               />
//             </div>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition" />

//             {/* Bottom Content */}
//             <div className="absolute bottom-0 p-5 z-10">
//               <h3 className="text-xl font-bold text-white">
//                 {p.title}
//               </h3>

//               <p className="text-gray-300 text-sm mt-1 line-clamp-2">
//                 {p.desc}
//               </p>
//             </div>

//             {/* Hover Buttons */}
//             <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition z-20">

//               {p.playStore && (
//                 <a
//                   href={p.playStore}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="bg-primary px-5 py-2 rounded-lg text-white font-semibold hover:scale-105 transition"
//                 >
//                   Play Store
//                 </a>
//               )}

//               {p.appStore && (
//                 <a
//                   href={p.appStore}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="border border-white px-5 py-2 rounded-lg text-white font-semibold hover:bg-white hover:text-black transition"
//                 >
//                   App Store
//                 </a>
//               )}

//             </div>

//           </motion.div>
//         ))}
//       </div>

//     </section>
//   );
// }




import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Indya (1M+ Downloads)",
    desc: "Fashion Shopping App",
    images: [
      "https://i.ibb.co/VYtL4Y4r/Indya-1.png",
      "https://i.ibb.co/1YYcpfpf/Indya-2.png",
      "https://i.ibb.co/3ymzycQt/Indya-3.png",
      "https://i.ibb.co/rKSkNrFL/Indya-4.png",
      "https://i.ibb.co/HftDcpx9/Indya-5.png",
      "https://i.ibb.co/4nbxN0RY/Indya-6.png",
      "https://i.ibb.co/QvQ8Phr1/Indya-7.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.houseofindya&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/indya-women-indian-wear-online/id1496306217",
  },
    {
    title: "Chaayos.com (100k+ Downloads)",
    desc: "Chai & Snacks Order.",
    images: [
      "https://i.ibb.co/kVm2xLLz/1.png",
      "https://i.ibb.co/rfdPm5S3/2.png",
      "https://i.ibb.co/VWJmdKmP/3.png",
    ],
    appStore: "https://apps.apple.com/in/app/chaayos-india/id1521406820",
  },
  {
    title: "Lakmé Salon (100k+ Downloads)",
    desc: "Beauty & salon booking  and cosmatic shopping app.",
    images: [
      "https://i.ibb.co/tMSR6kk2/lakme-salon-1.png",
      "https://i.ibb.co/KvmWFhs/lakme-salon-2.png",
      "https://i.ibb.co/8gL6WvY8/lakme-salon-3.png",
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.lakme.lakmesalon&hl=en_IN",
    appStore: "https://apps.apple.com/in/app/lakm%C3%A8-salon/id1377656087",
  },
  {
    title: "Magicbricks.com",
    desc: "Buy, Rent & Sale Property",
    images: [
      "https://i.ibb.co/RTQjphxt/magicbricks-1.png",
      "https://i.ibb.co/Wp7WDf6F/magicbricks-2.png",
      "https://i.ibb.co/21CVYBvL/magicbricks-3.png",
      "https://i.ibb.co/6Rwm2RwQ/magicbricks-4.png",
      "https://i.ibb.co/hJ2CZ7FJ/magicbricks-5.png",
    ],
    appStore: "https://apps.apple.com/in/app/magicbricks-property-search/id486328406",
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
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}