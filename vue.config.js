module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vuejs-AddRemoveTask/'
    : '/',
    devServer: {
      compress: true,
      disableHostCheck: true,
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }