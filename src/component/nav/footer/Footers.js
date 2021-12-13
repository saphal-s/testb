import React from 'react';
import './footer.css'

const Footers = () => {
    return (
        <div className="footer  mt-5 ">
            <div className="row footers rows">
                <div className="col-md-6">
                    <h4><span>Payment Methods</span></h4>
                    <div className="methods mt-3 mb-3">
                        <img src="./image/paypal.png" alt="paypal payment" className='me-3' />
                        <img src="./image/esewa.png" alt="e-sewa payment" className='me-3' />
                        <img src="./image/khalti.png" alt="khalti payment" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="float-end connects">
                        <h4><span>Connect</span></h4>
                        <div className="connect">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row footers mt-3">
                <div className="col-md-3">
                    <h4><span>Customer Service</span></h4>
                    <div className="customer-service-list">
                        <ul>
                            <li>Contact Us</li>
                            <li>Help Center/FAQs</li>
                            <li>Shipping</li>
                            <li>Returns</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4><span>About Bellezza Ceation</span></h4>
                    <div className="customer-service-list">
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Glossary</li>
                            <li>People and</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4><span>Policy Info</span></h4>
                    <div className="policy-info-list">
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>Return & Cancellation Policy</li>
                            <li>People and </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-3">
                    <h4><span>Quick Links</span></h4>
                    <div className="quick-links-list">
                        <ul>
                            <li>Make Up</li>
                            <li>Skin</li>
                            <li>Hair</li>
                            <li>Personal Care</li>
                            <li>Health & Wellness</li>
                            <li>Man</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="pow">
                <div className="copy-powered">
                    <div className="copy">
                        <p>Copyright &copy; Bellezza. All Rights Reserved</p>
                    </div>
                    <div className="powered">
                        <p>Powered By Smart Innovation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footers
