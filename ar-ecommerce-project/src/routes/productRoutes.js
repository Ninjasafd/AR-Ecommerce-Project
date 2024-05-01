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
            imageSrc: req.files['imageSrc'][0].buffer,
            model: {
                data: req.files['model'][0].buffer,
                contentType: req.files['model'][0].mimetype
            }
        });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error saving product', error: error.message });
    }
});

module.exports = router;
