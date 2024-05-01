const express = require('express');
const router = express.Router();
const File = require('../models/Product');
const upload = require('../middleware/upload');

// Endpoint to handle file uploads
router.post('/upload', upload.single('file'), async (req, res) => {
  const newFile = new File({
    name: req.file.originalname,
    data: req.file.buffer,
    contentType: req.file.mimetype
  });
  console.log(newFile)
  try {
    await newFile.save();
    res.status(201).send('File uploaded successfully');
  } catch (error) {
    res.status(400).send('Error saving file');
  }
});

// Endpoint to retrieve files
router.get('/:id', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).send('File not found');
    res.set('Content-Type', file.contentType);
    res.send(file.data);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
