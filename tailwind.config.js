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
        "primary": "#06A580",
        "dark": "#464e4e",
        "grayColor": "#757575CC",
        "btnColor": "#633D3D"
      },
      padding: {
        "pp_80": "80px"
      },
      fontFamily: {
        body: ['Open Sans, sans-serif']
      }
    },
  },
  plugins: [],
  darkMode: "class"
};
