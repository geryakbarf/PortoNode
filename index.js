//Constanta Untuk Pemanggilan Modul
const express = require('express');
const app = express();
const body = require('body-parser');
const defaultRoute = require('./routes/default');
const path = require('path');
const db = require('./utils/database');
//Deklarasi Middleware
app.set('views', 'views');
app.set('view engine', 'ejs');
app.use(body.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
//Route Configuration
app.use(defaultRoute);
db.sync().then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
});
//Start Server
app.listen(8000);
