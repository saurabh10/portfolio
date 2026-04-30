// export default function Skills() {
//   return (
//     <section className="p-10">
//       <h2 className="text-2xl font-bold">Skills</h2>
//     </section>
//   );
// }


// export default function Skills() {
//   return (
//     <section id="skills" className="max-w-6xl mx-auto px-6 py-16">

//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-center mb-12">
//         Skills & Expertise
//       </h2>

//       {/* Grid */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {/* Card 1 */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
//           <h3 className="text-xl font-bold mb-4">Native iOS</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>• Swift</li>
//             <li>• Objective-C</li>
//             <li>• UIKit</li>
//             <li>• SwiftUI</li>
//             <li>• XIB</li>
//             <li>• Storyboards</li>
//             <li>• CoreData</li>
//             <li>• SQLite</li>
//             <li>• APNS (Push Notifications)</li>
//           </ul>
//         </div>

//         {/* Card 2 */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
//           <h3 className="text-xl font-bold mb-4">Cross-Platform</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>• Flutter</li>
//             <li>• Dart</li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
//           <h3 className="text-xl font-bold mb-4">Architecture & Patterns</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>• MVC</li>
//             <li>• MVVM</li>
//             <li>• BLoC</li>
//           </ul>
//         </div>

//         {/* Card 4 */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
//           <h3 className="text-xl font-bold mb-4">Payments & Integrations</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>• Razorpay</li>
//             <li>• PayPal</li>
//             <li>• Mobikwik</li>
//             <li>• Paytm</li>
//             <li>• Stripe</li>
//             <li>• JusPay</li>
//           </ul>
//         </div>

//         {/* Card 5 */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
//           <h3 className="text-xl font-bold mb-4">Analytics & Engagement</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>• MoEngage SDK</li>
//             <li>• CleverTap</li>
//             <li>• Rich Push Notifications</li>
//           </ul>
//         </div>

//         {/* Card 6 */}
//         <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition">
//           <h3 className="text-xl font-bold mb-4">Tools & Platforms</h3>
//           <ul className="space-y-2 text-gray-400">
//             <li>• Xcode</li>
//             <li>• Android Studio</li>
//             <li>• VS Code</li>
//             <li>• GitHub</li>
//             <li>• GitLab</li>
//             <li>• Jira</li>
//             <li>• Zoho</li>
//           </ul>
//         </div>

//       </div>

//     </section>
//   );
// }




export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-16">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Skills & Expertise
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Native iOS */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-gray-800 text-blue-400 
          group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            📱
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Native iOS</h3>

          <ul className="space-y-2 text-gray-400">
            <li>• Swift</li>
            <li>• Objective-C</li>
            <li>• UIKit</li>
            <li>• SwiftUI</li>
            <li>• XIB</li>
            <li>• Storyboards</li>
            <li>• CoreData</li>
            <li>• SQLite</li>
            <li>• APNS (Push Notifications)</li>
          </ul>
        </div>

        {/* Cross Platform */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-gray-800 text-blue-400 
          group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            🧱
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Cross-Platform</h3>

          <ul className="space-y-2 text-gray-400">
            <li>• Flutter</li>
            <li>• Dart</li>
          </ul>
        </div>

        {/* Architecture */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-gray-800 text-blue-400 
          group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            🧠
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Architecture & Design Patterns</h3>

          <ul className="space-y-2 text-gray-400">
            <li>• MVC</li>
            <li>• MVVM</li>
            <li>• BLoC</li>
          </ul>
        </div>

        {/* Payments */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-gray-800 text-blue-400 
          group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            💳
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Payments & Integrations</h3>

          <ul className="space-y-2 text-gray-400">
            <li>• Razorpay</li>
            <li>• PayPal</li>
            <li>• Mobikwik</li>
            <li>• Paytm</li>
            <li>• Stripe</li>
            <li>• JusPay</li>
          </ul>
        </div>

        {/* Analytics */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-gray-800 text-blue-400 
          group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            📊
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Analytics & Engagement</h3>

          <ul className="space-y-2 text-gray-400">
            <li>• MoEngage SDK</li>
            <li>• CleverTap</li>
            <li>• Rich Push Notifications</li>
          </ul>
        </div>

        {/* Tools */}
        <div className="group bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-blue-500 transition duration-300">
          <div className="w-14 h-14 flex items-center justify-center rounded-xl 
          bg-gray-800 text-blue-400 
          group-hover:bg-blue-600 group-hover:text-white transition duration-300">
            💻
          </div>

          <h3 className="text-xl font-bold mt-6 mb-4">Tools & Platforms</h3>

          <ul className="space-y-2 text-gray-400">
            <li>• Xcode</li>
            <li>• Android Studio</li>
            <li>• VS Code</li>
            <li>• GitHub</li>
            <li>• GitLab</li>
            <li>• Jira</li>
            <li>• Zoho</li>
          </ul>
        </div>

      </div>

    </section>
  );
}