'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_rules_time = sequelize.define('tbl_rules_time', {
    rule_id: DataTypes.INTEGER,
    from_time: DataTypes.TIME,
    to_time: DataTypes.TIME
  }, {});
  tbl_rules_time.associate = function(models) {
    // associations can be defined here
    tbl_rules_time.belongsTo(models.tbl_rules, {
      foreignKey: 'rule_id',  
    });
  };
  return tbl_rules_time;
};