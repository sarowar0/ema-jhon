import React, { useState } from 'react';
import { useEffect } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems'

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        const newCart = cart.filter( pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product
        })
        setCart(cartProduct)
    }, [])
    return (
        <div className='shopAndReviewContainer'>
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItems 
                        removeProduct={removeProduct}
                        product={pd} 
                        key={pd.key}
                        ></ReviewItems>)
                }
            </div>
            <div className="cart-container">
                <Cart 
               
                cart={cart} 
                showPlaceOrder ={true}
                ></Cart>
            </div>
        </div>
    );
};

export default Review;