const { Product } = require('../models');

class ProductControllers {
    //Get /api/products : Untuk mendapatkan semua produk
    static async getAllProducts(req, res) {
        try{
            const products = await Product.findAll();
            res.status(200).json({
                success: true,
                message: 'Produk berhasil diambil',
                data: products
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server internal',
                error: error.message
            });
        }
    }

     //Get /api/products/:id : Untuk mendapatkan produk berdasarkan id
    static async getProductById(req, res) {
        try{
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Produk tidak ditemukan'
                });
            }
            res.status(200).json({
                success: true,
                message: 'Produk berhasil diambil',
                data: product
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server internal',
                error: error.message    
            });
        }
    }
    //POST /api/products : Untuk membuat produk baru
    static async createProduct(req, res) {
        try{
            const { name, price, stock, category } = req.body;
            if (!name || !price || !stock || !category) {
                res.status(400).json({
                    success: false,
                    message: 'Mohon isi semua field'
                });
                return;
            }
            const product = await Product.create({
                name,
                price,
                stock,
                category
            });
            res.status(201).json({
                success: true,
                message: 'Produk berhasil dibuat',
                data: product
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server internal',
                error: error.message    
            });
        }
    }
    //PUT /api/products/:id : Untuk mengupdate produk berdasarkan id
    static async updateProduct(req, res) {
        try{
            const { id } = req.params;
            const { name, price, stock, category } = req.body;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Produk tidak ditemukan'
                });
            }
            product.name = name;
            product.price = price;
            product.stock = stock;
            product.category = category;
            await product.save();
            res.status(200).json({
                success: true,
                message: 'Produk berhasil diupdate',
                data: product
            });  
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server internal',
                error: error.message    
            });
        }
    }
    //DELETE /api/products/:id : Untuk menghapus produk berdasarkan id
    static async deleteProduct(req, res) {
        try{
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({
                    success: false,
                    message: 'Produk tidak ditemukan'
                });
            }
            await product.destroy();
            res.status(200).json({
                success: true,
                message: 'Produk berhasil dihapus'
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server internal',   
                error: error.message    
            });
        }
    }
}

module.exports = ProductControllers;
