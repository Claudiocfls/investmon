var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const path = require('path')

const { Pool } = require('pg');

var axios = require('axios');

var models = require('./server/models/index.js');


const alpha = require('alphavantage')({ key: String( process.env.API_KEY_ALPHAADVANTAGE ) } ) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/public'));

// app.use( express.static( "public" ) );

var wiki = require('./wiki');
app.use('/wiki', wiki);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public/templates'));

var matematica = require('./math_custom.js');
app.get('/', function(req, res) {
  var btcprice;
  // axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
  // .then(({data: {BTC, ETH, LTC}}) => { 
  alpha.data.daily(`itsa4.sa`).then(data => {
    var lastKey = Object.keys(data['Time Series (Daily)'])[0];
    var stock_price = data['Time Series (Daily)'][lastKey]['4. close'];
    res.render('templates/index', {stock: stock_price});
  });
  
});

app.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});

app.get('/porta', function(req, res) {
  res.send(String(PORT));
  
});

app.get('/userlist', function(req, res) {
  models.User.findAll({}).then(function(todos) {
    res.json(todos);
  });
});

app.post('/todos', function(req, res) {
  models.Todo.create({
    title: req.body.title,
    UserId: req.body.user_id
  }).then(function(todo) {
    res.json(todo);
  });
});


app.get('/user/signin', function(req, res) {
  
  res.render('templates/login', {name: "Claudio", root_dir2: path.join(__dirname)});
});

app.get('/user/create', function(req, res) {
  res.render('templates/login', {name: "Claudio"});
});

app.post('/user/create', function(req, res) {
  if (req != null){
    // console.log(req.body);
    var email2 = req.body.email;
  models.User.create({
    email: email2
  }).then(function(user) {
    res.json(user);
  });

  }
  // res.render('../public/login', {name: "Claudio"});
});



app.listen(PORT, function() {
  console.log('Example app listening on port 5000!');
});

// registerServiceWorker();