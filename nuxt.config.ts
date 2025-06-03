export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss', // Pro integraci Tailwind CSS
    '@nuxt/content'        // Pro správu obsahu pomocí Markdownu
  ],
  tailwindcss: {
    // Zde můžete přidat vlastní konfiguraci Tailwindu, pokud je potřeba
    // cssPath: '~/assets/css/tailwind.css', // Pokud máte vlastní hlavní CSS soubor
    // configPath: 'tailwind.config.js', // Výchozí cesta
  },
  content: {
    // Konfigurace pro Nuxt/Content
    highlight: {
      theme: 'github-light' // Téma pro zvýrazňování kódu
    },

    preview: {
      api: 'https://api.nuxt.studio'
    }
    // Nastavení pro generování obsahu pro blog
    // Můžete definovat výchozí řazení, atd.
    // documentDriven: true // Pokud chcete plně document-driven přístup
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Agdata - Moderní řízení farmy',
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }
      ],
    }
  },
  css: ['~/assets/css/main.css'], // Globální CSS soubor
  // Konfigurace pro generování statických stránek (pokud je potřeba pro blog)
  // routeRules: {
  //   '/blog/**': { isr: true } // Nebo ssr: true, podle vaší strategie
  // }
})