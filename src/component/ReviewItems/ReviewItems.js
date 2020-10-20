import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
    const { name, seller, price, quantity,key} = props.product;
    return (
        <div className="container">
            <div className='review '>
                <h6 className='text-primary font-weight-normal'>{name}</h6>
                <div className="review-container d-flex justify-content-between">
                    <div className="cart-desc">
                        <p className='text-danger'><strong>$ {price}</strong></p>
                        <p><small>Sold by: {seller}</small></p>
                        <p>Quantity: {quantity}</p>
                        <button onClick={() => props.removeProduct(key)}>Remove</button>
                    </div>
                    <div className="shipping-option">
                        <h5 className='border-bottom'>Shipping option</h5>
                        <div>
                            <input type="radio" name="" id="" />
                            <span className='pl-2'>
                                <span className='font-weight-bold text-success'>8-10 Business days</span><br />
                                <span><small>$ free shipping</small></span>
                            </span>
                        </div>
                        <div>
                            <input type="radio" name="" id="" />
                            <span className='pl-2'>
                                <span className='font-weight-bold text-success'>4-7 Business days</span><br />
                                <span><small>$5 shipping</small></span>
                            </span>
                        </div>
                        <div>
                            <input type="radio" name="" id="" />
                            <span className='pl-2'>
                                <span className='font-weight-bold text-success'>2-4 Business days</span><br />
                                <span><small>$10 shipping</small></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;