'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_rule_violation = sequelize.define('tbl_rule_violation', {
    violated_rule: DataTypes.STRING,
    violated_student_id: DataTypes.INTEGER,
    violated_faculty_id: DataTypes.INTEGER,
    violated_by: DataTypes.STRING,
    comment: DataTypes.TEXT,
    s_id: DataTypes.INTEGER,
    is_teacher_viewed: DataTypes.BOOLEAN,
    is_admin_viewed: DataTypes.BOOLEAN
  }, {});
  tbl_rule_violation.associate = function(models) {
    // associations can be defined here
    tbl_rule_violation.belongsTo(models.tbl_student, {
      foreignKey: 'violated_student_id',  
    });
    tbl_rule_violation.belongsTo(models.tbl_faculty, {
      foreignKey: 'violated_faculty_id',  
    });
    tbl_rule_violation.belongsTo(models.tbl_sensors, {
      foreignKey: 's_id',  
    });
  };
  return tbl_rule_violation;
};