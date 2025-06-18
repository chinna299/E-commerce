import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Header() {
  const cartCount = useSelector((state) => state.cartItems.cart.length);


  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md p-3 z-50">
      <div className="container flex items-center pl-[100px] pr-[20px]">

        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-black font-bold text-2xl">
            <IoBagHandle className="text-5xl" />
            <span className="text-3xl font-bold">MART</span>
          </Link>
        </div>
 
        
        <ul className="ml-auto flex gap-17 font-bold text-lg md:text-md lg:text-xl items-center">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/shopFilter">Shop</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
          <li><BiSolidUser /></li>
          <li>
            <Link to="/cart" className="relative">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="absolute top-[-5px] right-[-16px] bg-red-500 text-white rounded-full text-xs px-2">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}
