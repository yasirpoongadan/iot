'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_login = sequelize.define('tbl_login', {
    user_name: DataTypes.STRING,
    password: DataTypes.STRING,
    is_verified: DataTypes.BOOLEAN,
    profile_img: DataTypes.STRING,
    user_type: DataTypes.INTEGER,
    forgot_code: DataTypes.STRING,
    faculty_id: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  tbl_login.associate = function(models) {
    // associations can be defined here
    tbl_login.belongsTo(models.tbl_user_type, {
      foreignKey: 'user_type',  
    });

    tbl_login.belongsTo(models.tbl_faculty, {
      foreignKey: 'faculty_id',  
    });

  };
  return tbl_login;
};