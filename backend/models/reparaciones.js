'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reparaciones = sequelize.define('Reparaciones', {
    description: DataTypes.STRING,
    observation: DataTypes.TEXT,
    startTime: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Reparaciones.associate = function(models) {
    // associations can be defined here
  };
  return Reparaciones;
};