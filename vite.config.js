import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/raihanhilmyt.github.io/', // <-- GANZ WICHTIG!! Beispiel: '/raihanhilmyt.github.io/' oder '/portfolio/'
})