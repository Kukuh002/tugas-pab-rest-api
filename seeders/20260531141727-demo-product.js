'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Memasukkan data ke tabel 'Products'
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Indomie Goreng Spesial',
        price: 3500,
        stock: 120,
        category: 'Makanan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kue Puthu Bambu',
        price: 15000,
        stock: 30,
        category: 'Makanan',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Es Teh Rakjat',
        price: 5000,
        stock: 85,
        category: 'Minuman',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pensil Faber-Castell 2B',
        price: 5000,
        stock: 200,
        category: 'Alat Tulis',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Buku Gambar A4 100 Lembar',
        price: 25000,
        stock: 50,
        category: 'Buku',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Headphone Bluetooth JBL',
        price: 200000,
        stock: 25,
        category: 'Elektronik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Wireless Rechargeable Bluetooth Mouse',
        price: 125000,
        stock: 15,
        category: 'Elektronik',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    // Menghapus semua data di tabel 'Products' jika seeder di-undo
    await queryInterface.bulkDelete('Products', null, {});
  }
};