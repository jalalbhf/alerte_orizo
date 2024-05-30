const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // Ajoutez d'autres champs nécessaires
});

module.exports = mongoose.model('Alert', AlertSchema);
