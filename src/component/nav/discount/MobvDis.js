import React, { useState } from 'react';
import '../header.css';

const MobvDis = () => {
    const [display,setDisplay] = useState('block');

    return (
        <div>
            <div className="dmh"  style={{ display: display}}>
                <div className="dis_flex dmfx">
                    <div className="start_text">
                        <i className="far fa-star ms-2" style={{color:'#eb9934',fontSize: '25px'}}></i>
                        <p className="dism_text ms-2 me-2">Join And Get Flat 15% Off. <br /> <span className="ms-2">Use Code: SAPHAL</span> </p>
                        <i className="far fa-star me-2" style={{color:'#eb9934',fontSize: '25px'}}></i>
                    </div>
                    <div className="close_button text-center ms-2">
                        <i class="fas fa-times" id="dcb" onClick={() => { setDisplay("none")}}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobvDis
