import React from 'react';
import './DetailsItem.css'
const DetailsItem = (props) => {
    const { img, name, price, stock, features } = props.product;
    console.log(features);
    return (
        <div className='details-item'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details-content">
                <h5>{name}</h5>
                <p><strong>Price : ${price}</strong></p>
                <p>Total available items {stock}</p>
                <h5 className='border-bottom'>Features</h5>
                {
                    features.map(feature => <li>{feature.description}: <strong>{feature.value}</strong></li>)
                }
            </div>
        </div>
    );
};

export default DetailsItem;