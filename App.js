var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const path = require('path')

var axios = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public/templates'));

var wiki = require('./wiki');
app.use('/wiki', wiki);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public/templates'));

var matematica = require('./math_custom.js');

app.get('/', function(req, res) {
  teste = axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/');
  res.render('templates/index', {name: teste});
});

app.get('/user/signin', function(req, res) {
  
  res.render('templates/login', {name: "Claudio"});
});

app.get('/user/signup', function(req, res) {
  res.render('templates/login', {name: "Claudio"});
});

app.post('/user/signup', function(req, res) {
  if (req != null){
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.psw;
  }
  res.render('../public/login', {name: "Claudio"});
});

app.listen(PORT, function() {
  console.log('Example app listening on port 5000!');
});