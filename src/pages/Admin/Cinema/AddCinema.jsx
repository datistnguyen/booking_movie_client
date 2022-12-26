import { Button, Input, Select } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
const {Option}= Select
const AddCinema = () => {
  const navigate= useNavigate()
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
    swal("Congratulations", "You have successfully created a theater", "success")
    .then(()=> navigate("/admin/cinema"))
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Theater name
      </div>
      <Input value={cinema.cinemaName} onChange={(e)=> setCinema(prev=> ({...prev, cinemaName: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Address
      </div>
      <Input value={cinema.address} onChange={(e)=> setCinema(prev=> ({...prev, address: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Picture
      </div>
      <Input value={cinema.img} onChange={(e)=> setCinema(prev=> ({...prev, img: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
      Cluster of theaters
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
