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
            <div className="mt-5 flex justify-between m-8">
            <Link to="/" className="btn btn-sm  bg-blue-500 text-white hover:bg-blue-500">
          Go back to Product List
        </Link>
        <p className="text-xl font-semibold">Total: ${totalAmount}</p>

      </div>
      <div className="grid grid-cols-3 gap-4 m-10">
        {cartItems.map((item) => (
          <div key={item.id} className="border p-4">
             <div className='flex justify-between'>
             <div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p>${item.price}</p>
            </div>
            <img className='h-14 rounded-full border border-gray-200' src={item.img} alt="" />
             </div>
            <button
              className="bg-red-500 text-white p-2 mt-2"
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Checkout;
