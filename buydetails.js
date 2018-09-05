
var getDetailsOf = function(listOfTickers, userID){
    // pegar esses dados de uma tabela de histórico
    defaultDict = {date: "11/11/1111", qtd: 100, price: 9.72, taxas: 18.90};

    return new Promise(function(resolve, reject) {
        data = [];
        for (var k in listOfTickers) {
            data.push({ ticker: listOfTickers[k].toUpperCase() , detail: defaultDict});
            // data.push({ ticker: listOfTickers[k].toUpperCase() , detail: defaultDict});
        }
        if (data.length != 0){
            resolve(data);
        } else {
            reject("error ");
        }
    })
};

module.exports = {
    getDetailsOf: getDetailsOf
}
