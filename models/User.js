const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    mealName: {
        type: String,
        required: true
    },
    mealType: {
        type: String,
        required: true
    },
    mealDescription: {
        type: String,
        required: true
    },
});