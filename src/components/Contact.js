// export default function Contact() {
//   return (
//     <section id="contact" className="p-10">
//       <h2 className="text-2xl font-bold">Contact</h2>
//     </section>
//   );
// }


export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6 text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl md:text-7xl font-bold leading-tight">
        Let’s build <br />
        something next-gen.
      </h2>

      {/* Subtitle */}
      <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
        Currently accepting new projects and consulting opportunities
        in the mobile space.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

        {/* Email */}
        <a
          href="mailto:a.gupta.saurabh@email.com"
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
          bg-blue-900/20 border border-blue-500 text-blue-400 
          hover:bg-blue-600 hover:text-white transition duration-300"
        >
          📧 Email Me
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917017295981"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
          bg-green-900/20 border border-green-500 text-green-400 
          hover:bg-green-600 hover:text-white transition duration-300"
        >
          💬 WhatsApp
        </a>

        {/* Call */}
        <a
          href="tel:+917017295981"
          className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl 
          bg-gray-800 border border-gray-700 text-gray-300 
          hover:bg-gray-700 hover:text-white transition duration-300"
        >
          📞 Call Me
        </a>

      </div>
    </section>
  );
}