import React from 'react'
import './service.css'

const Service = () => {
    return (
        <div>
            <div className="service-section mt-3">
                <div className="rowee text-center service">
                    <div className="service-item ">
                        <div className="service-icon">
                            <i className="fas fa-shuttle-van"></i>
                        </div>
                        <p>Free Shipping Above Rs.5000</p>
                    </div>
                    <div className=" service-item">
                        <div className="service-icon">
                            <i className="fas fa-redo"></i>
                        </div>
                        <p>Easy 7 Day Return</p>
                    </div>
                    <div className=" service-item">
                        <div className="service-icon">
                            <i className="fas fa-certificate"></i>
                        </div>
                        <p>100% Authenticate Products <br /> Sourced Directly</p>
                    </div>
                </div>
                <div className="beautyad mt-md-4 mt-3">
                    <img src="./image/beautyad.gif" className='w-100' alt="" />
                </div>
                <div className="beautyad mt-md-4 mt-3">
                    <img src="./image/brandads.jpg" className='w-100' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Service
