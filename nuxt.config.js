import colors from 'vuetify/es5/util/colors'
import en from './locale/en'

export default {
  env: {
    baseUrl: 'https://sharefinder.sane.cloud'
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - sharefinder-pwa',
    title: 'sharefinder-pwa',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: ''
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  pwa: {
    icons: [{
      src: '/static/icon.png',
      type: 'image/png',
      sizes: '512x512'
    }],
    manifest: {
      lang: 'en',
      name: 'ShareFinder',
      background_color: '#1364a1',
      short_name: 'ShareFinder Mobile',
      description: 'ShareFinder Mobile Application',
      theme_color: '#1364a1',
      scope: '/',
      display: 'standalone',
      shortcuts: [{
        name: 'Find Shares',
        short_name: 'Find',
        description: 'Find Shares on ShareFinder',
        url: 'https://sharefinder.sane.cloud/shares?source=pwa',
        icons: [{
          src: '/icons/magnify.png',
          sizes: '192x192'
        }]
      },
      {
        name: 'View Share Prices',
        short_name: 'Share Prices',
        description: 'View Share Prices on ShareFinder',
        url: 'https://sharefinder.sane.cloud/prices?source=pwa',
        icons: [{
          src: '/chart.png',
          sizes: '192x192'
        }]
      }
      ]
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    lang: {
      locales: {
        en
      },
      current: 'en'
    },
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#1a73e8' // #E53935
        }
      }
    }
  }, // Build Configuration: https: //go.nuxtjs.dev/config-build
  build: {
    // extractCSS: true, //
    vendor: ['vuetify'],
    transpile: ['vuetify']
  },
  cache: true
}
