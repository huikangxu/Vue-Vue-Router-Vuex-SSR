const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const {VueLoaderPlugin} = require('vue-loader')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env.': {
      NODE_ENV: '"development"'
    }
  }),
  new VueLoaderPlugin(),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

//将devServer单独const，方便使用
const devServer = {
  port: 8080,
  host: '0.0.0.0', //设置为0.0，可以通过localhost访问，也可以通过内网ip访问
  overlay: {
    errors: true, // 将错误显示在页面上
  },
  hot: true //单页面应用：只渲染修改的某组件，不会让整个页面都重新加载
}

let config

config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  // import Vue form 'vue'
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})

module.exports = config
