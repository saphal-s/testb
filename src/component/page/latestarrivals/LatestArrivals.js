import React from 'react';
import Slider from "react-slick";
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons';
import '../bestseller/bestSellers.css'

const LatestArrivals = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1124,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="mt-md-4 mb-md-4 pb-4" style={{ width: '85%', margin: 'auto',justifyContent:'center' }}>
            <div className="bestsellers-head  text-center">
                <h3>LatestArrivls</h3>
            </div>
            <div className="bestsellers-product">
                <Slider {...settings} style={{justifyContent:'center',textAlign:"center"}}>
                    <div className="cards">
                        <img src="./image/latest/latest1.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/latest/latest2.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/latest/latest3.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/latest/latest4.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/latest/latest5.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/bestsellers/best1.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/bestsellers/best7.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        <img src="./image/bestsellers/best5.jpg"className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">plam prodduct</h5>
                            <p className="price">Rs.1000</p>
                            <div className="cart-wishlist">
                                <div className="add-to-wishlist">
                                    <HeartOutlined id="heart"/>
                                </div>
                                <div className="add-to-cart">
                                    Add to Bag <ShoppingOutlined id="shopcart"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default LatestArrivals
