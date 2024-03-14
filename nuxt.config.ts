export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    ['@nuxtjs/google-fonts',
      {
        families: {
          Lato: [100, 400],
        }
      }
    ],
    'nuxt-icon',
  ],
  'shadcn': {
    prefix: 'Ui',
    componentDir: './components/ui'
  }
})
