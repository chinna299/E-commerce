import React from "react";
import { SliderData } from "../dataFile/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Curosel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="flex flex-col items-center justify-center px-4 mt-[80px] mb-8">
            <div className="w-[95%]">
                <Slider {...settings}>
                    {SliderData.map((d) => (    
                        <div key={d.id}>
                            <div className="flex w-full flex-row bg-white rounded-xl ml-[80px] overflow-hidden my-6 min-h-[620px]">
                                {/* Left Content */}
                                <div className="w-2/5 flex flex-col justify-center p-6">
                                    <div>
                                        <h3 className="text-6xl font-bold text-gray-700 mb-4">{d.title}</h3>
                                        <p className="text-lg text-gray-600 leading-relaxed mt-[40px]">{d.desc}</p>
                                        <button className="mt-10 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition duration-300">
                                            Visit Collections
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image - with shift */}
                                <div className="w-3/5 ml-[30px] h-full mt-[40px] ml-[50px] pl-10">
                                    <img
                                        src={d.img}
                                        alt={d.title}
                                        className="h-full object-cover rounded-r-xl my-6"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};


export default Curosel;
