/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jolly: ["Jolly Lodger", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "main-brown": "#884A39",
        "light-brown": "#F9E0BB",
        "medium-brown": "#FFC26F",
        "dark-red": "#CB0000",
        "light-red": "#FF0000",
        "dark-brown": "#381E16",
      },
    },
  },
  plugins: [],
}
