const path = require('path')
const resolve = (dir) => path.resolve(__dirname, dir)
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: false,
  runtimeCompiler: false,
  transpileDependencies: [],
  productionSourceMap: !isProd,
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    https: false,
    hotOnly: false,
    watchOptions: {
      // 监听中添加忽略目录
      ignored: [/node_modules/],
    },
  },
  chainWebpack: (config) => {
    config.resolve.extensions.add('scss')
    config.resolve.alias.set('@', resolve('src'))
    // 配置主题
    const scss = config.module.rule('scss').toConfig()
    const useable = { ...scss.oneOf[3], test: /\.useable.scss$/ }
    useable.use = [...useable.use]
    useable.use[0] = {
      loader: 'style-loader',
      options: {
        injectType: 'lazyStyleTag',
      },
    }
    config.module.rule('scss').merge({ oneOf: [useable] })
  },
  configureWebpack: (config) => {
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      },
    }
  },
}
