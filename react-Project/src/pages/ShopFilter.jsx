import React, { useContext, useState } from "react";
import backgroundImage from "../Images/table.jpg";
import { globalContext } from "../context/MyContext";
import { products } from "../dataFile/products";
import { IoSearch } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit-Store/ProductSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ShopFilter() {
    const { data } = useContext(globalContext);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState("default");
    const [searchQuery, setSearchQuery] = useState("");

    // Use products from either context or imported file
    const product = data?.length > 0 ? data : products;

    // Improved filtering logic
    const filteredProducts = product.filter(item => {
        const categoryMatches = selectedCategory === "default" || item.category.toLowerCase() === selectedCategory.toLowerCase();
        const searchMatches = searchQuery.trim() === "" ||
            item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatches && searchMatches;
    });

    const getStars = (rating) => {
        const fullStars = Math.floor(rating);
        return "⭐".repeat(fullStars) + (rating % 1 !== 0 ? "⭐" : "");
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

    return (
        <div>
            {/* Background Banner */}
            <div className="relative w-full h-[140px] bg-cover bg-center shadow-lg mt-[70px]" style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "left" }}>
                <div className="absolute inset-0 bg-opacity-20"></div>
                <h1 className="absolute inset-0 flex items-center justify-center shadow-lg text-6xl font-bold text-gray-600 z-10">
                    {selectedCategory === "default" ? "Shop Products" : selectedCategory}
                </h1>
            </div>

            {/* Filter & Search Inputs */}
            <div className="flex mx-5 py-6 my-2">
                <div className="relative w-[500px]">
                    <div className="flex justify-between items-center border border-gray-500 rounded-lg bg-gray-700 text-white font-bold shadow-md focus-within:ring-2 focus-within:ring-blue-500 hover:border-blue-300 cursor-pointer px-4 py-3 transition duration-300">
                        <span className="whitespace-nowrap text-lg">Filtered by Category</span>
                        <span className="border-l-2 border-gray-400 h-6 mx-4"></span>
                        <select className="w-[250px] bg-white text-gray-700 font-medium py-2 px-3 rounded-md cursor-pointer focus:outline-none" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="default">All</option>
                            <option value="sofa">Sofa</option>
                            <option value="chair">Chairs</option>
                            <option value="watch">Watch</option>
                            <option value="mobile">Mobile</option>
                            <option value="wireless">Wireless</option>
                        </select>
                    </div>
                </div>
                <div className="relative w-[700px] mt-[10px] mx-[150px]">
                    <input type="text" placeholder="Search..." onChange={(e) => setSearchQuery(e.target.value)} className="w-full border border-gray-300 rounded-2xl px-4 h-[50px] focus:outline-none shadow-md pr-12" />
                    <IoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
                </div>
            </div>
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {filteredProducts.length === 0 && (
                    <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center text-gray-500 text-xl font-semibold py-10 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
                        🚫 No products found. Try a different search or category!
                    </div>
                )}

                {filteredProducts.map((item, index) => {
                    const isLastCardCentered = filteredProducts.length % 3 === 1 && index === filteredProducts.length - 1;

                    return (
                        <div key={item.id} className={`relative bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 group ${isLastCardCentered ? "col-span-3 mx-auto" : ""}`}>
                            <span className="absolute top-3 right-3 text-gray-500 transition duration-300 cursor-pointer opacity-0 group-hover:opacity-100">
                                <FaHeart size={24} className="hover:text-red-500" />
                            </span>

                            <Link to={`/product/${item.id}`}>
                                <img src={item.imgUrl} alt={item.productName} className="w-full h-78 object-contain rounded-md" />
                            </Link>

                            <div className="p-4 space-y-2">
                                <h2 className="text-lg font-semibold">{item.productName}</h2>
                                <p className="text-yellow-500">{getStars(item.avgRating)}</p>
                                <p className="text-red-500 font-bold text-lg">${item.price}</p>
                            </div>

                            <button onClick={() => handleAddToCart(item)} className="absolute bottom-9 right-4 cursor-pointer bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-blue-700">
                                +
                            </button>
                        </div>
                    );
                })}
            </div>
            <ToastContainer />
        </div>
    );
}
