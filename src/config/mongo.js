const mongoose = require('mongoose');
const { mongoURI } = require('./env');

async function connectMongoDB() {
    await mongoose.connect(mongoURI);
}

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('Error ao conectar ao MongoDB:', err);
});

module.exports = { connectMongoDB };
