import { Button, Input, Select } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
const {Option}= Select
const AddCinema = () => {
  const [cinema, setCinema]= useState({
    cinemaName: "",
    address: "",
    img: "",
    clusterId: "",
  })
  const [cluster, setCluster]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/cluster",
        method: "get"
      })
      const result= await res.data
      return setCluster(result)
    })()
  }, [])
  const newCinema= async ()=> {
    const res= await axios({
        url: "http://localhost:8080/cinema/create",
        method: "post",
        data: {
            ...cinema
        }
    })
    const result= await res.data
    return window.location.reload()
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Tên rạp
      </div>
      <Input value={cinema.cinemaName} onChange={(e)=> setCinema(prev=> ({...prev, cinemaName: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Địa chỉ
      </div>
      <Input value={cinema.address} onChange={(e)=> setCinema(prev=> ({...prev, address: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Hình ảnh
      </div>
      <Input value={cinema.img} onChange={(e)=> setCinema(prev=> ({...prev, img: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Cụm rạp
      </div>
      <Select style={{width: "100%"}} onChange={(e)=> setCinema(prev=> ({...prev, clusterId: e}))}>
        {
          cluster?.map((item, key)=> <Option key={key} value={item.id}>{item.ClusterName}</Option>)
        }
      </Select>  
      <div></div>   
      <br />
      
      <div>
        <Button onClick={newCinema}>OK</Button>
      </div>
    </div>
  )
}

export default AddCinema
