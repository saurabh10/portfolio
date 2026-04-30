// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }


// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",        // main blue
        "primary-dark": "#1e40af",
        "primary-light": "#3b82f6",
        background: "#0B1120",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};