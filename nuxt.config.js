// import colors from 'vuetify/es5/util/colors'
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const webpack = require('webpack')
const env = require('dotenv').config({ path: '.env.' + process.env.BASE })
const base = '/'
export default {
  server: {
    host: '0.0.0.0',

    port: 39312// default: 3000
  },
  target: 'server',
  env: env.parsed,
  head: {
    titleTemplate: '%s',
    title: 'Metis NFT Bridge',
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'user-scalable=yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: base + 'logo.png' }
    ],
    script: [
      // { src: base + 'rem/flexible.js', type: 'text/javascript', charset: 'utf-8' },
    ]
  },
  router: {
    middleware: ['route'],
    base: base
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    './assets/css/fun.less',
    './assets/css/color.less',
    './assets/css/font.less',
    './assets/css/space.less',
    './assets/css/common.less',
    './assets/css/main.less'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/index.js',
    '~/plugins/antd-ui.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  axios: {
    // proxy:true  //  代理
  },
  proxy: {
    // "/api/":"http://localhost:3001/"    //  key(路由前缀)：value(代理地址)
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // analyze: true,
    plugins: [
    ],
    // postcss: [
    //   require('postcss-px2rem')({
    //     remUnit: 75
    //   })
    // ],
    /*
    ** You can extend webpack config here
    */
    // 使用splitChunks将chunks明确切分开来。
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    extend (config, { isDev, isClient }) {
      if (isClient && !isDev) {
        // config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
        config.optimization.minimizer[0].options.terserOptions.compress = {
          warnings: false,
          drop_debugger: true, // debugger
          drop_console: false, // console
          pure_funcs: ['console.log'] // 移除console.log
        }
        config.plugins.unshift(new LodashModuleReplacementPlugin())
        config.module.rules[2].use[0].options.plugins = ['lodash']
      }
    }
  }
}
