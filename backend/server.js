const express = require('express');
const app = express();
const bp = require('body-parser');
const port = process.env.PORT || 3000;


//express
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
// CORS HEADERS MIDDLEWARE
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id");
    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );

    next();
});

//routes
app.use('/api', require('./routes/api'));

//start server
app.listen(port, () => {
    console.log("Server connected on port 3000");
});