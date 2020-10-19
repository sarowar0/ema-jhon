import React from 'react';
import './ProductView.css'
const ProductView = (props) => {
    const { img, name, features, seller,price,stock } = props.product;
    console.log(features);

    return (
        <div className="productView">
            <img src={img} alt="" />
            <div>
                <h5>{name}</h5>
                <div className="feature">
                    <h5>Features</h5>
                    {
                        features.map(feature => <li>{feature.description}: <strong>{feature.value}</strong></li>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductView;