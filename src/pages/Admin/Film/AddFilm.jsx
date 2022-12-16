import { Button, Input, Select } from 'antd'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
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
    dateStart: "",
    dateEnd: "", 
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
    const result= await res.data
    return window.location.reload()
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
      <Input value={newFilm.dateStart} onChange={(e)=> setNewFilm(prev=> ({...prev, dateStart: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Ngày kết thúc
      </div>
      <Input value={newFilm.dateEnd} onChange={(e)=> setNewFilm(prev=> ({...prev, dateEnd: e.target.value}))} />
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
      <Select onChange={(e)=> setNewFilm(prev=> ({...prev, CinemaId: e}))} >
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
