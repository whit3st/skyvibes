/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'cust': '-4.51px 2.26px 0.75px rgba(0, 0, 0, 0.15)',
        
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      background: {
        root: 'linear-gradient(243.18deg, #A07FFB 0%, #FF82CD 85.24%)',
      }
    },
  },
  plugins: [],
}