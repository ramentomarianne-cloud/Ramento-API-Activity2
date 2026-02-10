const mongoose = require('mongoose');
const dishSchema = new mongoose.Schema({
    name: { type: String, 
        required: true,
        unique: true,
        min: [0, 'Price cannot be negative'],
        max: [1000, 'Price cannot exceed 1000'],
     },
    price: { type: Number, 
        required: true 
    },
    category: { type: String,
        enum:['Starter', 'Main', 'Dessert', 'Drinks'],
        required: true
    },
    isVegetarian: { 
        type: Boolean,
        default: false,
    },
    reviews: [
        {
            user: {String,
            ratings: {type: Number, min: 1, max:5},
            comment: String,}
        }
    ],
    chef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chef',
    },
});

module.exports = mongoose.model('Dish', dishSchema);
