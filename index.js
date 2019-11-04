var express = require('express');
var cookieParser = require('cookie-parser');
var pug_cookie = express();
var bodyParser = require('body-parser');


const PORT=8888;
pug_cookie.use(bodyParser.urlencoded({
    extended: true
}));
pug_cookie.use(bodyParser.json());
pug_cookie.use(cookieParser());
pug_cookie.listen(PORT, ()=>{
    console.log('Listening to PORT:' +PORT);
});

pug_cookie.set('view engine', 'pug');

pug_cookie.use(express.static('public'));

pug_cookie.get('/', function(req, res){
    res.render('login')
});

pug_cookie.post('/getValues', function(req, res) {
    console.log("Body");
    console.log('Cookies:', req.cookies);
    res.cookie('usercookie', req.body);
    console.log(req.cookies.usercookie);
    res.render('Display');

});
pug_cookie.post('/setValues', function(req, res){
    res.render('Details', {usercookie: req.cookies.usercookie});
});

