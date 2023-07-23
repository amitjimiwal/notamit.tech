/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#808080",
        secondary:"#171923",
        bordercolor:"#E2E8F0",
        button:"#319795"
      },
      fontSize:{
        heading:"2rem",
        subheading:"1.5rem"
      }
    },
  },
  plugins: [],
}