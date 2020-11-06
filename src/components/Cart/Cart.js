import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = Math.round(cart.reduce((total,pd)=> total+pd.price,0));

    let shipping = 0;
    if (totalPrice>0){
        shipping = 4.99;
    }
    
    else
    {
        shipping = 0;
    }

     const tax = Math.round (totalPrice/15);
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Order  : {cart.length}</p>
            <p>Product Price  : {totalPrice}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax : {tax}</p>
            <p> Total price  : {totalPrice+shipping+tax}</p>
        </div>
    );
};

export default Cart;