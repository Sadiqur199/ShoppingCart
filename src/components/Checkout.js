// src/components/Checkout.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeFromCart = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Checkout</h1>
      <div className="grid grid-cols-3 gap-4">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4">
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>${item.price}</p>
            <button
              className="bg-red-500 text-white p-2 mt-2"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <p className="text-xl font-semibold">Total: ${totalAmount}</p>
        <Link to="/" className="block mt-3 text-blue-500">
          Go back to Product List
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
