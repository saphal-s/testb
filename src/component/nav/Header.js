import React, { useState } from 'react'
import { Modal } from 'antd';
import Drawers from './drawer/Drawers';
import Sheader from './Sheader';



const Header = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    // for modal

    const showModal = () => {
        setIsModalVisible(true);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <>
            <div className='navs'>
                <div className="row w-100 ps-4 borders">
                    <div className="col-md-2  menu">
                        <h2 className="hbellezza">
                            Bellezza
                        </h2>
                    </div>
                    <div className="col-md-6 search">
                        <form>
                            <input
                                type="text"
                                placeholder="Search"
                            />
                            <i class="fas fa-search search_icon"></i>
                        </form>
                    </div>
                    <div className="col-md-4 d-flex mt-2 icons">
                        <div className="myitems">
                            <i className="far fa-heart icon"></i>
                            <span className="itext">My Items</span>
                        </div>
                        <div className="cart ms-5">
                            <i className="fas fa-shopping-bag icon"></i>&nbsp;
                            <span className="itext">Bag</span>
                        </div>
                        <div className="user ms-5">
                            <i className="far fa-user icon"></i>&nbsp;
                            <span className="itext">Account</span>
                        </div>
                    </div>
                </div>
                <div className="mobilenav w-100">
                    <div className="dflex">
                        <div className="menu">
                            <Drawers />
                        </div>
                        <div className="msearchs">
                            <i className="fas fa-search search_icon msearchicon" onClick={showModal}></i>
                            <Modal
                                visible={isModalVisible}
                                onCancel={handleCancel}>
                                <form className="msearch text-center" >
                                    <input
                                        type="text"
                                        placeholder="Search"
                                    />
                                    <i className="fas fa-search msearch_icon"></i>
                                </form>
                            </Modal>
                        </div>
                        <div className="mhead">
                            <h2 className="mhbellezza">
                                Bellezza
                            </h2>
                        </div>
                        <div className="micons d-flex">
                            <div className="myitems pl-2">
                                <i className="far fa-heart micon"></i>
                            </div>
                            <div className="cart">
                            <i className="fas fa-shopping-bag micon"></i>
                            </div>
                            <div className="user">
                            <i className="far fa-user micon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <Sheader/>
            </div>
        </>
    )
}

export default Header
