'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticker = sequelize.define('Ticker', {
    tickerName: DataTypes.STRING,
    userID: DataTypes.INTEGER
  }, {});
  Ticker.associate = function(models) {
    // associations can be defined here
  };
  return Ticker;
};