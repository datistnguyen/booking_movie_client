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

const ListDiscount = (props) => {
    const [idDiscount, setIdDiscount]= useState()
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
            url: "http://localhost:8080/discount/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
  const deleteCluster= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/discount/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    return console.log(result)
  }
  return (
    <>
      <div style={{display: "flex", justifyContent:" center", alignItems: "center"}}>
        <Input placeholder={"Tìm kiếm người dùng"} />
        <div style={{width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", cursor: "pointer"}}>
            <AiOutlineSearch style={{width: 20, height: 20}} />
        </div>
      </div>
      <br />
      <table style={{width: '100%', background: "#fff"}}>
      <thead>
        <tr>
          <td>Ngày bắt đầu</td>
          <td>Ngày kết thúc</td>
          <td>Áp dụng</td>
          <td>Giảm giá (%)</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"t-body-item"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"td-item"}>{moment(item?.dateStart).format("HH:mm DD-MM-YYYY")}</td>
            <td className={"td-item"}>{moment(item?.dateEnd).format("HH:mm DD-MM-YYYY")}</td>
            <td className={"td-item"}>{item.movieName}</td>
            <td className={"td-item"}>{item.percent}</td>
            <td className={"td-item"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdDiscount(item.id)
                }}>Chỉnh sửa</Button>
                <Button onClick={()=> {
                  deleteCluster(item.id);
                  swal("Chúc mừng", "Bạn đã xóa phòng này thành công", "success")
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
      <InfoRoomDetail idDiscount={idDiscount} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

const InfoRoomDetail= (props)=> {
  const [data, setData]= useState()
  const [newData, setNewData]= useState()
  const [film, setFilm]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/discount/detail/"+ props?.idDiscount,
        method: "get",
      })
      const result= await res.data
      const {movieName, ...newResult}= result
      setNewData(newResult)
      return setData(result)
    })()
  }, [props?.idDiscount])
  useEffect(()=> {
    (async()=> {
        const res= await axios({
            url: "http://localhost:8080/film/",
            method: "get"
        })
        const result= await res.data
        return setFilm(result)
    })()
  }, [])
  const updateRoom= async()=> {
    const res= await axios({
      url: "http://localhost:8080/discount/update/"+  props?.idDiscount,
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
      updateRoom()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Ngày bắt đầu</div>
      <Input value={newData?.dateStart} onChange={(e)=> setNewData(prev=> ({...prev, dateStart: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Ngày kết thúc</div>
      <Input value={newData?.dateEnd} onChange={(e)=> setNewData(prev=> ({...prev, dateEnd: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Áp dụng</div>
      <Select style={{width: "100%"}} value={data?.movieName} onChange={(e)=> setNewData(prev=> ({...prev, filmId: e}))}>
        {
          film?.map((item, key)=> <Option key={key} value={item.id}>{item.movieName}</Option>)
        }
      </Select>
      <br />
      <div className={"label-item"} style={{marginBottom: 8}}>Giảm giá (%)</div>
      <Input value={newData?.percent} onChange={(e)=> setNewData(prev=> ({...prev, percent: e.target.value}))} />
    </Modal>
  )
}

export default ListDiscount
