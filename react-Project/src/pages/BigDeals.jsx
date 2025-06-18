import React from 'react';
import { useContext } from 'react';
import { globalContext } from '../context/MyContext';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxToolKit-Store/ProductSlice'; // Ensure correct import
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

export default function BigDeals() {
    const { data } = useContext(globalContext);
    const dispatch = useDispatch();

    const bigDeals = data.filter(item => item.category === 'sofa' || item.category === 'chairs');

    const getStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0 ? "⭐" : "";
        return "⭐".repeat(fullStars) + halfStar;
    };

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.productName} added to cart!`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: "light",
        });
    };

    // Render the component
    if (bigDeals.length === 0) {
        return <p className="text-center text-xl font-semibold">No big deals available at the moment.</p>;
    }
    return (
        <div className="p-6">
            <div className="col-span-full mt-3 mb-6">
                <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 p-4 rounded-lg">
                    Best Sales
                </h1>
            </div>

            {/* Grid layout for 3 cards per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {bigDeals.map((item) => (
                    <div
                        key={item.id}
                        className="relative bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 group"
                    >
                        {/* Heart Icon (Visible Only on Hover) */}
                        <span className="absolute top-3 right-3 text-gray-500 transition duration-300 cursor-pointer opacity-0 group-hover:opacity-100">
                            <FaHeart size={24} className="hover:text-red-500" />
                        </span>

                        {/* ✅ Clickable Image Navigates to `/product/:id` */}
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
                            <p className="text-red-500 font-bold text-lg">${item.price}</p>
                        </div>
                        <button
                            onClick={() => handleAddToCart(item)}
                            className="absolute bottom-9 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer text-lg font-bold hover:bg-blue-700"
                        >
                            +
                        </button>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    );
}
