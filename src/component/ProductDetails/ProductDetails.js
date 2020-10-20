import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import DetailsItem from '../DetailsItem/DetailsItem';


const ProductDetails = () => {
    const {productKey} = useParams();
    const product = fakeData.find(pd => pd.key === productKey);
    return (
        <div>
            <DetailsItem product={product}></DetailsItem>
        </div>
    );
};

export default ProductDetails;