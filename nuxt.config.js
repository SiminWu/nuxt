module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ds',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '电商前台项目' }
    ],
  
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    { src: 'iview/dist/styles/iview.css'},
    { src: '~assets/common.scss', lang: 'scss' },

  ],
  plugins: [
    { src: '@/plugins/iview.js'},
    { src: '@/plugins/axios.js'},
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
    extend(config,ctx){ 
      const sassResourcesLoader = { 
      loader: 'sass-resources-loader', 
      options: { 
       resources: [ 
        'assets/common.scss'
       ] 
      } 
      } 
      // 遍历nuxt定义的loader配置，向里面添加新的配置。 
      config.module.rules.forEach((rule) => { 
      if (rule.test.toString() === '/\\.vue$/') { 
       rule.options.loaders.sass.push(sassResourcesLoader) 
       rule.options.loaders.scss.push(sassResourcesLoader) 
      } 
      if (['/\\.sass$/', '/\\.scss$/'].indexOf(rule.test.toString()) !== -1) { 
       rule.use.push(sassResourcesLoader) 
      } 
      }) 
    }, 
  },

}

