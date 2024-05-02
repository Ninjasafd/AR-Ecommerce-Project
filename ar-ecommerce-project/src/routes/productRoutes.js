const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
const multer = require('multer');
const upload = require('../middleware/upload');
const Product = require('../models/Product');

router.post('/add-product', upload.fields([{ name: 'imageSrc' }, { name: 'model' }]), async (req, res) => {

    if (!req.files['imageSrc'] || !req.files['imageSrc'][0]) {
        return res.status(400).json({ message: 'Image source file is required' });
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
            model: req.body.model
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
            let imageData = null;

            if (product.imageSrc && product.imageSrc.data && product.imageSrc.contentType) {
                imageData = `data:${product.imageSrc.contentType};base64,${product.imageSrc.data.toString('base64')}`;
            }

            return {
                ...product.toObject(),
                imageSrc: imageData
            };
        });

        res.json(formattedProducts);
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

router.post('/tweet', (req, res) => {
    const { text } = req.body;

    // Post a tweet with the provided text
    const status = {
        status: text
    };

    const client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    client.post('statuses/update', status, function (error, tweet, response) {
        if (!error) {
            res.json({ success: true, tweet });
        } else {
            res.status(500).json({ success: false, message: 'Failed to tweet.', error });
        }
    });
});



module.exports = router;
