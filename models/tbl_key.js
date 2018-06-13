'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_key = sequelize.define('tbl_key', {
    key: DataTypes.STRING
  }, {});
  tbl_key.associate = function(models) {
    // associations can be defined here
  };
  return tbl_key;
};