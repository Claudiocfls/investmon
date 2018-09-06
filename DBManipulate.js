var models = require('./server/models/index.js');
// esse modulo algum dia sera a interface de manipulacao da base de dados

// recebe informacoes da compra e adiciona para esse usuario
var addNewBuy = function(data, userID){
    return new Promise (function(resolve, reject){

        console.log("dados recebidos: ",data, userID), data.addvalue, data.addqtd;
        models.Ticker.create({
            tickerName: data.addticker,
            userID: userID,
            amountPurchased: data.addqtd,
            price: parseFloat(data.addvalue)
        }).then(function(response){
            resolve("adicionado: ",response);
        }).catch(function(error){
            reject("error: ",error);
        });
    })
};

// recebe um userID e retorna a lista de tickers para esse usuario
var getTickerList = function(userID){
    return new Promise (function(resolve, reject){
        models.Ticker.findAll({
            raw: true,
            where: {
                userID: userID
            }
        }).then(function(tickerList) {
            console.log("tickerlist",tickerList);
            var listaCompleta = {}
            var listaTickers = {}
            for (var i = tickerList.length - 1; i >= 0; i--) {
                listaCompleta[i] = [tickerList[i].tickerName.toUpperCase() , tickerList[i].amountPurchased, tickerList[i].price, tickerList[i].createdAt];
                listaTickers[i] = tickerList[i].tickerName;
            }
            resolve([listaCompleta, listaTickers]);
        }).catch(function(error){
            reject(error);
        });
    })
};

module.exports = {
    addNewBuy: addNewBuy,
    getTickerList: getTickerList
}