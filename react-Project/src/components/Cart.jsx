import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../ReduxToolKit-Store/ProductSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Cart() {
  const cartProducts = useSelector(state => state.cartItems.cart);
  const totalItems = useSelector(state => state.cartItems.cartQuantity);
  const dispatch = useDispatch();
  const totalPrice = cartProducts.reduce((total, item) => total + item.price * item.quantity, 0);

  // If cart is empty, show a message and a button to go back to home
  return (
    <div className="p-6 max-w-6xl mx-auto mt-[100px]">
      {cartProducts.length === 0 ? (
        <div className="text-center">
          {/* Header */}
          <h2 className="text-3xl font-bold mb-4">Your Cart (0)</h2>

          {/* Back to Home Button */}
          <Link to="/" className="bg-blue-800 text-white px-4 py-2 mt-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
            Back to Home
          </Link>
   
          {/* Empty Cart Message */}
          <div className="mt-6 p-6 border border-gray-300 shadow-xl hover:shadow-2xl rounded-md">
            <h3 className="text-lg font-semibold text-gray-600">Your Cart is Empty</h3>
            <p className="text-gray-500">Please add items to your cart.</p>
            {/* Continue Shopping Button */}
            <Link to="/shopFilter" className="mt-3 inline-block bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition duration-300">
               Continue Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="col-span-2 space-y-6">
            {cartProducts.map((item) => (
              <div key={item.id} className="relative flex items-center bg-white shadow-lg p-6 border border-gray-200 rounded-lg">
                {/* Remove Item - "X" Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition duration-300"
                >
                  <FaTimes size={20} />
                </button>

                {/* Product Image */}
                <img src={item.imgUrl} alt={item.productName} className="w-48 h-48 object-contain rounded-md" />

                {/* Product Info */}
                <div className="flex-1 ml-8">
                  <h2 className="text-lg font-semibold py-7">{item.productName}</h2>
                  <div className="flex items-center justify-between w-[160px]">
                    <p className="text-gray-600 text-sm font-medium">
                      ${item.price.toFixed(2)} × {item.quantity}
                    </p>
                    <p className="text-lg font-semibold text-black-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-4 ml-4 mt-[80px]">
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}
                    className="text-black font-extrabold text-lg px-5 py-3 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-300 transition duration-300"
                  >
                    −
                  </button>
                  <span className="text-black font-semibold text-lg">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}
                    className="text-black font-extrabold text-lg px-5 py-3 border border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-300 transition duration-300"
                  >
                    +
                  </button>
                </div>
                
              </div>
            ))}
          </div>

          {/* Right Column - Cart Summary */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg space-y-4 h-fit">
            <h2 className="text-xl font-bold mb-3 text-center">Cart Summary</h2>
            <hr className="border-gray-300 mb-4" />
            <p className="text-md font-semibold">Total Items: {totalItems}</p>
            <p className="text-2xl font-bold text-red-400">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
// Cart component that displays the cart items, allows quantity updates, and shows total price
// It also handles empty cart state with a message and a button to continue shopping
