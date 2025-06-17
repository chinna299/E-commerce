import React, { useState, useContext, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { globalContext } from "../context/MyContext";
import { FaHeart } from "react-icons/fa";
import backgroundImage from "../Images/table.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "../ReduxToolKit-Store/ProductSlice";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

export default function SingleProduct() {
  const { id } = useParams();
  const { data } = useContext(globalContext);
  const [activeTab, setActiveTab] = useState("description");
  const [reviewText, setReviewText] = useState("");
  const dispatch = useDispatch();

  // Ensure data is loaded
  if (!data) return <p>Loading products...</p>;

  // Find the product safely
  const product = useMemo(() => {
    return data.find((item) => item.id.toString() === id) || {};
  }, [data, id]);

  // Prevent errors when accessing undefined properties
  if (!product.productName) return null;

  // Memoized related products
  const relatedProducts = useMemo(() => {
    return data.filter(
      (item) => item.category === product.category && item.id.toString() !== id
    );
  }, [data, id]);

  const getStars = (rating) => "⭐".repeat(Math.floor(rating)) + (rating % 1 !== 0 ? "⭐" : "");

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
      <div
        className="relative w-full h-[140px] bg-cover bg-center shadow-lg mt-[70px]"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: "left" }}
      >
        <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-gray-600 z-10">
          {product.productName}
        </h1>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-8 py-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-start">
            <img
              src={product.imgUrl}
              alt={product.productName}
              className="w-full max-w-lg h-auto rounded-xl shadow-xl transition-transform hover:scale-110"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-800">{product.productName}</h1>
            <p className="text-yellow-500 text-xl">
              {getStars(product.avgRating)} ({product.avgRating}) Ratings
            </p>
            <p className="text-red-600 font-bold text-3xl">${product.price}</p>
            <p className="text-gray-500 text-xl">Category: {product.category}</p>
            <p className="text-gray-700 text-lg">{product.description?.slice(0, 70)}...</p>

            <div className="space-y-4 flex flex-col">
              <input
                type="number"
                min="1"
                defaultValue="1"
                max={product.stock}
                className="w-20 text-lg border border-gray-300 shadow-xl text-center rounded-lg px-3 py-2"
              />
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-blue-900 w-fit text-white cursor-pointer font-bold px-6 py-2 mt-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-12 flex gap-6">
          <button
            className={`px-4 py-2 text-lg font-semibold ${activeTab === "description" ? "border-b-2 border-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 text-lg font-semibold ${activeTab === "reviews" ? "border-b-2 border-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="mt-8">
          {activeTab === "description" ? (
            <p>{product.description}</p>
          ) : (
            <div>
              <h2 className="text-2xl font-bold">Reviews</h2>
              <textarea
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-3 py-2"
              />
            </div>
          )}
        </div>

        {/* Related Products */}
        <h2 className="text-3xl font-bold mt-12">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="relative bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300 group"
            >
              <span className="absolute top-3 right-3 text-gray-500 cursor-pointer opacity-0 group-hover:opacity-100">
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
                <p className="text-red-500 font-bold text-lg">${item.price}</p>
              </div>
              <button
                onClick={() => handleAddToCart(item)}
                className="absolute bottom-9 right-4 bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold hover:bg-blue-700"
              >
                +
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
