/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "/node_modules/react-toastifydistReactToastify.css",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["mde-editor"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    themes: ["light"],
  },
};
