const express = require('express');
const path = require('path');

const staticPath = path.join(__dirname, 'public');
const app = express();

const staticMiddleware = express.static(staticPath);

app.use(staticMiddleware);



const port = 5000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('http://localhost:' + port);
});