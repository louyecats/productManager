const express = require('express');
const cors = require('cors') //require cors cross origin requests
const app = express();
app.use(cors()) //must be after const app
app.use(express.json()); /* allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true })); /*allows JSON Objects with strings and arrays*/

require('./config/mongoose.config'); //import mongoose config file so it will fire up the MongoDB server connection and routes file so we can handle requests

require('./routes/product.routes')(app); // Importing the routes export
const port = 8000;

app.listen(port, () => console.log(`Listening on port: ${port}`) );