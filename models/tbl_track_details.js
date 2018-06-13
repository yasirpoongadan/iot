'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_track_details = sequelize.define('tbl_track_details', {
    rf_id: DataTypes.STRING,
    s_id: DataTypes.STRING,
    direction: DataTypes.STRING,
    error_code: DataTypes.INTEGER,
    is_cheked: DataTypes.BOOLEAN
  }, {});
  tbl_track_details.associate = function(models) {
    // associations can be defined here
    tbl_track_details.belongsTo(models.tbl_rf_id, {
      foreignKey: 'rf_id',  
    });
    tbl_track_details.belongsTo(models.tbl_sensors, {
      foreignKey: 's_id',  
    });
    tbl_track_details.belongsTo(models.tbl_error_msg, {
      foreignKey: 'error_code',  
    });
  };
  return tbl_track_details;
};
