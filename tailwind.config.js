/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['Hanken Grotesk', 'sans-serif'],
      },
      colors: {
        red: 'hsl(0, 100%, 67%)',
        yellow: 'hsl(39, 100%, 56%)',
        teal: 'hsl(166, 100%, 37%)',
        cobalt: 'hsl(234, 85%, 45%)',
        pale: 'hsl(221, 100%, 96',
        lavender: 'hsl(241, 100%, 89%)',
        gray: 'hsl(224, 30%, 27%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'hsla-violet-blue': 'hsla(256, 72%, 46%, 1)',
        'hsla-persian-blue': 'hsla(241, 72%, 46%, 0)', 
      },
      backgroundImage: theme => ({
        'gradient-light-slate-blue-to-light-royal-blue': 'linear-gradient(to bottom, ' + theme('colors.light-slate-blue') + ', ' + theme('colors.light-royal-blue') + ')',
      }),
    },
  },
  plugins: [],
}