'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Registrations', [
      {
        userId: 1,
        postId: 4,
        name: 'Demo',
        email: "kat@kat.com",
        phone: "456-365-9876"
      },
      {
        userId: 2,
        postId: 1,
        name: 'Kat tsymbal',
        email: "kat@kat.com",
        phone: "456-365-9876"
      },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
