/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}','./src/components/**/*.{js,ts,jsx,tsx,mdx}','./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: { extend: {
    colors: {
      navy:{DEFAULT:'#102A43',dark:'#0B1F33',light:'#24425E'},
      teal:{DEFAULT:'#159A9C',dark:'#0F7C7E',light:'#E9F5F4'},
      ink:'#263746', muted:'#687786', mist:'#F5F7FA',
      emerald:{50:'#ecfdf5',100:'#d1fae5',200:'#a7f3d0',300:'#6ee7b7',400:'#34d399',500:'#159A9C',600:'#0F7C7E',700:'#047857',800:'#065f46',900:'#064e3b'},
      ice:{light:'#E9F5F4'}
    },
    fontFamily:{ sans:['Inter','system-ui','sans-serif'], serif:['Fraunces','Georgia','serif'] },
    boxShadow:{ soft:'0 8px 30px rgba(16,42,67,0.08)', lift:'0 16px 40px rgba(16,42,67,0.12)' }
  }},
  plugins: [],
}
