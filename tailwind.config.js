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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease-in-out',
        slideInUp: 'slideInUp 1s ease-out',
        slideInRight: 'slideInRight 1s ease-out',
        slideIn: 'slideIn 0.8s ease-out forwards',
      },
    },
  },
  darkMode: 'class', // Enable dark mode based on a class
  plugins: [],
};
