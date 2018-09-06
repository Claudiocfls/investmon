'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticker = sequelize.define('Ticker', {
    tickerName: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    amountPurchased: DataTypes.INTEGER,
    price: DataTypes.FLOAT 
  }, {});
  Ticker.associate = function(models) {
    // associations can be defined here
  };
  return Ticker;
};