/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}", "./src/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        '1000': '0 0 0 1000px rgba(0, 0, 0, 0.5)',
        '100': '0 0 0 10px rgb(30 64 175 / var(--tw-bg-opacity))',
      
      },
    },
  },  
  plugins: [],
}

