import { Button, DatePicker, Input, Select } from 'antd'
import axios from 'axios'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const {Option}= Select

const AddDiscount = () => {
  const navigate= useNavigate()
  const [discount, setDiscount]= useState({
    dateStart: new Date(),
    dateEnd: new Date(),
    filmId: "",
    percent: ""
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
        url: "http://localhost:8080/discount/create",
        method: "post",
        data: {
            ...discount
        }
    })
    // eslint-disable-next-line
    const result= await res.data
    return swal("Notice", "Successfully generated discount code", "success").then(()=> navigate("/admin/discount"))
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Start day
      </div>
      <DatePicker style={{width: '100%'}} showTime format="YYYY-MM-DD HH:mm:ss" value={moment(discount.dateStart)} onChange={(e, value)=> setDiscount(prev=> ({...prev, dateStart: value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        
End date
      </div>
      <DatePicker style={{width: '100%'}} showTime format="YYYY-MM-DD HH:mm:ss" value={moment(discount.dateEnd)} onChange={(e, value)=> setDiscount(prev=> ({...prev, dateEnd: value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Discount (%)
      </div>
      <Input value={discount.percent} onChange={(e)=> setDiscount(prev=> ({...prev, percent: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Apply to movies
      </div>
      <Select style={{width: "100%"}} onChange={(e)=> setDiscount(prev=> ({...prev, filmId: e}))}>
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

export default AddDiscount
