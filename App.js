var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var firebase = require('firebase');

// <script src="https://www.gstatic.com/firebasejs/5.3.0/firebase.js"></script>

var config = {
    apiKey: "AIzaSyAolTP8Rt1n7xxqoSt_luGAWWg5H7mcMEw",
    authDomain: "investment-monitor.firebaseapp.com",
    databaseURL: "https://investment-monitor.firebaseio.com",
    projectId: "investment-monitor",
    storageBucket: "investment-monitor.appspot.com",
    messagingSenderId: "938345577728"
};

firebase.initializeApp(config);


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
  console.log(matematica.perimeter(4));
  var user = firebase.auth().currentUser;
  if (user) {
    console.log("alguem esta logado");
  }
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
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
  res.render('../public/login', {name: "Claudio"});
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});