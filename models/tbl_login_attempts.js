'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_login_attempts = sequelize.define('tbl_login_attempts', {
    ip: DataTypes.STRING,
    is_success: DataTypes.BOOLEAN
  }, {});
  tbl_login_attempts.associate = function(models) {
    // associations can be defined here
  };
  return tbl_login_attempts;
};