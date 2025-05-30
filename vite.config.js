import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths"
import webfontDownload from 'vite-plugin-webfont-dl';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    webfontDownload(["https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"]),
    react(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, 'src') // Asegura que apunta a 'src'
    },

  }
})
