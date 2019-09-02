// const docsLoader = require.resolve('./doc-loader')
module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCss: !isDev,
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true //将vue中命名方式为camel-case转化为camelCase
                      //原因：css类名用camel-case，单JavaScript调用是camelCase，所以要将css的命名转化
    },
    // postcss //全局的配置，不写在这
    // hotReload: false //热重载配置，根据环境变量生成
    // loaders: { //自定义vue模块：像template，script，style
    //   'docs': docsLoader,
    // },
    // preLoader: {},
    // postLoader: {}
  }
}