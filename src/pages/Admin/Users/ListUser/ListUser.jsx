import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"
import "./ListUser.css"

const ListUser = (props) => {
    const [idUser, setIdUser]= useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const [data, setData]= useState([])
    useEffect(()=> {
      (async()=> {
        const res= await axios({
            url: "http://localhost:8080/auth/getAllUser",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
    // eslint-disable-next-line
   
  const deleteUser= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/auth/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    return console.log(result)
  }
  return (
    <>
      <div style={{display: "flex", justifyContent:" center", alignItems: "center"}}>
        {/* <Input placeholder={"Tìm kiếm người dùng"} />
        <div style={{width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", cursor: "pointer"}}>
            <AiOutlineSearch style={{width: 20, height: 20}} />
        </div> */}
      </div>
      <br />
      <table style={{width: '100%', background: "#fff"}}>
      <thead>
        <tr>
          <td>Email</td>
          <td>Username</td>
          <td>Address</td>
          <td>Phone Number</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"dkdjksjklasafdasd"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"fgjflsjfkljskdale"}>{item.email}</td>
            <td className={"fgjflsjfkljskdale"}>{item.username}</td>
            <td className={"fgjflsjfkljskdale"}>{item.address}</td>
            <td className={"fgjflsjfkljskdale"}>{item.phoneNumber}</td>
            <td className={"fgjflsjfkljskdale"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdUser(item.id)
                }}>Chỉnh sửa</Button>
                <Button onClick={()=> {
                  deleteUser(item.id);
                  swal("Chúc mừng", "Bạn đã xóa tài khoản này thành công", "success")
                }}>Xóa</Button>
              </div>
            </td>
          </tr>)
        }
        {
          data?.length <=0 && <tr>
            <td colSpan={5} style={{textAlign: "center", padding: 10}}>Không có bản ghi nào</td>
          </tr>
        }
      </tbody>
    </table>
    {
      isModalOpen=== true && 
      <InfoDetailUser idUser={idUser} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

const InfoDetailUser= (props)=> {
  const [data, setData]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/auth/detail",
        method: "get",
        params: {
          id_user: props?.idUser
        }
      })
      const result= await res.data
      return setData(result)
    })()
  }, [props?.idUser])
  const updateUser= async()=> {
    const res= await axios({
      url: "http://localhost:8080/auth/update",
      method: "post",
      data: {
        id_user: props?.idUser,
        ...data
      }
    })
    const result= await res.data
    swal("Chúc mừng", "Bạn đã cập nhật tài khoản thành công", "success")
    .then(()=> window.location.reload())
    return console.log(result)
  }
  return (
    <Modal title="Sửa thông tin người dùng" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateUser()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Email</div>
      <Input value={data?.email} onChange={(e)=> setData(prev=> ({...prev, email: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Tên người dùng</div>
      <Input value={data?.username} onChange={(e)=> setData(prev=> ({...prev, username: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Địa chỉ</div>
      <Input value={data?.address} onChange={(e)=> setData(prev=> ({...prev, address: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Số điện thoại</div>
      <Input value={data?.phoneNumber} onChange={(e)=> setData(prev=> ({...prev, phoneNumber: e.target.value}))} />
    </Modal>
  )
}

export default ListUser
