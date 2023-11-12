// src/components/ProductList.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const products = [
    {
      id: 1,
      name: "Cap",
      img: "https://i.ibb.co/PwmdPLc/6f675e41e2a679c1ae4a427ffac6d5f0-removebg-preview.png",
      price: 10,
    },
    {
      id: 2,
      name: "Bike",
      img: "https://i.ibb.co/vqc4bPh/01-removebg-preview.png",
      price: 20,
    },
    {
      id: 3,
      name: "T-shirt",
      img: "https://i.ibb.co/5RmGFdP/mens-collar-polo-plain-t-shirt-removebg-preview.png",
      price: 30,
    },
  ];

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const cartItemCount = cartItems.length;


  return (
    <div className="container mx-auto mt-10">
      <div className="flex justify-between m-10">
        <h1 className="text-3xl font-bold mb-10">Our Product</h1>
        <Link to="/checkout" className=" btn btn-sm bg-blue-500 text-white hover:bg-blue-500">
        Go to Checkout {cartItemCount > 0 && <span className="ml-2">({cartItemCount})</span>}
      </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
        {products.map((product) => (
          <div className="card w-96 bg-base-100 shadow-xl"  key={product.id}>
              <img
                className="h-[250px] w-full" src={product.img} alt=""
              />
            <div className="card-body">
              <div className="md:flex ">
              <h2 className="card-title mb-5">{product.name}</h2>
              <p className="md:ml-[230px] mb-5">${product.price}</p>
              </div>
              <div className="card-actions">
                <button
                className="bg-blue-500 text-white w-full py-2 px-4 rounded-full"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
