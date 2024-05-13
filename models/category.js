const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    games: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'game'
        }
    ]
})

module.exports = mongoose.model('category', categorySchema);











