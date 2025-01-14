/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#684c99",
     
        "grayColor": "#757575CC",
        "btnColor": "#633D3D",
        "withe_bg": "#D7D4D4"
      },
      padding: {
        "pp_80": "80px"
      },
      fontFamily: {
        body: ['Open Sans, sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
