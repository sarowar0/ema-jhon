import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import './ProductDetails.css'
const ProductDetails = () => {
    const { productKey } = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    console.log(product);
    const { name, img, features, price, seller, category, stock } = product;
    return (
        <div className='product-details'>
            <img src={img} alt="" />
            <div className='product-details-content ml-4'>
                <h5>{name}</h5>
                <p><strong>${price}</strong></p>
                <p><small>Sold by : {seller}</small></p>
                <p>Category: {category}</p>
                <p>Total stock in available {stock}</p>
                <h6 className='border-bottom'>Feature</h6>
                {
                    features.map(feature => <li>{feature.description} : <strong>{feature.value}</strong></li>)
                }
            </div>
        </div>
    );
};

export default ProductDetails;