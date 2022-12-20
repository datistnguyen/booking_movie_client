import { Button, DatePicker, Input, Select } from 'antd'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const {Option}= Select

const AddPlaytime = () => {
  const navigate= useNavigate()
  const [playtime, setPlaytime]= useState({
    timeStart: new Date(),
    filmId: "",
  })
  const [film, setFilm]= useState([])
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
  const newDiscount= async ()=> {
    const res= await axios({
        url: "http://localhost:8080/playtime/create",
        method: "post",
        data: {
            ...playtime
        }
    })
    // eslint-disable-next-line
    const result= await res.data
    return swal("Thông báo", "Tạo giờ phát sóng thành công", "success").then(()=> navigate("/admin/playtime"))
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Thời gian chiếu
      </div>
      <DatePicker style={{width: '100%'}} showTime format="YYYY-MM-DD HH:mm:ss" value={moment(playtime.dateStart)} onChange={(e, value)=> setPlaytime(prev=> ({...prev, dateStart: value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Áp dụng cho phim
      </div>
      <Select style={{width: "100%"}} onChange={(e)=> setPlaytime(prev=> ({...prev, filmId: e}))}>
        {
            film?.map((item, key)=> <Option key={key} value={item.id}>{item.movieName}</Option>)
        }
      </Select>
      <div></div>   
      <br />
      <div>
        <Button onClick={newDiscount}>OK</Button>
      </div>
    </div>
  )
}

export default AddPlaytime
