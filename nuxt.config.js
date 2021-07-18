export default {
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt in VueJs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap'
      }
    ]
  },

  // Customize the progres-bar color
  loading: { color: 'red', height: '5px' },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/rhpteam.min.css',
    '~/assets/css/external.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/modals/v-modal.js',
    '@/plugins/core-component.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'https://nuxt-vue-e5fd6-default-rtdb.firebaseio.com',
    fbApiKey: process.env.FIREBASE_API_KEY || 'AIzaSyAKNtzgTZgB0Cnfu8Qsit1uqUHPQShkQYM',
  }
}
