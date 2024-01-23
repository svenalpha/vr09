import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  server:{proxy:{"/api":"http://localhost:5173"
                }
         },
  base: '/',
  plugins: [react()],
  build: {
    outDir: "/dist/",
    emptyOutDir: true,
    minify: false,
         },
})



















