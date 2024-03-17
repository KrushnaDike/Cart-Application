import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

// importing component
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotoalAmount] = useState(0);

  useEffect(() => {
    setTotoalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div >
      {cart.length > 0 ? (
        <div className="max-w-6xl flex  justify-between p-2 mx-auto space-y-10 min-h-[80vh]">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="mt-16 flex flex-col justify-between h-[70vh]">
            <div>
              <div className="text-green-600 font-bold text-md uppercase">
                Your Cart
              </div>
              <div className="text-green-600 font-bold uppercase text-3xl">
                Summary
              </div>
              <p className="mt-2">
                <span className="font-semibold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div>
              <p className="font-semibold">
                Total Amount:{" "}
                <span className="font-extrabold">${totalAmount}</span>
              </p>
              <button className="bg-green-600 w-[300px] p-2 rounded-md text-white font-bold mt-5">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center h-[100vh] m-auto font-bold">
          <h1>Cart Empty</h1>
          <NavLink to="/">
            <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in mt-2">
              Shop Now
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
