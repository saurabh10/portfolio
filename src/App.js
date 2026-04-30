// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
      
//       <h1 className="text-red-500 text-5xl font-bold">
//         TEST SAURABH
//       </h1>

//       <p className="mt-4 text-gray-400">
//         Tailwind working test
//       </p>

//     </div>
//   );
// }

// export default App;




// function App() {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">

//       {/* Navbar */}
//       <nav className="flex justify-between items-center p-5 bg-gray-800">
//         <h1 className="text-xl font-bold">Saurabh Dev</h1>
//         <div className="hidden md:flex gap-6">
//           <a href="#about" className="hover:text-blue-400">About</a>
//           <a href="#projects" className="hover:text-blue-400">Projects</a>
//           <a href="#contact" className="hover:text-blue-400">Contact</a>
//         </div>
//       </nav>

//       {/* Hero */}
//       <section className="text-center py-20 px-4">
//         <h2 className="text-3xl md:text-6xl font-bold">
//           Mobile App Developer 🚀
//         </h2>
//         <p className="mt-4 text-gray-400 text-lg">
//           iOS (Swift / SwiftUI) & Flutter Developer
//         </p>

//         <button className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
//           View My Work
//         </button>
//       </section>

//       {/* About */}
//       <section id="about" className="p-6 md:p-12">
//         <h2 className="text-2xl font-bold mb-4">About Me</h2>
//         <p className="text-gray-300">
//           I build scalable mobile apps with clean architecture and modern UI.
//         </p>
//       </section>

//       {/* Projects */}
//       <section id="projects" className="p-6 md:p-12 bg-gray-800">
//         <h2 className="text-2xl font-bold mb-6">Projects</h2>

//         <div className="grid gap-6 md:grid-cols-2">

//           <div className="bg-gray-700 p-5 rounded-xl hover:scale-105 transition">
//             <h3 className="text-xl font-bold">Video to Audio App</h3>
//             <p className="text-gray-300 mt-2">
//               Convert videos into audio with smooth UI.
//             </p>
//           </div>

//           <div className="bg-gray-700 p-5 rounded-xl hover:scale-105 transition">
//             <h3 className="text-xl font-bold">Meditation App</h3>
//             <p className="text-gray-300 mt-2">
//               Audio streaming + subscription system.
//             </p>
//           </div>

//         </div>
//       </section>

//       {/* Contact */}
//       <section id="contact" className="p-6 md:p-12 text-center">
//         <h2 className="text-2xl font-bold mb-4">Contact</h2>
//         <p>Email: your@email.com</p>
//       </section>

//     </div>
//   );
// }

// export default App;








import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;