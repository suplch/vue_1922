const express = require('express');
const path = require('path');

const app = express();

let productStore = {
    '111': {
        id: '111', 
        name: '香蕉', 
        price: 10, 
        pic: '🍌',
        desc: '来自海南岛的优质香蕉, 富含丰富的维生素abcdefg'
    },
    '222': {
        id: '222', name: '橙子', price: 10, pic: '🍊',
        desc: '来自江西的优质 橙子, 打包优惠'
    },
    '333': {
        id: '333', name: '黄瓜', price: 10, pic: '🥒',
        desc: '来自河南的黄瓜 美味'
    },
}

app.get('/product/list', function(request, response) {
    console.log('一个请求来了', request.url)
    setTimeout(function() {
        response.send([
            {id: '111', name: '香蕉', price: 10, pic: '🍌'},
            {id: '222', name: '橙子', price: 10, pic: '🍊'},
            {id: '333', name: '黄瓜', price: 10, pic: '🥒'},
            {id: '444', name: '西瓜', price: 10, pic: '🍉'},
        ])
    }, 3000);

})

app.get('/product/detail', function(request, response) {
    console.log('一个请求来了', request.url)
    console.log(request.query);

    setTimeout(function() {
        response.send(productStore[request.query.pid]);
    }, 2000);

    
    
})


app.listen(3000, function(err) {
    if (err) {
        return console.log(err)
    }
    console.log('产品服务已经启动:')
    console.log('http://localhost:' + 3000);
});