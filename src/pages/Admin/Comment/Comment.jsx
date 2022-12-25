import { Button, Input, Modal, Select } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"
import "../Users/ListUser/ListUser.css"
import moment from 'moment';
const {Option}= Select

const ListComment = (props) => {
    const [idComment, setIdComment]= useState()
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
            url: "http://localhost:8080/comment/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
  const deleteComment= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/comment/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    swal("Chúc mừng", "Bạn đã xóa mã giảm giá thành công", "success")
    .then(()=> window.location.reload())
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
          <td>Content</td>
          <td>Rate </td>
          <td>User</td>
          <td>Movie</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"t-body-item"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"td-item"}>{item?.content}</td>
            <td className={"td-item"}>{item?.rate}</td>
            <td className={"td-item"}>{item?.username}</td>
            <td className={"td-item"}>{item?.movieName}</td>
            <td className={"td-item"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                {/* <Button onClick={()=> {
                  showModal()
                  setIdComment(item.id)
                }}>Edit</Button> */}
                <Button onClick={()=> {
                  deleteComment(item.id);
                  swal("Congrats", "You deleted comment successfully", "success")
                }}>Delete</Button>
              </div>
            </td>
          </tr>)
        }
        {
          data?.length <=0 && <tr>
            <td colSpan={5} style={{textAlign: "center", padding: 10}}>No more record</td>
          </tr>
        }
      </tbody>
    </table>
    {
      isModalOpen=== true && 
      <InfoDetailComment idComment={idComment} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

export const InfoDetailComment= (props)=> {
  const [data, setData]= useState()
  const [newData, setNewData]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/comment/detail/"+ props?.idComment,
        method: "get",
      })
      const result= await res.data
      const {movieName, ...newResult}= result
      setNewData(newResult)
      return setData(result)
    })()
  }, [props?.idComment])
  
  const updateComment= async()=> {
    const res= await axios({
      url: "http://localhost:8080/comment/update/"+  props?.idComment,
      method: "patch",
      data: {
        ...newData
      }
    })
    const result= await res.data
    window.location.reload()
    return console.log(result)
  }
  return (
    <Modal title="Sửa thông tin phòng vé" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateComment()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Ngày bắt đầu</div>
      <Input value={newData?.dateStart} onChange={(e)=> setNewData(prev=> ({...prev, dateStart: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Ngày kết thúc</div>
      <Input value={newData?.dateEnd} onChange={(e)=> setNewData(prev=> ({...prev, dateEnd: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Áp dụng</div>
      <br />
      <div className={"label-item"} style={{marginBottom: 8}}>Giảm giá (%)</div>
      <Input value={newData?.percent} onChange={(e)=> setNewData(prev=> ({...prev, percent: e.target.value}))} />
    </Modal>
  )
}

export default ListComment
