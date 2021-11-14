import { Drawer, Button, Radio, Space } from 'antd';
import React from 'react'
import 'antd/dist/antd.css';
import { NavLink } from 'react-router-dom'
import { MenuUnfoldOutlined } from '@ant-design/icons';

class Navbar extends React.Component {
    state = { visible: false, placement: 'left' };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };

    render() {
        const { placement, visible } = this.state;
        return (
            <>
                <Space>
                    <Radio.Group value={placement} onChange={this.onChange}>

                    </Radio.Group>
                    <div style={{ backgroundColor: "#cbcdd1", width: "10000%", marginBottom: "30px", marginLeft: '-10px' }}>
                        <Button type="primary" style={{ margin: "20px", padding: "-5px", paddingBottom: "20px" }} onClick={this.showDrawer}>
                            <MenuUnfoldOutlined />
                        </Button>
                    </div>
                </Space>
                <Drawer
                    title="Sidebar"
                    placement={placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    key={placement}
                >
                    <NavLink to='/'> <p>Login</p></NavLink>
                    <NavLink to='/admin'> <p>Admin</p></NavLink>
                    <NavLink to='/adminprofile'> <p>AdminProfile</p></NavLink>
                    <NavLink to='/agents'> <p>Agents</p></NavLink>
                </Drawer>
            </>
        );
    }
}

export default Navbar