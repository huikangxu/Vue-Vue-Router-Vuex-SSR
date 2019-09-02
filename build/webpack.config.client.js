// webpack.config.base.js：全局配置
// webpack.config.client.js： 在base基础上拓展的配置
const path = require('path') // path是node.js的基本包，处理路径
// const VueLoaderPlugin = require('vue-loader/lib/plugin'); 加上这行会报错说已经声明了，没懂，只有这行声明了
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge') // 这个工具可以帮助合并不同的webpack配置
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base') 
// const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {VueLoaderPlugin} = require('vue-loader')
const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env.': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new VueLoaderPlugin(),
  new HTMLPlugin()
]

//将devServer单独const，方便使用
const devServer = {
  port: 8000,
  host: '0.0.0.0', //设置为0.0，可以通过localhost访问，也可以通过内网ip访问
  overlay: {
    errors: true, // 将错误显示在页面上
  },
  hot: true //单页面应用：只渲染修改的某组件，不会让整个页面都重新加载
}

let config

if (isDev) {
  config = merge(baseConfig, {
    devtool: '#cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            // { // css module的配置
            //   loader: 'css-loader',
            //   options: {
            //     module: true,
            //     localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            //   }
            // },
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
    plugins: defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })
} else {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname,'../client/index.js'),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractPlugin('styles.[md5:contenthash:hex:8].css'),
      new webpack.optimize.SplitChunksPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.RuntimeChunkPlugin({
        name: 'runtime'
      }),
      new VueLoaderPlugin()
    ]
  })
}
module.exports = config