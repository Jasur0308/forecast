/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner" : "url('/src/images/banner.jpg')",
        "linear-color" : "linear-gradient(180deg, rgba(4, 249, 59, 0) 0%, rgba(159, 24, 227, 0.564) 100%",
        "pressure" : "url('/src/images/air-pressure.png')",
        "compass" : "url('/src/images/compass.svg')"
      },
      boxShadow: {
        '3xl': '0 0px 30px -15px rgb(0, 0, 0, 0.3)',
        '4xl': '0 0px 30px -15px rgb(0, 0, 0)',
      },
      backgroundSize: {
        "90" : "90%",
      }
    },
  },
  plugins: [],
}