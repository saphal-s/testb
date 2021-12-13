import React from 'react';
import './herosection.css'
import { Brandad } from './Brandad';
import Slider from "react-slick";

const HeroSection = () => {
    const settings = {
        loop:true,
        autoplay:true,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <>
            <div className="carousel">
                <Slider {...settings}>
                    <div>
                        <img src="./image/carousel0.webp" className="w-100" alt="" />
                    </div>
                    <div>
                        <img src="./image/carousel1.webp" className="w-100" alt="" />
                    </div>
                    <div>
                        <img src="./image/carousel2.jpg" className="w-100" alt="" />
                    </div>
                    <div>
                        <img src="./image/carousel3.jpg" className="w-100" alt="" />
                    </div>
                </Slider>
            </div>
            <Brandad />
        </>
    )
}

export default HeroSection
