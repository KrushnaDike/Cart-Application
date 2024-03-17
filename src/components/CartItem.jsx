import React from "react";

// importing icons
import { RiDeleteBin7Fill } from "react-icons/ri";

import { useDispatch } from "react-redux";
import cartSlice, { remove } from "../redux/Slices/cartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch(cartSlice);

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from cart");
  };

  return (
    <div>
      <div className="flex gap-10 border-b border-black py-8">
        <div className="h-[180px] ">
          <img className="h-full w-full" src={item.image} alt="cart product" />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-gray-700 font-semibold text-lg text-left mt-1">
            {item.title}
          </h1>
          <h1 className="w-40 text-gray-700 font-normal text-[10px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className="flex justify-between items-center">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div className="bg-red-200 flex items-center justify-center p-2 rounded-full w-10 h-10" onClick={removeFromCart}>
              <RiDeleteBin7Fill className="cursor-pointer text-xl border-box rounded-full text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
