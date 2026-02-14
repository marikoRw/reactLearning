import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/reactLearning/",
  build: {
    chunkSizeWarningLimit: 1000, // Raises limit to 1MB
  },
})
