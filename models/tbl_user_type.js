'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_user_type = sequelize.define('tbl_user_type', {
    user_type: DataTypes.STRING
  }, {});
  tbl_user_type.associate = function(models) {
    // associations can be defined here
    tbl_user_type.hasMany(models.tbl_login, {
      foreignKey: 'user_type',
    });
  };
  return tbl_user_type;
};