// export default function About() {
//   return (
//     <section id="about" className="p-10">
//       <h2 className="text-2xl font-bold">About</h2>
//     </section>
//   );
// }


// export default function About() {
//   return (
//     <section id="about" className="max-w-6xl mx-auto px-6 py-16">
//       <h2 className="text-3xl font-bold mb-4 text-center">About</h2>
//       <p className="text-gray-400 text-center">
//         I’m a Mobile App Developer with <span className="font-bold text-white">10+ years</span> of experience building high-performance, 
//         scalable mobile applications using Flutter and native iOS technologies (Swift & Objective-C). 
//         Over the years, I’ve delivered <span className="font-bold text-white">50+ applications</span> across different domains, 
//         several of which have crossed <span className="font-bold text-white">100K+ downloads</span> 
//         with consistent <span className="font-bold text-white">4.5+ user ratings</span>.

//         I specialize in crafting intuitive user experiences and robust mobile architectures <span className="font-bold text-white">(MVC, MVVM, BLoC)</span>, 
//         ensuring apps are not only visually appealing but also maintainable and scalable. 
//         From integrating third-party SDKs to optimizing performance, 
//         I focus on delivering reliable, user-centric solutions.

//         Beyond coding, I enjoy collaborating with teams, 
//         solving real-world problems, and continuously exploring new technologies to build better digital products.
//       </p>
//     </section>
//   );
// }

// export default function About() {
//   return (
//     <section id="about" className="max-w-6xl mx-auto px-6 py-16">

//       <h2 className="text-3xl font-bold mb-6 text-center">About</h2>

//       <div className="space-y-4 text-gray-400 text-center max-w-3xl mx-auto">

//         <p>
//           I’m a Mobile App Developer with <span className="font-bold text-white">10+ years</span> of experience building high-performance, 
//           scalable mobile applications using Flutter and native iOS technologies (Swift & Objective-C). 
//           Over the years, I’ve delivered <span className="font-bold text-white">50+ applications</span> across different domains, 
//           several of which have crossed <span className="font-bold text-white">100K+ downloads</span> 
//           with consistent <span className="font-bold text-white">4.5+ user ratings</span>.
//         </p>

//         <p>
//           I specialize in crafting intuitive user experiences and robust mobile architectures 
//           <span className="font-bold text-white">(MVC, MVVM, BLoC)</span>, 
//           ensuring apps are not only visually appealing but also maintainable and scalable. 
//           From integrating third-party SDKs to optimizing performance, 
//           I focus on delivering reliable, user-centric solutions.
//         </p>

//         <p>
//           Beyond coding, I enjoy collaborating with teams, 
//           solving real-world problems, and continuously exploring new technologies to build better digital products.
//         </p>

//       </div>


//             Achievements
//       <div className="mt-16 max-w-4xl mx-auto">

//         <h2 className="text-2xl font-bold border-b border-gray-700 pb-2 mb-6">
//           KEY ACHIEVEMENTS
//         </h2>

//         <div className="space-y-6">

//           {/* Item */}
//           <div className="flex gap-4 items-start border-b border-dashed border-gray-700 pb-4">
//             <div className="text-blue-400 text-2xl">💎</div>
//             <div>
//               <h3 className="font-bold text-lg">App Development Success</h3>
//               <p className="text-gray-400">
//                 Developed <span className="font-bold text-white">50+ apps</span> with over 
//                 <span className="font-bold text-white"> 100K+ downloads</span>.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 items-start border-b border-dashed border-gray-700 pb-4">
//             <div className="text-blue-400 text-2xl">💎</div>
//             <div>
//               <h3 className="font-bold text-lg">Performance Enhancement</h3>
//               <p className="text-gray-400">
//                 Improved app performance and reduced load time by 
//                 <span className="font-bold text-white"> 30%</span>.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 items-start border-b border-dashed border-gray-700 pb-4">
//             <div className="text-blue-400 text-2xl">💎</div>
//             <div>
//               <h3 className="font-bold text-lg">Payment Integration</h3>
//               <p className="text-gray-400">
//                 Integrated multiple secure payment gateways.
//               </p>
//             </div>
//           </div>

//           <div className="flex gap-4 items-start">
//             <div className="text-blue-400 text-2xl">💎</div>
//             <div>
//               <h3 className="font-bold text-lg">User Satisfaction</h3>
//               <p className="text-gray-400">
//                 Achieved <span className="font-bold text-white">4.5+ ratings</span> across apps.
//               </p>
//             </div>
//           </div>

//         </div>
        
//       </div>

//       </section>
//   );
// }




export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-6 text-center">About</h2>

      {/* Paragraphs */}
      <div className="space-y-4 text-gray-400 text-center max-w-3xl mx-auto">

        <p>
          I’m a Mobile App Developer with <span className="font-bold text-white">10+ years</span> of experience building high-performance, 
          scalable mobile applications using Flutter and native iOS technologies (Swift & Objective-C). 
          Over the years, I’ve delivered <span className="font-bold text-white">50+ applications</span> across different domains, 
          several of which have crossed <span className="font-bold text-white">100K+ downloads</span> 
          with consistent <span className="font-bold text-white">4.5+ user ratings</span>.
        </p>

        <p>
          I specialize in crafting intuitive user experiences and robust mobile architectures 
          <span className="font-bold text-white">(MVC, MVVM, BLoC)</span>, 
          ensuring apps are not only visually appealing but also maintainable and scalable. 
          From integrating third-party SDKs to optimizing performance, 
          I focus on delivering reliable, user-centric solutions.
        </p>

        <p>
          Beyond coding, I enjoy collaborating with teams, 
          solving real-world problems, and continuously exploring new technologies to build better digital products.
        </p>

      </div>

      {/* KEY ACHIEVEMENTS */}
      <div className="mt-16 max-w-6xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          Key Achievements
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Item 1 */}
          <div className="flex gap-4 items-start border-b border-dashed border-gray-700 pb-6 hover:bg-gray-800 p-4 rounded-lg transition">
            <div className="text-blue-400 text-2xl">💎</div>
            <div>
              <h3 className="font-bold text-lg">App Development Success</h3>
              <p className="text-gray-400">
                Developed <span className="font-bold text-white">10+ apps</span> with over 
                <span className="font-bold text-white"> 100K+ downloads</span>.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-4 items-start border-b border-dashed border-gray-700 pb-6 hover:bg-gray-800 p-4 rounded-lg transition">
            <div className="text-blue-400 text-2xl">💎</div>
            <div>
              <h3 className="font-bold text-lg">Performance Enhancement</h3>
              <p className="text-gray-400">
                Boosted app <span className="font-bold text-white">performance</span>, reducing load time by 
                <span className="font-bold text-white"> 30%</span>.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-4 items-start border-b border-dashed border-gray-700 pb-6 md:border-b-0 hover:bg-gray-800 p-4 rounded-lg transition">
            <div className="text-blue-400 text-2xl">💎</div>
            <div>
              <h3 className="font-bold text-lg">Payment Integration</h3>
              <p className="text-gray-400">
                Integrated payment gateways, handling secure transactions efficiently.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="flex gap-4 items-start md:border-b-0 hover:bg-gray-800 p-4 rounded-lg transition">
            <div className="text-blue-400 text-2xl">💎</div>
            <div>
              <h3 className="font-bold text-lg">User Satisfaction Excellence</h3>
              <p className="text-gray-400">
                Achieved <span className="font-bold text-white">4.5+ app ratings</span> on App & Play Store consistently.
              </p>
            </div>
          </div>

        </div>

        {/* Download Section */}
<div className="mt-12 text-center">

  {/* Heading Text */}
  <p className="text-gray-400 mb-6 text-lg">
    Please download my <span className="text-white font-semibold">Resume</span> and <span className="text-white font-semibold">Portfolio</span>
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row justify-center gap-4">

    {/* Resume Button */}
    <a
      href="/Saurabh Gupta Resume.pdf"
      download
      className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition shadow-md hover:scale-105"
    >
      Download Resume
    </a>

    {/* Portfolio Button */}
    <a
      href="/Portfolio.pdf"
      download
      className="border border-primary text-primary px-6 py-3 rounded-lg transition hover:bg-primary hover:text-white hover:scale-105"
    >
      Download Portfolio
    </a>

  </div>

</div>

      </div>

    </section>
  );
}