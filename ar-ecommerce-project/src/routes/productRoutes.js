const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../middleware/upload');
const Product = require('../models/Product');

router.post('/add-product', upload.fields([{ name: 'imageSrc' }, { name: 'model' }]), async (req, res) => {

    if (!req.files['imageSrc'] || !req.files['imageSrc'][0]) {
        return res.status(400).json({ message: 'Image source file is required' });
    }
    if (!req.files['model'] || !req.files['model'][0]) {
        return res.status(400).json({ message: 'Model file is required' });
    }

    try {
        const newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
            imageSrc: {
                data: req.files['imageSrc'][0].buffer,
                contentType: req.files['imageSrc'][0].mimetype
            },
            model: {
                data: req.files['model'][0].buffer,
                contentType: req.files['model'][0].mimetype
            }
        });

        await newProduct.save();
        console.log(`Added ${newProduct.title} product`);
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Error during product creation:', error);
        res.status(400).json({ message: 'Error saving product', error: error.message });
    }
});


router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});

        const formattedProducts = products.map(product => {
            if (product.imageSrc && product.imageSrc.data && product.imageSrc.contentType) {
                imageData = `data:${product.imageSrc.contentType};base64,${product.imageSrc.data.toString('base64')}`;
            }
            if (product.model && product.model.data && product.model.contentType) {
                model = `data:${product.model.contentType};base64,${product.model.data.toString('base64')}`;
            }
            return {
                ...product.toObject(),
                imageSrc: imageData,
                model: model
            };
        });

        res.json(formattedProducts);
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});



module.exports = router;
