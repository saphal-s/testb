import React, { useState } from 'react'
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { Tabs } from 'antd';
import { Menu } from 'antd';

const { TabPane } = Tabs;
const { SubMenu } = Menu;

const Drawers = () => {
    const [visible, setVisible] = useState(false);
    // for drawer
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <MenuOutlined className='menuicon'
                onClick={showDrawer} />
            <Drawer title="Basic Drawer" placement="left" width="270px"
                onClose={onClose} visible={visible}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="Categories" key="1">
                        <Menu
                            style={{ width: 270 }}
                            mode="inline"
                        >
                            <SubMenu key="sub1" title="Category 1">
                                <Menu.Item key="1">Option 5</Menu.Item>
                                <Menu.Item key="2">Option 6</Menu.Item>
                                <SubMenu key="sub2" title="Submenu">
                                    <Menu.Item key="3">Option 7</Menu.Item>
                                    <Menu.Item key="4">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub3" title="Category 2">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub4" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </TabPane>
                    <TabPane tab="Brands" key="2">
                        <p className="drawer-brand">Brand 1</p>
                        <p className="drawer-brand">Brand 2</p>
                    </TabPane>
                </Tabs>
            </Drawer>
        </>
    )
}

export default Drawers
