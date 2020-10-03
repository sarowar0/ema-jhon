import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-content'>
                <h6 className='product-name'>{name}</h6>
                <p><small>By {seller}</small></p>
                <p className='font-weight-bold'>${price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button onClick={() => props.handlerCarBtn(props.product)} className='addCartBtn'>
                    <i class="fa fa-shopping-cart pr-2"></i>
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;