'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_rules = sequelize.define('tbl_rules', {
    rule_title: DataTypes.STRING,
    restricted_for: DataTypes.STRING,
    type: DataTypes.STRING,
    s_id: DataTypes.INTEGER
  }, {});
  tbl_rules.associate = function(models) {
    // associations can be defined here
    tbl_rules.belongsTo(models.tbl_sensors, {
      foreignKey: 's_id',  
    });

    tbl_rules.hasMany(models.tbl_rules_time, {
      foreignKey: 'rule_id',
    });
  };
  return tbl_rules;
};