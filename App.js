var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const path = require('path')

const { Pool } = require('pg');

var axios = require('axios');

/**
 * Init Alpha Vantage with your API key.
 *
 * @param {String} key
 *   Your Alpha Vantage API key.
 */

const alpha = require('alphavantage')({ key: String( process.env.API_KEY_ALPHAADVANTAGE ) } ) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use(express.static(__dirname + '/public/templates'));

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
    console.log(data['Time Series (Daily)'][lastKey]['4. close']);
    res.render('templates/index', {name: "Claudio"});
  });
  
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT * FROM test_table');
    res.render('templates/db', result);
    client.release();
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

app.get('/user/signin', function(req, res) {
  
  res.render('templates/login', {name: "Claudio", root_dir2: path.join(__dirname)});
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

// registerServiceWorker();