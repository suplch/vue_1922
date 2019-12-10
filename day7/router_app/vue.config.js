module.exports = {
    devServer: {
      proxy: {
        '/product': { // 当浏览器发起 以 /product 打头的请求时, 将请求转发给 localhost:3000 服务
            target: 'http://localhost:3000'
        }
      }
    }
  }