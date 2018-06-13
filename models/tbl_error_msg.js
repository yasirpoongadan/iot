'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_error_msg = sequelize.define('tbl_error_msg', {
    error_code: DataTypes.INTEGER,
    msg: DataTypes.TEXT
  }, {});
  tbl_error_msg.associate = function(models) {
    // associations can be defined here
    tbl_error_msg.hasMany(models.tbl_track_details, {
      foreignKey: 'error_code',
    });
  };
  return tbl_error_msg;
};