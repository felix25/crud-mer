'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   
  return queryInterface.bulkInsert('Reparaciones', [
    {
      description: 'cambio de llanta',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'engrasado de pedales',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      description: 'cambio de bujillas',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Reparaciones', null, {});
  }
};
