import React from 'react'
import './login.css'
import wallet from '../img/wallet.svg'
import { Form, Input, Button, Checkbox } from 'antd';
import { NavLink } from 'react-router-dom'
import { LockOutlined, EditOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history=useHistory();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();


    const handleLogin=async()=>{
       try {
        const config={
            headers:{
                'content-type':'application/json'
            }
        }        
        const obj={
            customerEmailId:email,
            password:password
        }
        
        const resp=await axios.post('https://finance-buddy-api.herokuapp.com/users/login',obj,config);
        console.log(resp.data);
        localStorage.setItem('data',JSON.stringify(resp.data.data));
        localStorage.setItem('token',JSON.stringify(resp.data.data.token));
        console.log(localStorage.getItem('token'));
        history.push('/admin');
       } catch (e) {
           console.log(e);
       }
    }
    return (
        <>
            <div class='row'>
                <div class='col-lg-6 col-md-12 col-sm-12'>
                    <img src={wallet} alt='wallet-img' style={{ width: "70%", marginLeft: '60px' }} />
                </div>
                <div class='col-lg-6 col-md-12 col-sm-12' style={{ width: "50%", margin: "auto" }}>
                    <Form
                        className='form'
                        style={{}}
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <h1 style={{ color: "#1c03fc", textAlign: "center" }}>Finance&nbsp;Buddy</h1>
                        <Form.Item
                            className='form-item'
                            style={{ marginRight: "50px" }}
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input className="input" prefix={<EditOutlined />} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Item>

                        <Form.Item
                            style={{ marginRight: "50px" }}
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Password should contain atleast 8 characters. It should contain atleast 1 capital letter.',
                                },
                            ]}
                        >
                            <Input.Password className="input" onChange={(e)=>setPassword(e.target.value)} prefix={<LockOutlined />} />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            {/* <Checkbox>Remember me</Checkbox> */}
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                           <Button style={{
                                position: "relative", bottom: "50px", backgroundColor: "#5875f5", color: "white"
                            }} htmlType="submit" onClick={handleLogin}>
                                LOGIN
                            </Button>

                        </Form.Item>
                        <p className='forgotpassword'>Forgot password? <h6 style={{ color: "#5875f5" }}>Get help</h6></p>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Login
