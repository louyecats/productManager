import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ProductForm = (props) => {
    const {product, setProduct} = props;
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/', {
            title,    //shortcut syntax for title: title,
            price,      //shortcut syntax for price: price
            description //shortcut syntax for description: description
        })
            .then(res => {
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                //update the lifted state of our product array to include the current value in state plus the single object created and returned from our post request
                //so any time a new product is added, the setter will update the value in state to include the response from our controllers created logic & the response to client is the newly created document of all objects
                setProduct([...product, res.data]);
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="row">
            <form className="col-md-6 offset-3 bg-light rounded p-2" onSubmit={onSubmitHandler}>
            <h2>New Item:</h2>
                <div className="form-group">
                    <label htmlFor="title">Title:</label><br/>
                    {/* When the user types in this input, our onChange synthetic event 
                        runs this arrow function, setting that event's target's (input) 
                        value (what's typed into the input) to our updated state   */}
                    <input type="text" name="title" id="title" className="form-control" onChange = {(e)=>setTitle(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price:</label><br/>
                    <input type="number" name="price" id="price" className="form-control" onChange = {(e)=>setPrice(e.target.value)}/>
                </div>
                <div className="form-group">
                        <label htmlFor="description">Description:</label><br/>
                        <input type="text" name="description" id="description" className="form-control" onChange = {(e)=>setDescription(e.target.value)}/>
                </div>
                <div className="button btn btn-dark mt-3">Add Item</div>
            </form>
        </div>
    )
}

export default ProductForm;