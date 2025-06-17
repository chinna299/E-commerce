import React from 'react';
import { FaShippingFast, FaCreditCard, FaShieldAlt, FaHeadset } from 'react-icons/fa';

export default function ServiceProducts() {
    const serviceData = [
        {
            icon: <FaShippingFast />,
            title: 'Free Shipping',
            subtitle: 'Lorem ipsum dolor sit amet.',
            bg: '#fdefe6',
        },
        {
            icon: <FaCreditCard />,
            title: 'Safe Payment',
            subtitle: 'Lorem ipsum dolor sit amet.',
            bg: '#ceebe9',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Secure Payment',
            subtitle: 'Lorem ipsum dolor sit amet.',
            bg: '#e2f2b2',
        },
        {
            icon: <FaHeadset />,
            title: 'Back Guarantee',
            subtitle: 'Lorem ipsum dolor sit amet.',
            bg: '#d6e5fb',
        },
    ];

    return (
        <div className="service-products flex flex-wrap justify-center items-center gap-14 p-6 bg-gray-100">
            {serviceData.map((item, index) => (
                <div
                    key={index}
                    className="w-76 h-56 p-8 rounded-xl cursor-pointer shadow-lg flex flex-col items-center text-center hover:shadow-xl transform hover:scale-105 transition duration-300"
                    style={{ backgroundColor: item.bg }}
                >
                    <div className="icon text-4xl mb-4 text-gray-700">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.subtitle}</p>
                </div>
            ))}
        </div>
    );
}
