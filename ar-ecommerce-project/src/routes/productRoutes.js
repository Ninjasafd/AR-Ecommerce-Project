const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = require('../middleware/upload');
const Product = require('../models/Product');

router.post('/add-product', upload.fields([{ name: 'imageSrc' }, { name: 'model' }]), async (req, res) => {
    try {
        const newProduct = new Product({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
            imageSrc: req.files['imageSrc'] ? req.files['imageSrc'][0].buffer : undefined,
            model: {
                data: req.files['model'][0].buffer,
                contentType: req.files['model'][0].mimetype
            }
        });

        await newProduct.save();
        console.log(`f"Added ${newProduct.title} correctly`)
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error saving product', error: error.message });
    }
});

router.get('/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});


module.exports = router;
