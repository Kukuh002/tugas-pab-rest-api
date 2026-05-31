# ANDIKA KUKUH PRASETYO-5210411413
# REST API Sederhana - Manajemen Produk

Project ini adalah tugas pembuatan REST API sederhana menggunakan **Express.js**, **Sequelize (ORM)**, dan **MySQL** dengan arsitektur MVC (Model-View-Controller). API ini menyediakan fungsionalitas CRUD (Create, Read, Update, Delete) untuk data Produk.

## Teknologi yang Digunakan
* Node.js
* Express.js
* Sequelize ORM
* MySQL (via Laragon)

## Persiapan (Prerequisites)
Pastikan kamu sudah menginstal perangkat lunak berikut di komputermu:
* [Node.js](https://nodejs.org/)
* [Laragon](https://laragon.org/) (atau XAMPP untuk MySQL)
* Postman atau ekstensi Thunder Client untuk menguji API

## Cara Instalasi & Menjalankan Project
1. **Clone repositori ini**
   ```bash
   git clone [https://github.com/username-kamu/tugas-pab-rest-api.git](https://github.com/username-kamu/tugas-pab-rest-api.git)
   cd tugas-pab-rest-api

2. Instal dependencies
   ```bash
    npm install
4. Setup Database
   * Buka Laragon dan jalankan Start All.
   * Buka database dan buat database baru bernama simple_rest_api.
   * Sesuaikan username, password, dan nama database di file config/config.json jika diperlukan.
6. Jalankan Migrasi dan Seeder
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
8. Jalankan Server
   ```bash
   node app.js
   # atau menggunakan nodemon: npx nodemon app.js

# Dokumentasi API (Endpoints)
Berikut adalah daftar endpoint yang tersedia beserta contoh strukturnya:
1. Menampilkan Semua Produk
   * Method: GET
   * URL: /api/products
3. Menampilkan Produk Berdasarkan Id
   * Method: GET
   * URL: /api/products/{id}
5. Membuat Produk Baru
   * Method: POST
   * URL: /api/products
   * Body (JSON):
     {
        "name": "Buku Tulis Sinar Dunia",
        "price": 5000,
        "stock": 100,
        "category": "Alat Tulis"
      }
7. Memperbarui Produk
   * Method: PUT
   * Body (JSON):
     {
        "price": 4500,
        "stock": 110
     }
9. Menghapus Produk
   * Method: GET
   * URL: /api/products/{id}
