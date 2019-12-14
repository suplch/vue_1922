module.exports = {
    devServer: {
      proxy: {
        '/goods': { // 当浏览器发起 以 /goods 打头的请求时, 将请求转发给 localhost:5000 服务
            target: 'http://localhost:5000'
        }
      }
    }
  }