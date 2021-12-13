import React from 'react';
import './featured.css'

const Featured = () => {
    return (
        <div className="pt-3 spotlight">
            <div className="featured-head  text-center">
                <h3>Featured Products</h3>
            </div>
            <div className="spot-card row">
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured1.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured3.gif" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured ">
                    <img src="./image/featured/featured4.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured5.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured6.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured7.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-3 mb-3 featured">
                    <img src="./image/featured/featured8.gif" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
