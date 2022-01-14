const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const WebpackPluginBanner = require('webpack-plugin-banner')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const resolve = dir => path.resolve(__dirname, dir)
const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isProd ? './' : '/',
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
      ignored: [/node_modules/],
    },
  },
  chainWebpack: config => {
    config.resolve.extensions.add('scss')
    config.resolve.alias.set('@', resolve('src'))
    // 配置主题
    const scss = config.module.rule('scss').oneOfs.store
    scss.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: './src/styles/global.scss',
        })
        .end()
    })
  },
  configureWebpack: config => {
    config.performance = {
      hints: 'warning',
      maxEntrypointSize: 50000000,
      maxAssetSize: 30000000,
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js')
      },
    }
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      })
    )
    if (isProd) {
      const productionGzipExtensions = [
        'html',
        'js',
        'css',
        'ico',
        'svg',
        'json',
      ]
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.6,
          deleteOriginalAssets: false,
        }),
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
          analyzerMode: 'static',
        }),
        new WebpackPluginBanner()
      )
    }
  },
  parallel: require('os').cpus().length > 1,
}
