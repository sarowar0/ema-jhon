import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import happyShop from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';
const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder, setPlaceOrder] = useState(false);
    let history = useHistory()

    const handleProceedCheckout = () => {
        history.push('/shipment')
    }
    const removeProduct = (productKey) => {
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProduct = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProduct)
    }, [])

  const message = placeOrder && <img src={happyShop} alt=""/>
    return (
        <div className='shopAndReviewContainer'>
            <div className="product-container">
                {
                    cart.map(cart =>
                        <ReviewItems
                            removeProduct={removeProduct}
                            cart={cart}
                            key={cart.key}
                        ></ReviewItems>)
                }
                 {
                     message
                 }
            </div>
                <div className="cart-container">
                    <Cart cart={cart}>
                        <button onClick={handleProceedCheckout} className="cart-button">Procced checkout</button>
                    </Cart>
                </div>
        </div>
    );
};

export default Review;