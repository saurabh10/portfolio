// export default function Hero() {
//   return (
//     <section className="text-center py-20">
//       <h1 className="text-4xl font-bold">Hero Section</h1>
//     </section>
//   );
// }


// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     // <section className="text-center py-24 px-4">
//     // <section className="text-center pt-20 pb-16 px-4">
//     <section className="text-center pt-16 pb-10 px-4">

//       {/* Top badge */}
//       <div className="inline-block border border-blue-500 text-blue-400 px-4 py-1 rounded-full text-sm mb-6">
//         AVAILABLE TO BUILD, SHIP, AND COLLABORATE
//       </div>

//       {/* Name */}
//       <h1 className="text-4xl md:text-7xl font-bold tracking-wide">
//         SAURABH
//       </h1>

//       <h2 className="text-4xl md:text-7xl font-bold text-gray-700 mt-2">
//         GUPTA
//       </h2>

//       {/* Description */}
//       <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
//         Senior <span className="font-bold text-white">iOS & Flutter</span> Engineer with deep expertise in mobile architecture, 
//         SDK design, performance optimization, 
//         and fintech security, delivering real-world applications that balance clean UX with robust engineering.
//       </p>

//       {/* Buttons */}
//       <div className="mt-8 flex justify-center gap-4">
//         <a
//           href="#projects"
//           className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700"
//         >
//           Explore Projects →
//         </a>

//         <a
//           href="#contact"
//           className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800"
//         >
//           Contact Me
//         </a>
//       </div>

//      {/* Line */}
//       <div className="mt-10 max-w-4xl mx-auto">
//           {/* <div className="w-full h-[1px] bg-gradient-to-r from-blue-500 to-transparent"></div> */}
//         <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80"></div>
//       </div>

//       {/* <div className="mt-6 w-24 h-[1px] bg-gradient-to-r from-blue-500 to-transparent mx-auto"></div> */}

//       {/* Stats */}
//       <div className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center max-w-4xl mx-auto">
//         <div className="space-y-1">
//           <h3 className="text-2xl font-bold">10+</h3>
//           <p className="text-gray-400 text-sm">Years Experience</p>
//         </div>
//         <div className="space-y-1">
//           <h3 className="text-2xl font-bold">100+</h3>
//           <p className="text-gray-400 text-sm">Apps Delivered</p>
//         </div>
//         <div className="space-y-1">
//           <h3 className="text-2xl font-bold">500K+</h3>
//           <p className="text-gray-400 text-sm">Installs</p>
//         </div>
//         <div className="space-y-1">
//           <h3 className="text-2xl font-bold">100%</h3>
//           <p className="text-gray-400 text-sm">Clean Architecture</p>
//         </div>
//       </div>

//     </section>
//   );
// }






import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center pt-16 pb-10 px-4"
    >

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-block border border-blue-500 text-blue-400 px-4 py-1 rounded-full text-sm mb-6"
      >
        AVAILABLE TO BUILD, SHIP, AND COLLABORATE
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl md:text-7xl font-bold tracking-wide"
      >
        SAURABH
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl md:text-7xl font-bold text-gray-700 mt-2"
      >
        GUPTA
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 max-w-2xl mx-auto"
      >
        Senior <span className="font-bold text-white">iOS & Flutter</span> Engineer with deep expertise in mobile architecture, 
        SDK design, performance optimization, 
        and fintech security, delivering real-world applications that balance clean UX with robust engineering.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 flex justify-center gap-4"
      >
        <a
          href="#projects"
          className="bg-blue-600 px-6 py-3 rounded-lg 
          hover:bg-blue-700 hover:scale-105 active:scale-95 
          transition duration-300"
        >
          Explore Projects →
        </a>

        <a
          href="#contact"
          className="border border-gray-600 px-6 py-3 rounded-lg 
          hover:bg-gray-800 hover:scale-105 active:scale-95 
          transition duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 max-w-4xl mx-auto"
      >
        <section className="pt-5 pb-5 px-4"></section>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-80"></div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-6 md:mt-8 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 text-center max-w-4xl mx-auto"
      >
        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-bold">10+</h3>
          <p className="text-gray-400 text-xs md:text-sm">Years Experience</p>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-bold">50+</h3>
          <p className="text-gray-400 text-xs md:text-sm">Apps Delivered</p>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-bold">100K+</h3>
          <p className="text-gray-400 text-xs md:text-sm">Installs</p>
        </div>

        <div className="space-y-1">
          <h3 className="text-xl md:text-2xl font-bold">100%</h3>
          <p className="text-gray-400 text-xs md:text-sm">Clean Architecture</p>
        </div>
      </motion.div>

    </motion.section>
  );
}