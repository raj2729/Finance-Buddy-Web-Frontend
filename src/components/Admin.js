import React from 'react'
import { Input, Space } from 'antd';
import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
import { Table, Tag } from 'antd';
import { Pagination } from 'antd';
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import { Radio } from 'antd';
import axios from 'axios';

const Admin = () => {
    const { Search } = Input;
    const [datasrc,setDataSrc]=useState([]);
    useEffect(()=>{
        getData()
    },[]);
    const getData=async ()=>{
        try {
            console.log(localStorage.getItem('token'));
            const resp=await axios.get('https://finance-buddy-api.herokuapp.com/admin/getAllEMIS',{ headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('token'))}`} })
            console.log(resp.data.data);
            setDataSrc(resp.data.data)
            console.log(datasrc)
        } catch (e) {
            console.log(e);
        }
    }
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
    
    const x=datasrc.map(function(val, index){
        const url=`/customer/${val.user}`
        return {...val,userName:<NavLink to={url}>{val.userName}</NavLink>};
    });

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'userName',
            key: 'userName',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Last Date',
            dataIndex: 'lastDate',
            key: 'lastDate',
        },
        {
            title: 'Agent Name',
            dataIndex: 'agentName',
            key: 'agentName',
        },
    ];
    // const state = {
    //     current: 3,
    // };


    onChange = page => {
        console.log(page);
        this.setState({
            current: page,
        });
    };
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
            <Table dataSource={x} columns={columns} />;
            <Pagination defaultCurrent={1} total={50} />
            <br />
        </div>
    )
}




export default Admin








