import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], // Add other formats as needed
  server: {
    hmr: {
      overlay: false, // Optional: Disable the overlay if you don't want to see the error overlay in development
    }
  }
})
