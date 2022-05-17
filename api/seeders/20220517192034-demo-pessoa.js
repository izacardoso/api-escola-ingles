'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pessoas', [
      {
        nome: 'Ana Souza',
        ativo: true,
        email: 'ana@ana.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Marcos Sintra',
        ativo: true,
        email: 'marcos@marcos.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Felipe Cardoso',
        ativo: true,
        email: 'felipe@felipe.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Sandra Oliveira',
        ativo: true,
        email: 'sandra@sandra.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pessoas', null, {});
  }
};
