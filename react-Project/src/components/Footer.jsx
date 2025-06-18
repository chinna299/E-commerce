import React from 'react';
import { IoBagHandle } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
            <div className="max-w-screen-xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Column: Logo + Description + Socials */}
                    <div>
                        <div className="flex items-center text-teal-400 justify-center lg:justify-start">
                            <IoBagHandle className="h-12 w-12" />
                            <span className="ml-2 text-4xl font-bold tracking-wide">MART</span>
                        </div>

                        <p className="mt-4 max-w-md text-center lg:text-left text-gray-400">
                           Your one-stop shop for all your needs. Whether you're looking for the latest gadgets, Sofas, or home essentials, we've got you covered. Enjoy a seamless shopping experience with us!
                        </p>

                        {/* Social Icons */}
                        <div className="mt-8 flex justify-center lg:justify-start gap-6">
                            <a href="#" className="hover:text-teal-400">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" className="hover:text-teal-400">
                                <FaInstagram size={24} />
                            </a>
                            <a href="#" className="hover:text-teal-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="hover:text-teal-400">
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: 3 List Sections */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* About Us */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-teal-400">Company History</a></li>
                                <li><a href="#" className="hover:text-teal-400">Meet the Team</a></li>
                                <li><a href="#" className="hover:text-teal-400">Employee Handbook</a></li>
                                <li><a href="#" className="hover:text-teal-400">Careers</a></li>
                            </ul>
                        </div>

                        {/* Customer Care */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-teal-400">Help Center</a></li>
                                <li><a href="#" className="hover:text-teal-400">How to Buy</a></li>
                                <li><a href="#" className="hover:text-teal-400">Track Your Order</a></li>
                                <li><a href="#" className="hover:text-teal-400">Corporate Buying</a></li>
                                <li><a href="#" className="hover:text-teal-400">Returns & Refunds</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                            <ul className="space-y-4 text-sm">
                                <li>Email: <span className="text-teal-400">ganeshdevarakonda48@gmail.com</span></li>
                                <li>Phone: <span className="text-teal-400">8660481359</span></li>
                                <li>Address:
                                    <p className="text-teal-400">marthalli,Banglore</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm flex flex-col gap-2 sm:flex-row sm:justify-between">
                    <p>&copy; 2025 MART. All rights reserved.</p>
                    <p>
                        <a href="#" className="text-teal-400 hover:underline">Terms & Conditions</a> ·{' '}
                        <a href="#" className="text-teal-400 hover:underline">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
