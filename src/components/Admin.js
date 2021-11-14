import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import { Pagination } from 'antd';
import { NavLink } from 'react-router-dom'

import { Radio } from 'antd';
const Admin = () => {
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    function onChange(e) {
        console.log(`radio checked:${e.target.value}`);
    }
    const onSearch = value => console.log(value);


    const dataSource = [
        {
            key: '1',
            id: '3A7781',
            name: <NavLink to='/adminprofile'>Ashok Mehta</NavLink>,
            amount: '15,000',
            lastdate: '12/10/2021',
            contactno: 9999111929
        },
        {
            key: '2',
            id: '3A7781',
            name: <NavLink to='/adminprofile'>Ashok Mehta</NavLink>,
            amount: '15,000',
            lastdate: '12/10/2021',
            contactno: 9999111929
        },
        {
            key: '3',
            id: '3A7781',
            name: <NavLink to='/adminprofile'>Ashok Mehta</NavLink>,
            amount: '15,000',
            lastdate: '12/10/2021',
            contactno: 9999111929
        },
        {
            key: '4',
            id: '3A7781',
            name: <NavLink to='/adminprofile'>Ashok Mehta</NavLink>,
            amount: '15,000',
            lastdate: '12/10/2021',
            contactno: 9999111929
        }
    ];

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Last Date',
            dataIndex: 'lastdate',
            key: 'lastdate',
        },
        {
            title: 'Contact No.',
            dataIndex: 'contactno',
            key: 'contactno',
        },
    ];
    // const state = {
    //     current: 3,
    // };


    // onChange = page => {
    //     console.log(page);
    //     this.setState({
    //         current: page,
    //     });
    // };
    return (
        <div style={{ marginLeft: "30px" }}>
            <h1 style={{ color: "#1c03fc" }}>Finance&nbsp;Buddy</h1>

            <h2>Hi Admin</h2>
            <Space direction="vertical">
                <Search
                    placeholder="Enter Customer ID"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />

            </Space>
            <br />
            <br />
            <h5>Customer Collection List</h5>
            <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button value="a">Today</Radio.Button>
                <Radio.Button value="b">This week</Radio.Button>
                <Radio.Button value="c">This month</Radio.Button>
            </Radio.Group>

            <Table dataSource={dataSource} columns={columns} />;
            <Pagination defaultCurrent={1} total={50} />
            <br />

        </div>
    )
}




export default Admin








