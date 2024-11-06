require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 27018;

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Welcome to the REST API');
});

// Listen on specified port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const itemRoutes = require('./routes/itemRoutes');
app.use('/api', itemRoutes);

