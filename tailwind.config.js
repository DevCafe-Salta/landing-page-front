/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": "#DB4A2B",
        "softGray": "#E3E2DD",
        "softBlack": "#131414",
        "graySlate": "#282928",
        "turquoise": "#00BCD4", // Si quieren le cambio el nombre a brightCyan
        "Gray": "#747575",
        "lightGray": "#BABABA",
        "smokeGray": "#F1F1F1"
      },
      fontFamily: {
        "body": ['Montserrat', 'sans-serif']
      },
      screens: {
        "phone": {'min':'280px', 'max': '768px'},
        "tablet":  {'min':'768px', 'max': '1024px'},
        "desktop":  {'min':'1024px'},
      },
      borderRadius: {
        sm: "8px",
        md: "16px",
        lg: "24px"
      },
      fontSize: {
        "base": "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "5xl": "48px",
        "6xl": "60px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar') // para modificar la scrollbar
  ],
}