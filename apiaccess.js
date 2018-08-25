
const axios = require('axios');
const request = require('request');

// const url = 'http://127.0.0.1:3000/api/v2/';
const url = 'http://tradingscrapper.herokuapp.com/api/v2/';
var getListPrices = function(listOfTickers){

    // axios.post(url, listOfTickers)
    // .then(function (response) {
    //     console.log(response);
    //     return response.data;
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    var options = {
            url: url,
            headers: {
                'User-Agent': 'request'
            },
            json: listOfTickers
    };
    return new Promise(function(resolve, reject) {
            // Do async job
            request.post(options, 
                function(err, resp, body) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(body);
                    }
                }
            )
    })
};

module.exports = {
    getListPrices: getListPrices
}
