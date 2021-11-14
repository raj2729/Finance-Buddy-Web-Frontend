import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
import { Table, Tag } from 'antd';

const Agents = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setAgents([...agents, agentName])
        setAgentName('')
        console.log(agents);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const { Search } = Input;

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const { Panel } = Collapse;

    function callback(key) {
        console.log(key);
    }

    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

    const onSearch = value => console.log(value);
    const dataSource = [
        {
            key: '1',
            name: 'Cust 1',
            custid: 'Cust id - 988666'
        },
        {
            key: '2',
            name: 'Cust ',
            custid: 'Cust id - 988666'
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Cust Id',
            dataIndex: 'custid',
            key: 'custid',
        }
    ];
    const [agentName, setAgentName] = useState('')
    const [agents, setAgents] = useState([])

    return (
        <div style={{ marginLeft: "50px", paddingRight: "50px" }}>
            <Space direction="vertical">
                <Search
                    placeholder="Search..."
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />

            </Space>
            <br />
            <br />
            <div style={{ border: "1px solid black", display: "flex" }}>
                <h2 style={{ marginLeft: "50px", margin: "10px" }}>Agents</h2> <button class='btn btn-primary mr auto' style={{ margin: "10px", position: "relative", left: "10%", width: "100px", borderRadius: '999px' }} onClick={showModal}>ADD</button>
            </div>
            <Collapse defaultActiveKey={['1']} onChange={callback}>

                <Panel header="Agent 1" key="1">
                    <Table dataSource={dataSource} columns={columns} />
                </Panel>
                <Panel header="Agent 2" key="2">
                    <Table dataSource={dataSource} columns={columns} />
                </Panel>
                <Panel header="Agent 3" key="3">
                    <Table dataSource={dataSource} columns={columns} />
                </Panel>


                {agents.map((agentname) => (
                    <Panel header={agentname} key="5">
                        <Table dataSource={dataSource} columns={columns} />
                    </Panel>
                ))}
            </Collapse>

            <Modal title="Add Agent" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input placeholder="Agent..." value={agentName} onChange={(e) => { setAgentName(e.target.value); console.log(agentName) }} />
            </Modal>
        </div >
    )
}

export default Agents








const App = () => {


    return (
        <>

        </>
    );
};



