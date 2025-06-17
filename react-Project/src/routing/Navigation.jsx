import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from "../pages/Home";
import Cart from '../components/Cart';
import SingleProduct from '../pages/SingleProduct';
import ShopFilter from '../pages/ShopFilter';

export default function Navigation() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shopFilter" element={<ShopFilter/>} />
                <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} /> 
            </Routes>
    );
}
