import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vr09/',  
  plugins: [react()],
  build: {
    minify: false,
  },
})
