export default defineNuxtConfig({
  devtools: { enabled: true }, // Desativar em produção
  // css: ['~/assets/css/base.css'],
  modules: ['@nuxt/ui', "@nuxtjs/i18n", // 'nuxt-stripe-module',
  "@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    // ... options
  },
  colorMode: {
    preference: 'light'
  },
  // stripe: {
  //   publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
  // },
  app: {
    head: {
      title: 'iPets - Filhotes disponíveis',
      charset: 'utf-8',
      meta: [
        { name: 'description', content: 'Compre seu filhote de forma segura.' }
      ],
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          type: 'image/x-icon'
        },
      ],
    }
  },
  i18n: {
    locales: [
      { code: 'pt_BR', file: 'pt-BR.json' },
    ],
    langDir: 'locales',
    defaultLocale: 'pt_BR',
    strategy: 'no_prefix'
  },
})