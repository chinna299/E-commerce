import React, { useContext } from "react";
import { globalContext } from "../context/MyContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit-Store/ProductSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DiscountProducts() {
    const { discountData } = useContext(globalContext);
    const dispatch = useDispatch();

    const getStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0 ? "⭐" : "";
        return "⭐".repeat(fullStars) + halfStar;
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));

        // Assign unique toast ID per product to prevent duplicates
        toast.success(`${item.productName} added to cart!`, {
            position: "top-right",
            autoClose: 1000, // Ensures toast disappears automatically
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        });
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            <div className="col-span-full mt-3">
                <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-red-500 to-yellow-500 text-white shadow-lg shadow-red-500/50 p-4 rounded-lg">
                    🏷️ Discount Products 🏷️
                </h1>
            </div>

            {discountData.map((item) => (
                <div
                    key={item.id}
                    className="relative bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 group"
                >
                    {/* Heart Icon (Visible Only on Hover) */}
                    <span className="absolute top-3 right-3 text-gray-500 transition duration-300 cursor-pointer opacity-0 group-hover:opacity-100">
                        <FaHeart size={24} className="hover:text-red-500" />
                    </span>

                    {/* Discount Label */}
                    <p className="w-fit bg-blue-800 text-white text-sm px-3 py-1 rounded-full font-medium">
                        {item.discount}%
                    </p>

                    <Link to={`/product/${item.id}`}>
                        <img
                            src={item.imgUrl}
                            alt={item.productName}
                            className="w-full h-78 object-contain rounded-md"
                        />
                    </Link>
                    <div className="p-4 space-y-2">
                        <h2 className="text-lg font-semibold">{item.productName}</h2>
                        <p className="text-yellow-500">{getStars(item.avgRating)}</p>
                        <p className="text-red-500 font-bold text-lg">
                            ${(item.price - (item.price * item.discount) / 100).toFixed(2)}
                        </p>
                    </div>

                    {/* Increment Button */}
                    <button
                        onClick={() => handleAddToCart(item)}
                        className="absolute bottom-9 right-4 cursor-pointer bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-blue-700"
                    >
                        +
                    </button>
                </div>
            ))}

            {/* Toast Container to render notifications */}
            <ToastContainer />
        </div>
    );
}
// This component displays discount products with a heart icon, discount label, and an add-to-cart button.
// It uses React Context for data, Redux Toolkit for state management, and react-toastify for notifications.
