'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_faculty = sequelize.define('tbl_faculty', {
    rf_id: DataTypes.STRING,
    doj: DataTypes.DATEONLY,
    name: DataTypes.STRING,
    class_id: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    dob: DataTypes.DATEONLY,
    address: DataTypes.TEXT,
    mobile_no: DataTypes.STRING,
    email: DataTypes.STRING,
    comment: DataTypes.TEXT,
    photo: DataTypes.STRING,
    login_sent: DataTypes.BOOLEAN
  }, {});
  tbl_faculty.associate = function(models) {
    // associations can be defined here
    tbl_faculty.belongsTo(models.tbl_class, {
      foreignKey: 'class_id',  
    });

    tbl_faculty.hasMany(models.tbl_login, {
      foreignKey: 'faculty_id',
    });
    tbl_faculty.hasMany(models.tbl_rf_id, {
      foreignKey: 'faculty_id',
    });
    tbl_faculty.hasMany(models.tbl_rule_violation, {
      foreignKey: 'violated_faculty_id',
    });
  };
  return tbl_faculty;
};