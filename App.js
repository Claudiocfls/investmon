var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000


app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));



var path = require('path');

var wiki = require('./wiki');
app.use('/wiki', wiki);

app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public/templates'));

var matematica = require('./math_custom.js');

app.get('/', function(req, res) {
  // console.log(matematica.perimeter(4));

  // console.log(req.query);
  // res.send({teste:2, outro:req.query.teste});
  // res.render('index.html', { name: "Claudio" });
  res.render('templates/index', {name: "Claudio"});
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
  console.log('Example app listening on port 3000!');
});