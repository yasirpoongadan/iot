'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_rf_id = sequelize.define('tbl_rf_id', {
    rf_id: DataTypes.STRING,
    user_type: DataTypes.STRING,
    student_id: DataTypes.INTEGER,
    faculty_id: DataTypes.INTEGER
  }, {});
  tbl_rf_id.associate = function(models) {
    // associations can be defined here
    tbl_rf_id.belongsTo(models.tbl_student, {
      foreignKey: 'student_id',  
    });
    tbl_rf_id.belongsTo(models.tbl_faculty, {
      foreignKey: 'faculty_id',  
    });

    tbl_rf_id.hasMany(models.tbl_track_details, {
      foreignKey: 'rf_id',
    });
  };
  return tbl_rf_id;
};