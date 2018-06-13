'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_division = sequelize.define('tbl_division', {
    division: DataTypes.STRING
  }, {});
  tbl_division.associate = function(models) {
    // associations can be defined here
    tbl_division.hasMany(models.tbl_class, {
      foreignKey: 'div_id',
    });
  };
  return tbl_division;
};