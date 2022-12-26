import { Button, DatePicker, Input, Modal, Select } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import "../Users/ListUser/ListUser.css"
import moment from 'moment';
const {Option}= Select

const ListDiscount = (props) => {
    const [idDiscount, setIdDiscount]= useState()
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
            url: "http://localhost:8080/discount/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
  const deleteDiscount= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/discount/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    swal("Congratulations", "You have successfully deleted the discount code", "success")
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
          <td>Start day</td>
          <td>End date</td>
          <td>Apply</td>
          <td>Discount (%)</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody className={"t-body-item"}>
        {
          data?.map((item, key)=> <tr className={"fzjldjlksjakaas"} key={key}>
            <td className={"td-item"}>{moment(item?.dateStart).format("HH:mm DD-MM-YYYY")}</td>
            <td className={"td-item"}>{moment(item?.dateEnd).format("HH:mm DD-MM-YYYY")}</td>
            <td className={"td-item"}>{item.movieName}</td>
            <td className={"td-item"}>{item.percent}</td>
            <td className={"td-item"}>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdDiscount(item.id)
                }}>Edit</Button>
                <Button onClick={()=> {
                  deleteDiscount(item.id);
                  swal("Congratulations", "You have successfully deleted this room", "success")
                }}>Delete</Button>
              </div>
            </td>
          </tr>)
        }
        {
          data?.length <=0 && <tr>
            <td colSpan={5} style={{textAlign: "center", padding: 10}}>
There are no records yet</td>
          </tr>
        }
      </tbody>
    </table>
    {
      isModalOpen=== true && 
      <InfoRoomDetail idDiscount={idDiscount} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} />
    } 
    </>
  )
}

const InfoRoomDetail= (props)=> {
  const [data, setData]= useState()
  const [newData, setNewData]= useState()
  const [film, setFilm]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/discount/detail/"+ props?.idDiscount,
        method: "get",
      })
      const result= await res.data
      const {movieName, ...newResult}= result
      setNewData(newResult)
      return setData(result)
    })()
  }, [props?.idDiscount])
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
  const updateDiscount= async()=> {
    const res= await axios({
      url: "http://localhost:8080/discount/update/"+  props?.idDiscount,
      method: "patch",
      data: {
        ...newData
      }
    })
    const result= await res.data
    swal("Congratulations", "You have successfully updateed a discount", "success")
    .then(()=> window.location.reload())
    return console.log(result)
  }
  return (
    <Modal title="Edit info discount" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateDiscount()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Start day</div>
      <DatePicker style={{width: '100%'}} showTime format={"YYYY-MM-DD HH:mm:ss"} value={moment(newData?.dateStart)} onChange={(e)=> setNewData(prev=> ({...prev, dateStart: e}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>End date</div>
      <DatePicker style={{width: '100%'}} showTime format={"YYYY-MM-DD HH:mm:ss"} value={moment(newData?.dateEnd)} onChange={(e)=> setNewData(prev=> ({...prev, dateEnd: e}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Apply</div>
      <Select style={{width: "100%"}} value={data?.movieName} onChange={(e)=> {
        setNewData(prev=> ({...prev, filmId: e}))
        setData(prev=> ({...prev, movieName: e}))
      }}>
        {
          film?.map((item, key)=> <Option key={key} value={item.id}>{item.movieName}</Option>)
        }
      </Select>
      <br />
      <div className={"label-item"} style={{marginBottom: 8}}>Discount (%)</div>
      <Input value={newData?.percent} onChange={(e)=> setNewData(prev=> ({...prev, percent: e.target.value}))} />
    </Modal>
  )
}

export default ListDiscount
