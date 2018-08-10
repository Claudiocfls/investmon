
const alpha = require('alphavantage')({ key: String( process.env.API_KEY_ALPHAADVANTAGE ) } ) ;

module.exports = {
  get_prices: function(array_of_tickers) {
    return get_all_prices(array_of_tickers, array_of_tickers.length - 1);
  }
};

function get_all_prices(array_of_tickers, index){
  console.log(array_of_tickers[index]);
  alpha.data.batch(array_of_tickers).then(data => {
    // var lastKey = Object.keys(data['Time Series (Daily)'])[0];
    // var stock_price = data['Time Series (Daily)'][lastKey]['4. close'];
    // var adicionar = {}
    // adicionar[array_of_tickers[index]] = stock_price;
    // if (index == 0){
    //     return adicionar;
    // } else {
    //     var vetor = [adicionar];
    //     return vetor.push(get_all_prices(array_of_tickers, index-1));
    // }
    console.log(data);
    return data;
  });
  
};