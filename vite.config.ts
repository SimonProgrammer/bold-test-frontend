import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vueI18n } from '@intlify/vite-plugin-vue-i18n'

export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      include: path.resolve(__dirname, './src/locales/**'),
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/variables.scss";
          @import "@/assets/scss/media-queries.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
