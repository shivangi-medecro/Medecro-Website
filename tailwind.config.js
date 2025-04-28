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
    // Move `screens` out of `extend` to override Tailwind defaults
    screens: { 
      'sm': '430px',     // Changed from 640px to 430px
      'md': '834px',        
      'lg': '1024px', 
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',       
      '4xl': '2560px',        
      // 'mobile': '430px',      
      // 'tablet': '834px',      
    },
  },
  plugins: [],
};
