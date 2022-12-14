import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"

const ListFilm = (props) => {
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
            url: "http://localhost:8080/film/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
    // eslint-disable-next-line
    const deleteUser= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/film/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    return console.log(result)
  }
  return (
    <>
      <div style={{display: "flex", justifyContent:" center", alignItems: "center"}}>
        <Input placeholder={"Tìm kiếm film"} />
        <div style={{width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", cursor: "pointer"}}>
            <AiOutlineSearch style={{width: 20, height: 20}} />
        </div>
      </div>
      <br />
      <table style={{width: '100%'}}>
      <thead>
        <tr>
          <td>Tên phim</td>
          <td>Mô tả</td>
          <td>Giá</td>
          <td>Quốc gia</td>
          <td></td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item, key)=> <tr key={key}>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td>{item.address}</td>
            <td>{item.phoneNumber}</td>
            <td>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={showModal}>Chỉnh sửa</Button>
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
    <Modal title="Sửa thông tin người dùng" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
    </>
  )
}

export default ListFilm
