import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'; //need this to create link to another element

const ProductList = (props) => {
    const {removeFromDom, product, setProduct} = props;
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/")
    	.then((res)=>{
	    console.log(res.data);
            setProduct(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, []);

    //sending request to our API to delete product, also need to remove product from the DOM, so send removeFromDom method as a callback function to change products in state (logic on Main.js)
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="col-md-6 offset-3 bg-light rounded p-2">
            <h2>Current Items:</h2>
        {
            product.map((product, index) => {
            return <div key={index}>
                {/* <li className="list-group-item h4 mb-0">{product.title}</li>
                <li className="list-group-item">Price: ${product.price}</li>
                <li className="list-group-item">{product.description}</li> */}
                {/* :id gets its value when clicking this element to assign the "id" param & take us to a path */}
                <p className="fs-4 mt-4">
                    <Link to={`/${product._id}`} className="link-dark"> {product.title} </Link>
                </p>
                <p>
                    <Link to={"/edit/" + product._id}>Edit Product</Link>
                </p>  
                <button className="btn btn-dark mt-3" onClick={(e)=>{deleteProduct(product._id)}}>Delete Item</button>
                <p>___________________________________</p>

        </div>
            })
        }
        </div>
    )
}

export default ProductList;