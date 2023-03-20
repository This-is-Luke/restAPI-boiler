const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
    mealName: {
        type: mongoose.Schema.Types.ObjecctId,
        required: true,
        ref: 'User'
    },
    mealType: [{
        type: String,
        required: true
    }],
    mealDescription: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Note', noteSchema);