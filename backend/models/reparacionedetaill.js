'use strict';
module.exports = (sequelize, DataTypes) => {
  const ReparacioneDetaill = sequelize.define('ReparacioneDetaill', {
    observation: DataTypes.TEXT,
    startTime: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  ReparacioneDetaill.associate = function(models) {
    // associations can be defined here
    ReparacioneDetaill.belongsTo(models.Autos,{
      foreignKey:'AutoId'
    })
  };
  return ReparacioneDetaill;
};