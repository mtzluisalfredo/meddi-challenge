// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  srcDir: 'src/',
  typescript: {
    strict: true,
    typeCheck: true
  },
  app: {},
  modules: [
    '@tailvue/nuxt',
    ['@nuxtjs/tailwindcss', {}],
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }],
  ],
  runtimeConfig: {
    baseURL: 'https://meddi-training.vercel.app/api/v1',
    public: {
      baseURL: 'https://meddi-training.vercel.app/api/v1',
      // baseURL: process.env.BASE_URL || 'https://meddi-training.vercel.app/api/v1',
    },
  },
})
