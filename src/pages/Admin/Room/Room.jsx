import { Button, Input, Modal, Select } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import "../Users/ListUser/ListUser.css"
const {Option}= Select

const ListRoom = (props) => {
    const [idRoom, setidRoom]= useState()
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
            url: "http://localhost:8080/room/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
  const deleteCluster= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/room/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    swal("Congratulations", "You have successfully deleted this theater", "success")
    .then(()=> window.location.reload())
    return console.log(result)
  }
  return (
    <>
      <div style={{display: "flex", justifyContent:" center", alignItems: "center"}}>
      </div>
      <br />
      <table style={{width: '100%', background: "#fff"}}>
      <thead>
        <tr>
          <td>Room name</td>
          <td>Address</td>
          <td>Seats</td>
          <td>Belonging to the theater</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"t-body-item"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"td-item"}>{item.RoomName}</td>
            <td className={"td-item"}>{item.address}</td>
            <td className={"td-item"}>{item.seat}</td>
            <td>{item.Cinema?.cinemaName}</td>
            <td className={"td-item"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setidRoom(item.id)
                }}>Edit</Button>
                <Button onClick={()=> {
                  deleteCluster(item.id);
                  swal("Congratulations", "You have successfully deleted this room", "success")
                }}>Delete</Button>
              </div>
            </td>
          </tr>)
        }
        {
          data?.length <=0 && <tr>
            <td colSpan={5} style={{textAlign: "center", padding: 10}}>There are no records yet</td>
          </tr>
        }
      </tbody>
    </table>
    {
      isModalOpen=== true && 
      <InfoRoomDetail idRoom={idRoom} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

const InfoRoomDetail= (props)=> {
  const [data, setData]= useState()
  const [newData, setNewData]= useState()
  const [cinema, setCinema]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/room/detail/"+ props?.idRoom,
        method: "get",
      })
      const result= await res.data
      const {cinemaName, ...newResult}= result
      setNewData(newResult)
      return setData(result)
    })()
  }, [props?.idRoom])
  useEffect(()=> {
    (async()=> {
        const res= await axios({
            url: "http://localhost:8080/cinema/",
            method: "get"
        })
        const result= await res.data
        return setCinema(result)
    })()
  }, [])
  const updateRoom= async()=> {
    const res= await axios({
      url: "http://localhost:8080/room/update/"+  props?.idRoom,
      method: "patch",
      data: {
        ...newData
      }
    })
    const result= await res.data
    swal("Congratulations", "You have successfully updated a room", "success")
    .then(()=> window.location.reload())
    return console.log(result)
  }
  return (
    <Modal title="Edit box office information" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateRoom()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Room name</div>
      <Input value={newData?.RoomName} onChange={(e)=> setNewData(prev=> ({...prev, RoomName: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Address</div>
      <Input value={newData?.address} onChange={(e)=> setNewData(prev=> ({...prev, address: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Seats</div>
      <Input value={newData?.seat} onChange={(e)=> setNewData(prev=> ({...prev, seat: e.target.value}))} />
      <br />
      <div className={"label-item"} style={{marginBottom: 8}}>Movie theater</div>
      <Select style={{width: "100%"}} value={data?.cinemaName} onChange={(e)=> setNewData(prev=> ({...prev, cinemaId: e}))}>
        {
            cinema?.map((item, key)=> <Option key={key} value={item.id}>{item.cinemaName}</Option>)
        }
      </Select>
    </Modal>
  )
}

export default ListRoom
