'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_student = sequelize.define('tbl_student', {
    rf_id: DataTypes.STRING,
    addmission_id: DataTypes.STRING,
    doj: DataTypes.DATEONLY,
    name: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    nationality: DataTypes.STRING,
    father_name: DataTypes.STRING,
    mother_name: DataTypes.STRING,
    address: DataTypes.TEXT,
    mobile_no: DataTypes.STRING,
    email: DataTypes.STRING,
    comment: DataTypes.TEXT,
    photo: DataTypes.STRING
  }, {});
  tbl_student.associate = function(models) {
    // associations can be defined here
    tbl_student.belongsTo(models.tbl_class, {
      foreignKey: 'class_id',  
    });

    tbl_student.hasMany(models.tbl_rf_id, {
      foreignKey: 'student_id',
    });
    tbl_student.hasMany(models.tbl_rule_violation, {
      foreignKey: 'violated_student_id',
    });
  };
  return tbl_student;
};