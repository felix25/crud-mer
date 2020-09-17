'use strict';
module.exports = (sequelize, DataTypes) => {
  const Autos = sequelize.define('Autos', {
    color: DataTypes.STRING,
    year: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Autos.associate = function(models) {
    // associations can be defined here
    Autos.belongsTo(models.Clientes,{
      foreignKey:'ClienteId'
    })
    Autos.belongsTo(models.Marcas,{
      foreignKey:'MarcaId'
    })
    Autos.hasMany(models.ReparacioneDetaill)
  };
  return Autos;
};