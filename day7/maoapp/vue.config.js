module.exports = {
    devServer: {
      proxy: {
        '/user': {
            target: 'http://localhost:5000'
        },
        '/product': {
            target: 'http://localhost:3000'
        }
      }
    }
  }