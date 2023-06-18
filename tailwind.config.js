/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "email-bg":"var(--email-sign)",
        "main-bg": "var(--main-bg)",
        "footer-bg":"var(--footer-bg)",
        "testimonials-bg": "var(--testimonials-bg)",
        "cyan-color": "var(--color-cyan)",
        "blue-color":"var(--color-blue)",
        "error-color":"var(--color-light-red)",
        "white-color": "var(--color-white)"
      },
      backgroundImage:{
        "action-bg": "url('../assets/bg-curvy-desktop.svg')" ,
        "action-bg-mob": "url(../assets/bg-curvy-mobile.svg)",
        "testimonial": "url(../assets/bg-quotes.png)"
      }
    },
  },
  plugins: [],
}
