'use strict';

const autos = require("./autos");

module.exports = (sequelize, DataTypes) => {
  const Marcas = sequelize.define('Marcas', {
    name: DataTypes.STRING
  }, {});
  Marcas.associate = function(models) {
    // associations can be defined here
    Marcas.hasMany(models.Autos)
  };
  return Marcas;
};