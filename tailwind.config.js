/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  
  theme: {
    extend: {
      fontFamily:{
        rlight:["Roboto-Light", "sans serif"],
        rblack:["Roboto-Black", "san serif"],
        ritalic:["Roboto-italic", "sans serif"],
        rregular:["Roboto-Regular", "sans serif"],
      }
    },
  },
  plugins: [],
}

