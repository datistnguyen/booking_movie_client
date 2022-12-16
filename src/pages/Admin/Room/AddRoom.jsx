import { Button, Input, Select } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
const {Option}= Select

const AddRoom = () => {
  const [room, setRoom]= useState({
    RoomName: "",
    address: "",
    seat: "",
    cinemaId: ""
  })
  const [cinema, setCinema]= useState([])
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
  const newRoom= async ()=> {
    const res= await axios({
        url: "http://localhost:8080/room/create",
        method: "post",
        data: {
            ...room
        }
    })
    // eslint-disable-next-line
    const result= await res.data
    return window.location.reload()
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Tên phòng
      </div>
      <Input value={room.RoomName} onChange={(e)=> setRoom(prev=> ({...prev, RoomName: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Địa chỉ
      </div>
      <Input value={room.address} onChange={(e)=> setRoom(prev=> ({...prev, address: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Chỗ ngồi
      </div>
      <Input value={room.seat} onChange={(e)=> setRoom(prev=> ({...prev, seat: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Rạp phim
      </div>
      <Select style={{width: "100%"}} onChange={(e)=> setRoom(prev=> ({...prev, cinemaId: e}))}>
        {
            cinema?.map((item, key)=> <Option key={key} value={item.id}>{item.cinemaName}</Option>)
        }
      </Select>
      <div></div>   
      <br />
      <div>
        <Button onClick={newRoom}>OK</Button>
      </div>
    </div>
  )
}

export default AddRoom
