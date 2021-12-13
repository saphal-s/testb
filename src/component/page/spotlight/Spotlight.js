import React from 'react';
import './spotlight.css'

const Spotlight = () => {
    return (
        <div className="pt-3 spotlight">
            <div className="spot-card row">
                <div className="col-md-6">
                    <img src="./image/bestmuni2.jpg" className="w-100" alt="" />
                    <div className="spot-card-button">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src="./image/bestsellermuni3.jpg" className="w-100" alt="" />
                    <div className="spot-card-button w-100">
                        <p className="spot-cart-title">On Rs.3000:2 Gifts</p>
                        <p className="spot-cart-des">On All Orders: Foundation</p>
                    </div>
                </div>
                <div className="col-md-6 mt-3">
                    <img src="./image/spot2.gif" className="w-100" alt="" />
                </div>
                <div className="col-md-6 mt-3">
                    <img src="./image/spotad.gif" className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Spotlight
