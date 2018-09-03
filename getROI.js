var getROI = function(body, details){
    // [TODO] otimizar essa parte
    var ticker = body.ticker;
    var currentValue = body.price;
    var buyCost = 0.0;
    var currentQtd = 0;
    for (var j = details.length - 1; j >= 0; j--) {
       if (details[j].ticker == ticker) {
           buyCost += details[j].detail.qtd * details[j].detail.price + details[j].detail.taxas;     
           currentQtd += details[j].detail.qtd;
       }
    }
    return (body.price*currentQtd - buyCost)*100/buyCost;
};

module.exports = {
    getROI: getROI
}