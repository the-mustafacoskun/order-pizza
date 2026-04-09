/** @type {import('tailwindcss').Config} */
export default {
  important:true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "font-roboto" yazdığında Roboto Condensed çalışacak
        roboto: ['"Roboto Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}