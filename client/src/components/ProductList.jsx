import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'; //need this to create link to another element

const ProductList = (props) => {
    const {product,setProduct} = props;

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

    return (
        <div className="col-md-6 offset-3 bg-light rounded p-2">
            <h2>Current Items:</h2>
        {
            product.map((product, index) => {
            return <ul className="list-group mt-4" key={index}>
                {/* <li className="list-group-item h4 mb-0">{product.title}</li>
                <li className="list-group-item">Price: ${product.price}</li>
                <li className="list-group-item">{product.description}</li> */}
                {/* :id gets its value when clicking this element to assign the "id" param & take us to a path */}
                <Link to={`/${product._id}`}> {product.title} </Link>
                </ul>
            })
        }
        </div>
    )
}

export default ProductList;