const express = require('express');
const app = express();

const db = require('./db');

app.get('/product/all_list', async function(request, response) {
    const product_list = await db.all_product();
    response.send(product_list);
});

app.get('/product/all_types', async function(request, response) {
    const type_list = await db.all_type();
    response.send(type_list);
});

app.get('/product/get_products_by_type', async function(request, response) {
    // const products = await db
    console.log(request.query.typeid)
    const products = await db.productsByTypeId(request.query.typeid);
    response.send(products);
})

app.get('/comment/get_comment_by_pid', async function(request, response) {
    const comments = await db.commentByPId(request.query.pid);
    response.send(comments);
})

const port = 5000;
app.listen(port, function(err) {
    if (err) {
        return console.error(err);
    }
    console.log(`http://localhost:${port}`);
});