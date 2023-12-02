/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'dkMode': [
          '3px 1px 3px rgba(125,18,255,0.5)',
          '-1px -2px 3px rgba(125,18,255,0.8)',
        ]
      }
    },
  },
  plugins: [require("daisyui")],
}