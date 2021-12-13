import React from 'react';
import './spotlight.css'

const Spotlightt = () => {
    return (
        <div className="pt-3 spotlight">
            <div className="spot-card row">
                <div className="col-md-6">
                    <img src="./image/trend/trend1.gif" className="w-100" alt="" />
                </div>
                <div className="col-md-6">
                    <img src="./image/trend/trend2.gif" className="w-100" alt="" />
                </div>
                <div className="col-md-6 mt-3">
                    <img src="./image/trend/trend3.jpg" className="w-100" alt="" />
                </div>
                <div className="col-md-6 mt-3">
                    <img src="./image/trend/trend4.gif" className="w-100" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Spotlightt
