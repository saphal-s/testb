import React, { useState } from 'react';
import '../header.css';

const DiscountPopUp = () => {
    const [display, setDisplay] = useState('block');
    return (
        <>
            <div className="discount_header ddh" style={{ display: display }}>
                <div className="dis_flex dhmt dmfx">
                    <div><h3 className="bellezza_disc">Bellezza</h3></div>
                    <div className="start_text">
                        <i className="far fa-star ms-2" style={{ color: '#eb9934', fontSize: '25px' }}></i>
                        <i className="far fa-star ms-1 st" style={{ color: '#eb9934', fontSize: '25px' }}></i>
                        <i className="far fa-star ms-1 st" style={{ color: '#eb9934', fontSize: '25px' }}></i>

                        <p className="dis_text ms-3 me-3">Join With Bellezza And Get Flat 15% Off. <span className="ms-2">USE CODE: SAPHAL</span> </p>
                        <i className="far fa-star ms-2" style={{ color: '#eb9934', fontSize: '25px' }}></i>
                        <i className="far fa-star ms-1 st" style={{ color: '#eb9934', fontSize: '25px' }}></i>
                        <i className="far fa-star ms-1 st" style={{ color: '#eb9934', fontSize: '25px' }}></i>
                    </div>
                    <div className="close_button text-center">
                        <i class="fas fa-times" id="dcb" onClick={() => { setDisplay("none") }}></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DiscountPopUp
