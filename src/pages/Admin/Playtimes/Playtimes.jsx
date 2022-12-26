import { Button, DatePicker, Input, Modal, Select } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"
import "../Users/ListUser/ListUser.css"
import moment from 'moment';
const {Option}= Select

const ListPlaytimes = (props) => {
    const [idPlaytimes, setIdPlaytimes]= useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData]= useState([])
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    useEffect(()=> {
        (async()=> {
        const res= await axios({
            url: "http://localhost:8080/playtime/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
    // const [room, setRoom]= useState([])
    // const [film, setFilm]= useState([])
    // useEffect(()=> {
    //   (async()=> {
    //     const res= await axios({
    //         url: "http://localhost:8080/room/",
    //         method: "get",
    //     })
    //     const result= await res.data
    //     return setRoom(result)
    //   })()
    // }, [])
    // useEffect(()=> {
    //   (async()=> {
    //     const res= await axios({
    //         url: "http://localhost:8080/film/",
    //         method: "get",
    //     })
    //     const result= await res.data
    //     return setFilm(result)
    //   })()
    // }, [])
  const deletePlaytimes= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/room/delete/"+ id,
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
          <td>Start time</td>
          <td>Belonging to the movie</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"t-body-item"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"td-item"}>{item.timeStart}</td>
            <td className={"td-item"}>{item.Film.movieName}</td>
            <td className={"td-item"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdPlaytimes(item.id)
                }}>Edit</Button>
                <Button onClick={()=> {
                  deletePlaytimes(item.id);
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
      <InfoRoomDetail idPlaytimes={idPlaytimes} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

const InfoRoomDetail= (props)=> {
  const [data, setData]= useState()
  const [newData, setNewData]= useState()
  const [film, setFilm]= useState()
  // const [room, setRoom]= useState()

  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/playtime/detail/"+ props?.idPlaytimes,
        method: "get",
      })
      const result= await res.data
      const {filmId, ...newResult}= result
      setNewData(newResult)
      return setData(result)
    })()
  }, [props?.idPlaytimes])
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
  // useEffect(()=> {
  //   (async()=> {
  //       const res= await axios({
  //           url: "http://localhost:8080/room/",
  //           method: "get"
  //       })
  //       const result= await res.data
  //       return setRoom(result)
  //   })()
  // }, [])
  const updatePlaytime= async()=> {
    const res= await axios({
      url: "http://localhost:8080/playtime/update/"+  props?.idPlaytimes,
      method: "patch",
      data: {
        ...newData, id: props?.idPlaytimes
      }
    })
    const result= await res.data
    swal("Congratulations", "You have successfully updated the showtime", "success")
    .then(()=> window.location.reload())
    return console.log(result)
  }
  return (
    <Modal title="Edit play time information" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updatePlaytime()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Start time</div>
      <DatePicker style={{width: '100%'}} showTime format="YYYY-MM-DD HH:mm:ss" value={moment(newData?.timeStart)} onChange={(e, value)=> setNewData(prev=> ({...prev, timeStart: value}))} />

      {/* <div className={"label-item"} style={{marginBottom: 8}}>Thuộc phòng</div>
      <Select style={{width: "100%"}} value={data?.RoomName} onChange={(e)=> setNewData(prev=> ({...prev, roomId: e}))}>
        {
          room?.map((item, key)=> <Option key={key} value={item.id}>{item.RoomName}</Option>)
        }
      </Select> */}
      <div className={"label-item"} style={{marginBottom: 8}}>
Apply film</div>
      <Select style={{width: "100%"}} value={data?.movieName} onChange={(e)=> setNewData(prev=> ({...prev, filmId: e}))}>
        {
          film?.map((item, key)=> <Option key={key} value={item.id}>{item.movieName}</Option>)
        }
      </Select>
    </Modal>
  )
}

export default ListPlaytimes
