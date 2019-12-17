module.exports = {
    devServer: {
        proxy: {
            '/product': {  // 当浏览器发起 以 /user 打头的请求时, 将请求转发给 localhost:5000 服务
                target: 'http://localhost:5000'
            },
            '/comment': {  // 当浏览器发起 以 /user 打头的请求时, 将请求转发给 localhost:5000 服务
                target: 'http://localhost:5000'
            }
        }
    }
  }