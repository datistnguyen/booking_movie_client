import { Button, DatePicker, Input, Select } from 'antd'
import axios from 'axios'
import moment from 'moment'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import swal from 'sweetalert'
const {Option}= Select
const AddFilm = () => {
  const [cinema, setCinema]= useState([])
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/cinema",
        method: "get"
      })
      const result= await res.data
      return setCinema(()=> result)
    })()
  }, [])
  const [newFilm, setNewFilm]= useState({
    movieName: "",
    desc: "",
    actor: "",
    director: "",
    price: 0,
    img: "",
    dateStart: new Date(),
    dateEnd: new Date(), 
    country: "",
    flimStudio: "",
    version: 0,
    genre: "",
    limitAge: 0,
    CinemaId: "",
    state: 0,
    trailer: "",
  })
  const createFilm= async ()=> {
    const res= await axios({
      url: "http://localhost:8080/film/create",
      method: "post",
      data: {
        ...newFilm
      }
    })
    // eslint-disable-next-line
    const result= await res.data
    swal("Chúc mừng", "Bạn đã cập nhật tài khoản thành công", "success")
    .then(()=> window.location.reload())
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Tên phim
      </div>
      <Input value={newFilm.movieName} onChange={(e)=> setNewFilm(prev=> ({...prev, movieName: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Mô tả
      </div>
      <Input value={newFilm.desc}  onChange={(e)=> setNewFilm(prev=> ({...prev, desc: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Diễn viên
      </div>
      <Input value={newFilm.actor} onChange={(e)=> setNewFilm(prev=> ({...prev, actor: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Đạo diễn
      </div>
      <Input value={newFilm.director} onChange={(e)=> setNewFilm(prev=> ({...prev, director: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Giá
      </div>
      <Input value={newFilm.price} onChange={(e)=> setNewFilm(prev=> ({...prev, price: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Ảnh phim
      </div>
      <Input value={newFilm.img} onChange={(e)=> setNewFilm(prev=> ({...prev, img: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
       Ngày bắt đầu
      </div>
      <DatePicker style={{width: '100%'}} showTime format="YYYY-MM-DD HH:mm:ss" value={moment(newFilm.dateStart)} onChange={(e, value)=> setNewFilm(prev=> ({...prev, dateStart: value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Ngày kết thúc
      </div>
      <DatePicker style={{width: '100%'}} showTime format="YYYY-MM-DD HH:mm:ss" value={moment(newFilm.dateEnd)} onChange={(e, value)=> setNewFilm(prev=> ({...prev, dateEnd: value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Quốc gia
      </div>
      <Input value={newFilm.country} onChange={(e)=> setNewFilm(prev=> ({...prev, country: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Nhà sản xuất
      </div>
      <Input value={newFilm.flimStudio} onChange={(e)=> setNewFilm(prev=> ({...prev, flimStudio: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Phiên bản
      </div>
      <Input value={newFilm.version} onChange={(e)=> setNewFilm(prev=> ({...prev, version: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Thể loại
      </div>
      <Input value={newFilm.genre} onChange={(e)=> setNewFilm(prev=> ({...prev, genre: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Độ tuổi
      </div>
      <Input value={newFilm.limitAge} onChange={(e)=> setNewFilm(prev=> ({...prev, limitAge: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Thuộc rạp
      </div>
      <Select onChange={(e)=> setNewFilm(prev=> ({...prev, CinemaId: e}))} style={{width: "100%"}}>
        {
          cinema?.map((item, key)=> <Option key={key} value={item.id}>{item.cinemaName}</Option>)
        }
      </Select>
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Thời lượng
      </div>
      <Input value={newFilm.state} onChange={(e)=> setNewFilm(prev=> ({...prev, state: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Trailer
      </div>
      <Input value={newFilm.trailer} onChange={(e)=> setNewFilm(prev=> ({...prev, trailer: e.target.value}))} />
      <div></div>
      <br />
      <div>
        <Button onClick={()=> createFilm()}>OK</Button>
      </div>
    </div>
  )
}

export default AddFilm
