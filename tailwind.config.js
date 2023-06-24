/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        poppins_regular: ["poppins_regular"]
      }
    },
  },

  plugins: [require('daisyui'), require("@tailwindcss/line-clamp"), require("@tailwindcss/forms")({
    strategy: "class"
  })],
}