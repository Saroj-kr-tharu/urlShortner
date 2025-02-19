'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     */
    await queryInterface.bulkInsert('urldbs', [
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example1.com',
        shortUrl: 'https://short.ly/abc123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example2.com',
        shortUrl: 'https://short.ly/def456',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example3.com',
        shortUrl: 'https://short.ly/ghi789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example4.com',
        shortUrl: 'https://short.ly/jkl012',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example5.com',
        shortUrl: 'https://short.ly/mno345',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example6.com',
        shortUrl: 'https://short.ly/pqr678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example7.com',
        shortUrl: 'https://short.ly/stu901',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example8.com',
        shortUrl: 'https://short.ly/vwx234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example9.com',
        shortUrl: 'https://short.ly/yz567',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'sarojc11345@gmail.com',
        originalUrl: 'https://example10.com',
        shortUrl: 'https://short.ly/abc890',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     */
    await queryInterface.bulkDelete('Urls', { email: 'sarojc11345@gmail.com' }, {});
  }
};