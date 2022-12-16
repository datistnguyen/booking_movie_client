import { Button, Input } from 'antd'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
const AddCluster = () => {
  const [cluster, setCluster]= useState({
    ClusterName: "",
    address: "",
    img: "",
  })
  const newCinema= async ()=> {
    const res= await axios({
        url: "http://localhost:8080/cluster/create",
        method: "post",
        data: {
            ...cluster
        }
    })
    const result= await res.data
    return window.location.reload()
  }
  return (
    <div className={"add-film-page"}>
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Tên cụm rạp
      </div>
      <Input value={cluster.ClusterName} onChange={(e)=> setCluster(prev=> ({...prev, ClusterName: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Địa chỉ
      </div>
      <Input value={cluster.address} onChange={(e)=> setCluster(prev=> ({...prev, address: e.target.value}))} />
      <br />
      <div className={"label-add-film-page"}  style={{marginBottom: 6}}>
        Hình ảnh
      </div>
      <Input value={cluster.img} onChange={(e)=> setCluster(prev=> ({...prev, img: e.target.value}))} />
      <br />
      <div></div>   
      <br />
      <div>
        <Button onClick={newCinema}>OK</Button>
      </div>
    </div>
  )
}

export default AddCluster
