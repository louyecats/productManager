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
}