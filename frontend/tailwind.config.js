// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#0f2027",
//         secondary: "#5F9EA0 ",
//         background: "#F5FFFF",
//         white: "#FBFBFB",
//       },
//       backgroundImage: {
//         'gradient-primary': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#0f2027",
//         secondary: "#5F9EA0",
//         accent: "#2C5364",
//         background: "#F5FFFF",
//         white: "#FBFBFB",
//         lightblue: "#88C0D0", // New accent color
//         darkblue: "#1A2A3A", // New dark contrast color
//       },
//       backgroundImage: {
//         'gradient-primary': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f2027",
        secondary: "#2C5364",
        accent: "#4CAF50", // Vibrant green
        lightgreen: "#A5D6A7", // Soft green
        background: "#F5FFFF",
        white: "#FBFBFB",
        darkblue: "#1A2A3A", // Dark contrast
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      },
    },
  },
  plugins: [],
};