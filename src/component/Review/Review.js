import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Review.css'
const Review = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            return product
        })
        setCart(cartProducts)
    },[]);
    console.log(cart);
    return (
        <div className="review">
            {
                cart.map(pd => <ReviewItems product={pd}></ReviewItems>)
            }
        </div>
    );
};

export default Review;