const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Restaurant name is required.'],
            minlength: [1, 'Restaurant name must be at least 1 character long.'],
        },
        cuisines: {
            type: String,
            required: [true, 'cuisines type is required.'],
            minlength: [1, 'cuisines type must be at least 1 character.'],
        },
        address: {
            type: String,
            required: [true, 'Restaurant address or general city is required.'],
            minlength: [3, 'Restaurant location must be at least 3 characters.'],
        },
        description: {
            type: String,
            required: [true, 'Restaurant description is required.'],
            minlength: [3, 'Restaurant Description must be at least 3 characters.'],
        },
        recommendation: {
            type: String,
            required: [false, 'Restaurant item recommendation is optional.'],
            minlength: [0, 'Restaurant  recommendation is Optional.'],
        },
        isFastFood: {
            type: Boolean,
            required: [true, 'Please Specify if the food is fast food or not.'],
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model('Food', FoodSchema);