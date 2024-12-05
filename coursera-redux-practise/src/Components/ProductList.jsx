import React, { useState } from 'react';
import './ProductList.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from './CartSlice';

const ProductList = () => {
    const dispatch = useDispatch();
    const [disabledProducts, setDisabledProducts] = useState([]); // State to store disabled products

    const products = [
        { id: 1, name: 'Product A', price: 60 },
        { id: 2, name: 'Product B', price: 75 },
        { id: 3, name: 'Product C', price: 30 },
    ];

    const handleAddToCart = product => {
        dispatch(addItemToCart(product));
        setDisabledProducts([...disabledProducts, product.id]); // Mark the product as disabled
      };

    return (
        <div className="product-list">
            <h2 className="product-list-title">Products</h2>
            <ul className="product-list-items">
                <div className='product-cards-container'>
                    {products.length > 0 && products.map((prod) =>
                        <div key={prod.id} className='product-card'>
                            <li>{prod.name} - ${prod.price}</li>
                            <button onClick={() => handleAddToCart(prod)} disabled={disabledProducts.includes(prod.id)}>Add to Cart</button>
                        </div>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default ProductList;
