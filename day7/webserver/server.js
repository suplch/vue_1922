const express = require('express');
const path = require('path');

const app = express();
const staticMiddlware = express.static(path.join(__dirname, '..', 'maoapp', 'dist'))

app.use(staticMiddlware);

app.listen(5000, function(err) {
    if (err) {
        return console.log(err)
    }
    console.log('http://localhost:' + 5000);
});