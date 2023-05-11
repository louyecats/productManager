import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    //imported useNavigate hook at top, set it to a variable and call on it below to return user to main component Main.js
    
    // request server to get current values for product with id equal to one in URL, when request resolves, set our state to the response values so we can fill in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [])

    //defined update method that sends a PATCH request to update the instance in database
    const updateProduct = (e) => {
        e.preventDefault();
        axios.patch('http://localhost:8000/edit/' + id, {
            title,    // this is shortcut syntax for title: title,
            price,      // this is shortcut syntax for price: price
            description      // this is shortcut syntax for description: description 
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Bakery Item</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description:</label><br />
                    <input type="text" 
                    name="description" 
                    value={description} 
                    onChange={(e) => { setTitle(e.target.description) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;


