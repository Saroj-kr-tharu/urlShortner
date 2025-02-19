'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();
    await queryInterface.bulkInsert('UrlRanges', [
      {
        start: 100000,
        end: 1200000000,
        current: 100000,
        createdAt: now,
        updatedAt: now
      },
      {
        start: 1200000001,
        end: 2400000000,
        current: 1200000001,
        createdAt: now,
        updatedAt: now
      },
      {
        start: 2400000001,
        end: 3600000000,
        current: 2400000001,
        createdAt: now,
        updatedAt: now
      },
      {
        start: 3600000001,
        end: 4800000000,
        current: 3600000001,
        createdAt: now,
        updatedAt: now
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UrlRanges', null, {});
  }
};