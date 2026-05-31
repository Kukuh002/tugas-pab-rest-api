const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware untuk routing
app.use('/api', productRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan pada port ${PORT}`);
});