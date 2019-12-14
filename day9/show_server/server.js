const express = require('express');

const app = express();


app.get('/goods/list', function(request, response) {

    setTimeout(function() {
        response.send({
            // 在公司里面, 有可能 规定一个code属性代表了访问是否成功 或 失败
            code: 10000,
            msg: 'ok',
            data: [
                {id: '111', name: '电脑', price: 10000, pic: '💻'},
                {id: '222', name: '键盘', price: 200, pic: '⌨️'},
                {id: '333', name: '鼠标', price: 99, pic: '🖱'},
              ]
        });
    }, 3000);

    

    // response.send({
    //     code: 101,
    //     msg: '数据库服务挂了'
    // });

    // response.send({
    //     code: 102,
    //     msg: '网络超时'
    // }) 
});

app.get('/lang/newlangs', function(request, response) {

    setTimeout(function() {
        response.send([
            'rust', 'erlang', 'D'
        ]);
    }, 1000);
});

app.get('/lang/more', function(request, response) {

    setTimeout(function() {
        response.send([
            'english', 'french', 'chinese'
        ]);
    }, 1000);
});

app.get('/lang/list', function(request, response) {

    setTimeout(function() {
        response.send([
            'java', 'c++', 'ruby', 'python', 
            'julia', 'scale', 'go', 'php', 'c#', 'basic'
        ])
    }, 1000)

})


const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`电商网站服务启动完毕: http://localhost:${port}`);
});