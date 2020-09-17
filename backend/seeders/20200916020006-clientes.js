'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example: */
      return queryInterface.bulkInsert('Clientes', [{
        firstName: 'Alberto luis',
        lastName: 'Felix magallanes',
        email: 'felix_1108@hotmail.com',
        address: 'av primavera',
        state: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Clientes', null, {});
  }
};
