const express = require('express');
const path = require('path');

const app = express();

app.get('/user/user_info', function(request, response) {
    console.log('一个请求来了', request.url)
    response.send({
        name: '张三',
        age: 18
    })
})

app.get('/user/delete_user', function(request, response) {
    console.log('一个请求来了', request.url)
    response.send({
        ok: true
    })
})


app.listen(5000, function(err) {
    if (err) {
        return console.log(err)
    }
    console.log('用户服务已经启动')
    console.log('http://localhost:' + 5000);
});