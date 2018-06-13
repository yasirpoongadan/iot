'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_sensors = sequelize.define('tbl_sensors', {
    sensor_name: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
    sensor_device_id: DataTypes.STRING
  }, {});
  tbl_sensors.associate = function(models) {
    // associations can be defined here
    tbl_sensors.belongsTo(models.tbl_class, {
      foreignKey: 'class_id',  
    });
    tbl_sensors.hasMany(models.tbl_track_details, {
      foreignKey: 'sensor_device_id',
    });
    tbl_sensors.hasMany(models.tbl_rules, {
      foreignKey: 's_id',
    });
    tbl_sensors.hasMany(models.tbl_rule_violation, {
      foreignKey: 's_id',
    });
  };
  return tbl_sensors;
};