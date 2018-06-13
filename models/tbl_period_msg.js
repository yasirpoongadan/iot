'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_period_msg = sequelize.define('tbl_period_msg', {
    period_name: DataTypes.STRING,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME
  }, {});
  tbl_period_msg.associate = function(models) {
    // associations can be defined here
  };
  return tbl_period_msg;
};