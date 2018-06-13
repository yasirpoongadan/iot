'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_class = sequelize.define('tbl_class', {
    class_name: DataTypes.STRING,
    div_id: DataTypes.INTEGER
  }, {});
  tbl_class.associate = function(models) {
    // associations can be defined here
    tbl_class.belongsTo(models.tbl_division, {
      foreignKey: 'div_id',  
    });

    tbl_class.hasMany(models.tbl_student, {
      foreignKey: 'class_id',
    });
    tbl_class.hasMany(models.tbl_faculty, {
      foreignKey: 'class_id',
    });
    tbl_class.hasMany(models.tbl_sensors, {
      foreignKey: 'class_id',
    });
  };
  return tbl_class;
};