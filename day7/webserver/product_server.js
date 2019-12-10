const express = require('express');
const path = require('path');

const app = express();

app.get('/product/list', function(request, response) {
    response.send([
        {name: '电脑', price: 10000},
        {name: '键盘', price: 200}
    ])
})

app.get('/product/detail', function(request, response) {
    response.send({
        name: '电脑',
        price: 10000
    })
})


app.listen(3000, function(err) {
    if (err) {
        return console.log(err)
    }
    console.log('http://localhost:' + 3000);
});