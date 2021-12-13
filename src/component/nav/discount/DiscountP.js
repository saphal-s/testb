import React from 'react'
import DiscountPopUp from './DiscountPopUP'
import MobvDis from './MobvDis'
import '../header.css';

const DiscountP = () => {
    return (
        <>
            <div className="desktop">
                <DiscountPopUp />
            </div>
            <div className="mobile">
                <MobvDis />
            </div>
        </>
    )
}

export default DiscountP
