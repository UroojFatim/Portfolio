/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightTheme: {
          bg: '#ffffff',
          text: '#000000',
          accent: '#0ea5e9', // sky blue
        },
        darkTheme: {
          bg: '#000000',
          text: '#ffffff',
          accent: '#f97316', // orange
        },
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.8s ease-out forwards',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
