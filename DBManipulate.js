
// esse modulo algum dia sera a interface de manipulacao da base de dados
var addNewBuy = function(data, userID){
    return new Promise (function(resolve, reject){
        console.log("dados recebidos: ",data, userID);
        resolve("nada");
        if (false){
            reject("nada");
        }
    })
};

module.exports = {
    addNewBuy: addNewBuy
}