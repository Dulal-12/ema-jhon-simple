import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {

   const myFirst10 = fakeData.slice(0,10);
   const [product, setProduct]  = useState(myFirst10);
   const  [cart,setCart] = useState([]);
   const handleProduct = (product)=>{
      const newCart = [...cart,product];
      setCart(newCart)
   }
  
    return (
       <div className="shop-container">
                        <div className="product-container">
                                   
                                        {product.map(product=><Product product={product} handleProduct={handleProduct} key={product.key}></Product>)}
                                  
                          </div>

                          <div className="cart-container">
                           
                              <Cart cart={cart}></Cart>
                            
                          </div>
        </div>
    );
};

export default Shop;