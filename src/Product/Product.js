import React from 'react';
import './Product.css';


const Product = (props) => {

    const {img, name,seller,price,stock} = props.product;

    return (
        <div className="product">
                            <div>
                                <img src={img} alt="" srcset=""/>
                            </div>
           <div>
                            <h4 className="product-name">{name}</h4><br/>
                            <p><small>By : {seller}</small></p>
                            <p>${price}</p>
                            <p><small>Only {stock} left in stock order soon</small></p>
                            <button className="main-button" onClick={()=>props.handleProduct(props.product)}>Add to cart</button>
           </div>
        </div>
    );
};

export default Product;