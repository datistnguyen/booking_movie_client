import { Space,Table,Button } from 'antd';
import React,{useEffect,useState} from 'react';
import {getAllUsers} from '../../../../Service/userService'
import {  } from "module";

export default function AddUser(props) {
  // eslint-disable-next-line
  const [arrUsers,setArrUsers] =useState([])
  useEffect(() => { 
    let response = getAllUsers('ALL');
    console.log('get user from node.js',response)
   },[])
  const columns = [
    {
      title: 'Email',
      dataIndex: 'Email',
      value:(text,object)=>{
        return <span key={object} >{text}</span>
      },
      width:'20%',
      sorter: (a, b) => a.Email - b.Email,
      sortDirections: ['descend','ascend'],
     
    },
    {
      title: 'Username',
      dataIndex: 'Username',
      value:(text,object)=>{
        return <span key={object} >{text}</span>
      },
      width:'20%',
      sorter: (a, b) => a.Username - b.Username,
      sortDirections: ['descend','ascend'],
     
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      value:(text,object)=>{
        return <span key={object} >{text}</span>
      },
      width:'20%',
      sorter: (a, b) => a.Address - b.Address,
      sortDirections: ['descend','ascend'],
     
    },
    {
      title: 'Phonenumber',
      dataIndex: 'Phonenumber',
      value:(text,object)=>{
        return <span key={object} >{text}</span>
      },
      width:'20%',
      sorter: (a, b) => a.Phonenumber - b.Phonenumber,
      sortDirections: ['descend','ascend'],
     
    },
    {
      title: 'Action',
      key: 'Action',
      render: (_, record) => (
        <Space size="middle">
          <Button type='primary' danger>Invite </Button>
          <Button type ='primary'ghost>Delete</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  return (
    <Table columns={columns} dataSource={data} onChange={onChange} />
  )
}