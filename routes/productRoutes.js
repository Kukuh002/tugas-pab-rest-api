const express = require('express');
const router = express.Router();
const ProductControllers = require('../controllers/productControllers');

router.get('/products', ProductControllers.getAllProducts);
router.get('/products/:id', ProductControllers.getProductById);
router.post('/products', ProductControllers.createProduct);
router.put('/products/:id', ProductControllers.updateProduct);
router.delete('/products/:id', ProductControllers.deleteProduct);

module.exports = router;