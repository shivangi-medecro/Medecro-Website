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
        outfit: ['var(--font-outfit)'],
      },
    },
    screens: { 
      'sm': '430px',     
      'md': '835px',        
      'lg': '1025px', 

      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',       
      // '4xl': '2560px',
    },
  },
  plugins: [],
};
