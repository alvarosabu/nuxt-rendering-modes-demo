import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@unocss/nuxt'],
  css: ['@alvarosabu/ui/dist/style.css'],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    shortcuts: [],
    rules: [],
  },
  vite: {
    logLevel: 'info',
    optimizeDeps: {
      include: ['@alvarosabu/ui/', 'vue', 'ufo', '@vueuse/core'],
    },
  },
})
