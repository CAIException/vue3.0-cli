const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'production' ? '/' : '/'

module.exports = {
  baseUrl: BASE_URL,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))// 组件目录
  },

  // 打包时不生成.map文件
  productionSourceMap: false,

  devServer: {
    // proxy: 'http://localhost:3000'
  }
}
