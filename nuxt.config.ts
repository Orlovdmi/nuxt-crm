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
    '@pinia/nuxt',
    [
      '@vee-validate/nuxt',
      {
        autoImports: true,
      }
    ]
  ],
  'shadcn': {
    prefix: 'Ui',
    componentDir: './components/ui',
  },
  'pinia': {
    storesDirs: ['./store/**'],
  }
})
