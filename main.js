var express = require('express');
var app = express();
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const path = require('path')

var models = require('./server/models/index.js');

// const alpha = require('alphavantage')({ key: String( process.env.API_KEY_ALPHAADVANTAGE ) } ) ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

// app.use( express.static( "public" ) );

var wiki = require('./wiki');
app.use('/wiki', wiki);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(express.static(__dirname + '/public/templates'));

// var matematica = require('./math_custom.js');
var apiaccess = require('./apiaccess.js');
var buydetails = require('./buydetails.js');
var getROI = require('./getROI.js');
app.get('/', function(req, res) {

  var userID = 1;
  DBManipulate.getTickerList(userID).then(function(list){
    apiaccess.getListPrices(list).then(function(body){
      buydetails.getDetailsOf(list, 2).then(function(details){
        for (var i = body.length - 1; i >= 0; i--) {
          body[i].ROI = getROI.getROI(body[i], details).toFixed(2);
        }
        res.render('templates/index', {stock: body, detailsOf: details});
      }).catch(function(err){
        console.log(err);
      });
    })
    .catch(function(err){
      console.log(err);
    });

  }).catch(function(error){
    console.log(error);
  });
  
  var list = {
  1: "itsa4", 
  2: "abcp11", 
  5: "vale3",
  6: "petr3",
  7: "bova11"
  };

  
});

app.get('/porta', function(req, res) {
  res.send(String(PORT));
});


var DBManipulate = require('./DBManipulate.js');

app.post('/addNewBuy',function(req, res){
  console.log(req.body);
  DBManipulate.addNewBuy(req.body, 1).then(
    function(confirmacao){
      res.redirect('/');
    }
  ).catch(function(erro){
    console.log(erro);
  });
});

app.listen(PORT, function() {
  console.log('Example app listening on port '+PORT);
});

