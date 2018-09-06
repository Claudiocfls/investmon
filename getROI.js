var getROI = function(body, details){
    // [TODO] otimizar essa parte
    var ticker = body.ticker;
    var currentValue = body.price;
    var buyCost = 0.0;
    var currentQtd = 0;
    for (var j in details) {
       if (details[j][0] == ticker) {
           buyCost += details[j][1] * details[j][2];
           currentQtd += details[j][1];
       }
    }
    return (body.price*currentQtd - buyCost)*100/buyCost;
};

module.exports = {
    getROI: getROI
}