const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const staticPath = path.join(__dirname, 'public');
const app = express();

// 使用 bodyparser 来解析 前端浏览器 post 提交 的json 数据
app.use(bodyParser.json());

const staticMiddleware = express.static(staticPath);

app.use(staticMiddleware);

app.post('/login', function(request, response) {
    let username = request.body.username;
    let password = request.body.password;
    // mock  数据
    if (username === 'zhang' && password === '123') {
        response.send({
            code: 0,
            msg: '登陆成功'
        })
    } else {
        response.send({
            code: 110,
            msg: '登录失败'
        })
    }
});

app.post('/loginAdmin', function(request, response) {
    let uname = request.body.uname;
    let upwd = request.body.upwd;
    // mock  数据
    if (uname === 'zhang' && upwd === '123') {
        response.send({
            code: 100,
            msg: '登陆成功'
        })
    } else {
        response.send({
            code: 110,
            msg: '登录失败'
        })
    }
})

const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('http://localhost:' + port);
});