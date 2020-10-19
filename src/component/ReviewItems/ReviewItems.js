import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
    console.log(props);
    const { name, seller, price, quantity } = props.product;
    return (
        <div className="reviewItem">
            <h6>{name}</h6>
            <div className="reviewContent">
                <div className="content">
                    <p><strong>Price: ${price}</strong></p>
                    <p><small>By : {seller}</small></p>
                    <p>Quantity : {quantity}</p>
                    <button>Remove</button>
                </div>
                <div className="shipping">
                    <h6><small>Shipping option</small></h6>
                    <input type="radio" name="" id=""/>
                    <level>8-10 Business days</level><br/>
                    <input type="radio" name="" id=""/>
                    <level>5-7 Business days</level><br/>
                    <input type="radio" name="" id=""/>
                    <level>2-4 Business days</level>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;