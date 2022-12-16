import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"
import "../Users/ListUser/ListUser.css"
const ListCluster = (props) => {
    const [idCluster, setIdCluster]= useState()
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
            url: "http://localhost:8080/cluster/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
  const deleteCluster= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/cluster/delete/"+ id,
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
          <td>Tên cụm rạp</td>
          <td>Địa chỉ</td>
          <td>Hình ảnh</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"dkdjksjklasafdasd"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"fgjflsjfkljskdale"}>{item.ClusterName}</td>
            <td className={"fgjflsjfkljskdale"}>{item.address}</td>
            <td className={"fgjflsjfkljskdale"}>{item.img}</td>
            <td className={"fgjflsjfkljskdale"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdCluster(item.id)
                }}>Chỉnh sửa</Button>
                <Button onClick={()=> {
                  deleteCluster(item.id);
                  swal("Chúc mừng", "Bạn đã xóa cụm rạp này thành công", "success")
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
      <InfoDetailUser idCluster={idCluster} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

const InfoDetailUser= (props)=> {
  const [data, setData]= useState()

  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/cluster/detail/"+ props?.idCluster,
        method: "get",
      })
      const result= await res.data
      return setData(result)
    })()
  }, [props?.idCluster])
  const updateCinema= async()=> {
    const res= await axios({
      url: "http://localhost:8080/cluster/update/"+  props?.idCluster,
      method: "patch",
      data: {
        ...data
      }
    })
    const result= await res.data
    window.location.reload()
    return console.log(result)
  }
  return (
    <Modal title="Sửa thông tin cụm rạp" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateCinema()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Tên cụm rạp</div>
      <Input value={data?.ClusterName} onChange={(e)=> setData(prev=> ({...prev, ClusterName: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Địa chỉ</div>
      <Input value={data?.address} onChange={(e)=> setData(prev=> ({...prev, address: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Hình ảnh</div>
      <Input value={data?.img} onChange={(e)=> setData(prev=> ({...prev, img: e.target.value}))} />
      <br />
    </Modal>
  )
}

export default ListCluster
