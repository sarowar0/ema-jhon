import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'
const Shop = () => {

    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const newCart = productKeys.map(key =>{
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(newCart)
    },[])
    // useEffect(() => {
    //     const savedCart = getDatabaseCart();
    //     const productKeys = Object.keys(savedCart);
    //     const cartProduct = productKeys.map(key => {
    //         const product = fakeData.find(pd => pd.key === key);
    //         product.quantity = savedCart[key];
    //         return product;
    //     })
    //     setCart(cartProduct)
    // }, [])

    const handlerCarBtn = (product) => {
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== product.key);
            newCart = [...others, sameProduct]
        } else {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        setCart(newCart)
        addToDatabaseCart(product.key, count);
    };
    return (
        <div className='shopAndReviewContainer'>
            <div className='product-container'>
                {
                    products.map(pd => <Product
                        showAddToCart={true}
                        product={pd}
                        handlerCarBtn={handlerCarBtn}
                        key={pd.key}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to="/review"><button>Review order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;