export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Build a Career in Tech | Chuuse',
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk &&
        titleChunk !== 'Chuuse - Build a Career in Tech'
        ? `${titleChunk}`
        : 'Chuuse - Build a Career in Tech';
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Join a well curated network of top-notch experts, by getting trained and recruited for remote and freelance projects from various high-paying businesses, top cutting-edge startups, and global corporations.',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://unicons.iconscout.com/release/v4.0.0/css/solid.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unicons.iconscout.com/release/v2.0.1/css/unicons.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://unicons.iconscout.com/release/v4.0.0/css/line.css',
      },
    ]
  },

  server: {
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/main.scss',
    '~assets/scss/mixin.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel', mode: 'client' },
    { src: './plugins/vue-verification-code-input', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~assets/scss/main.scss',
      './assets/scss/mixin.scss'
    ]
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static'
}
