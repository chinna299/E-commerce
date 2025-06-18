import React from 'react'
import { globalContext } from '../context/MyContext';
import { useContext } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../ReduxToolKit-Store/ProductSlice'; 
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';

export default function NewArrivals() {
    const { data } = useContext(globalContext);
    const dispatch = useDispatch();

    const arrivals = data.filter(item => item.category === 'mobile' || item.category ==='wireless');
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
    if (arrivals.length === 0) {
        return <p className="text-center text-xl font-semibold">No new arrivals available at the moment.</p>;
    }
   

  return (

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                <div className="col-span-full mt-3">
              <h1 className="text-4xl font-semibold text-center bg-white/30 backdrop-blur-md text-black shadow-md p-4 rounded-lg border border-gray-300">
                  🛍️ New Arrivals 🛍️
              </h1>


                </div>
                {arrivals.map((item) => {
                    const isLastCardCenterd = arrivals.length % 3 === 1 && item === arrivals[arrivals.length - 1];
    
                    return (

                        <div    
                            key={item.id}
                            className={`relative bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 group ${isLastCardCenterd ? "md:col-start-2" : ""}`}
                        >
                            {/* Heart Icon (Visible Only on Hover) */}
                            <span className="absolute top-3 right-3 text-gray-500 transition duration-300 cursor-pointer opacity-0 group-hover:opacity-100">
                                <FaHeart size={24} className="hover:text-red-500" />
                            </span>
    
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
                                    ${(item.price)}
                                </p>
                            </div>
    
                            {/* Increment Button */}
                            <button
                                onClick={() => handleAddToCart(item)}
                                className="absolute bottom-9  cursor-pointer right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-blue-700"
                            >
                                +
                            </button>
                        </div>
                    );
                })}
            </div>
  )
}
