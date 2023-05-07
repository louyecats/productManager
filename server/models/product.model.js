const mongoose = require('mongoose'); //must require Mongoose anywhere use

//creating our Customer Relationship Management (CRM) software by making a new model named Product
const ProductSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"],
        maxlength: [255, "Title cannot be more than 255 characters"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least $1"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Description must be at least 5 characters"],
        maxlength: [255, "Description cannot be more than 255 characters"]
    }
}, { timestamps: true });

//blueprint created, now goes into mongoose.model - & creates collection with the name of 'Product'
module.exports = mongoose.model('Product', ProductSchema);