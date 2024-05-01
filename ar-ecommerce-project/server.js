require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./src/routes/productRoutes');

const app = express();
// app.use(cors());
app.use(express.json());  // Middleware to parse JSON bodies
const port = process.env.PORT || 3000;
// Use the product routes
app.use('/api/products', productRoutes);

// Construct the MongoDB URI from environment variables
const uri = `mongodb+srv://panjw:${process.env.MONGO_PASSWORD}@cluster0.08xk53a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`;

// Connect to MongoDB using Mongoose
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("MongoDB connected via Mongoose");

        // Start listening for requests only after MongoDB connection is successful
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });

        // Simple route to confirm server is running
        app.get('/', (req, res) => {
            res.send('Hello World! MongoDB is connected.');
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        // Optionally, you might not want to exit the process here to allow for reconnection attempts or logging
        process.exit(1);
    });

// Handling the shutdown properly
process.on('SIGINT', async () => {
    try {
        await mongoose.disconnect();
        console.log('MongoDB connection closed.');
    } finally {
        process.exit(0);
    }
});
