import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/carlymariec-proportfolio.github.io/', // <-- Add this line so assets look in the right folder
})
