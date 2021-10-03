export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  mode: 'spa',
  // Target: https://go.nuxtjs.dev/config-target
  target: 'spa',
  loading: {
    color: 'white',
    height: '5px'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Mohammad Sulthan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/tailwind.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-typed.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-analytics',
    '@nuxtjs/svg',
    // '@nuxtjs/imagemin', {
    //   enableInDev: true
    // }
  ],
  // colorMode: {
  //   preference: 'system', // default value of $colorMode.preference
  //   fallback: 'light', // fallback value if not system preference found
  //   hid: 'nuxt-color-mode-script',
  //   globalName: '__NUXT_COLOR_MODE__',
  //   componentName: 'ColorScheme',
  //   classPrefix: '',
  //   classSuffix: '-mode',
  //   storageKey: 'nuxt-color-mode'
  // },
  // serverMiddleware: [
  //   '~/middleware/redirects.js'
  // ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-purgecss',
    'nuxt-webfontloader',
    '@nuxtjs/pwa',
  ],
  webfontloader: {
    google: {
      families: ['Lato:400,700'] //Loads Lato font with weights 400 and 700
    }
  },
  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': { target: 'https://medium.com/feed/', pathRewrite: {'^/api/': ''}, changeOrigin: true }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  googleAnalytics: {
    id: 'UA-47260856-1',
    pageTrackings: true,
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
