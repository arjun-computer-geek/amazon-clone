import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
// import data from './../data';

function HomeScreen(props) {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const responce = await fetch('http://localhost:8000/api/products');
            const data = responce.json();
            setProduct(data);
        }
    });

    return( <ul className="products">
    {
        products.map(product =>
            <li>
            <div className="product">
                <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />
                </Link>
                <div className="product-name">
                <Link to={'/product/' + product._id}>{product.name}</Link> 
                </div>
                <div className="product-brand">{product.brand}</div>
                <div className="product-price"> &#8377;{product.price}</div>
                <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
            </div>
            </li>
        )
    }
</ul> );
}

export default HomeScreen;