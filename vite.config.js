import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // ✅ Render expects "dist" as the default build folder
  },
  server: {
    port: 5173,
    open: true, // Automatically open in browser
  },
})
