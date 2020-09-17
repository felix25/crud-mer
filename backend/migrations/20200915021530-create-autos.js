'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Autos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      ClienteId:{
        type: Sequelize.INTEGER
      },
      MarcaId:{
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Autos');
  }
};