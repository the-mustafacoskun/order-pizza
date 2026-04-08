/** @type {import('tailwindcss').Config} */
export default {
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