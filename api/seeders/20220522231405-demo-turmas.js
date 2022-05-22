'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Turmas', [
      {
        data_inicio: "2022-02-01",
        nivel_id: 1,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-04-13",
        nivel_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        data_inicio: "2022-07-03",
        nivel_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Turmas', null, {})

  }
};
