'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Turmas', [
      {
        descr_nivel: "basico",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: "intermediario",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: "avançado",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Niveis', null, {})
  }
};
