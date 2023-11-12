// src/components/ProductList.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Product List</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>${product.price}</p>
            <button
              className="bg-blue-500 text-white p-2 mt-2"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <Link to="/checkout" className="block mt-5 text-blue-500">
        Go to Checkout
      </Link>
    </div>
  );
};

export default ProductList;
