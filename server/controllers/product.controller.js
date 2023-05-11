//importing our model file with require() & assign models exported logic to a variable
const Product = require('../models/product.model');

module.exports = {
    //CREATE
    createProduct: (request, response) => {
        // Mongoose's "create" method is run using our Product model to add a new product to our db's product collection
        Product.create(request.body) //This will use whatever the body of the client's request sends over
            .then(product => response.json(product))
            .catch(err => response.json(err));  
    },
    //READ ALL using Mongoose method find()
    getAllProducts: (request, response) => {
        Product.find({})
            .then(products => {
                console.log(products); //console logs are optional, but they are highly recommended for troubleshooting!
                response.json(products);
            })
            .catch(err => {
                console.log(err)
                response.json(err)
            });
    },

    //READ ONE - need a unique identifier
    getOneProduct: (request, response) => {
        // console.log(req)
        //within request body is a key called params and the value is going to be id (route /:id)
        //if it finds the matching product id in our Product collection, it responds w/it, else returns error
        Product.findById(request.params.id)
            .then(oneProduct => response.json(oneProduct))
            .catch(err => response.json(err));
    },

    //UPDATE - new:true is an options object used to set different functionality to indicate we want the returned document to contain the newly updated document vs default mongoose original
    updateProduct: (request, response) => {
        Product.findByIdAndUpdate(request.params.id, request.body, {new:true, runValidators:true})
            .then(updatedProduct => response.json(updatedProduct))
            .catch(err => response.json(err))
    },

    //DELETE we need access to the id of product to delete
    deleteProduct: (req,res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err));
    }
}