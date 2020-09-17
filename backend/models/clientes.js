'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    state: DataTypes.INTEGER
  }, {});
  Clientes.associate = function(models) {
    // associations can be defined here
    Clientes.hasMany(models.Autos)
  };
  return Clientes;
};