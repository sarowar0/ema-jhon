import React from 'react';
import placeOrder from '../../images/giphy.gif';
import './PlaceOrder.css'
const PlaceOrder = () => {
    return (
        <div className='place-order'>
            <img src={placeOrder} alt=""/>
        </div>
    );
};

export default PlaceOrder;