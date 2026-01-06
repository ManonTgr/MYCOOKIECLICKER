import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: './MonCookieClicker.html',
      },
    },
  },
  server: {
    open: '/MonCookieClicker.html', // Ouvre automatiquement le bon fichier au lancement
  },
})