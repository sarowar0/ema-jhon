import React, { useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    const handlerCarBtn = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const counts = sameProduct.length;
        addToDatabaseCart(product.key, counts)
    };
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map( pd => <Product 
                        showAddToCart = {true}
                        product={pd} 
                        handlerCarBtn={handlerCarBtn} 
                        key= {pd.key}
                        ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;