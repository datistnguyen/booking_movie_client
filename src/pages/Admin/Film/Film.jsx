import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"
import "./Film.sass"

const ListFilm = (props) => {
    const [idFilm, setIdFilm]= useState()
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
            url: "http://localhost:8080/film/",
            method: "get",
        })
        const result= await res.data
        return setData(result)
      })()
    }, [])
    // eslint-disable-next-line
    const deleteUser= async (id)=> {
    const res= await axios({
      url: "http://localhost:8080/film/delete/"+ id,
      method: "delete"
    })
    const result= await res.data
    setData(data?.filter(item=> parseInt(item.id) !== parseInt(id)))
    return console.log(result)
  }
  return (
    <>
      <div style={{display: "flex", justifyContent:" center", alignItems: "center"}}>
        <Input placeholder={"Tìm kiếm film"} />
        <div style={{width: 32, height: 32, display: "flex", justifyContent: "center", alignItems: "center", background: "#fff", cursor: "pointer"}}>
            <AiOutlineSearch style={{width: 20, height: 20}} />
        </div>
      </div>
      <br />
      <table style={{width: '100%', background: "#fff"}}>
      <thead>
        <tr className={"title-table-data-list-film"}>
          <td>Tên phim</td>
          <td>Mô tả</td>
          <td>Giá</td>
          <td>Quốc gia</td>
          <td>Diễn viên</td>
          <td>Đạo diễn</td>
          <td>Nhà sản xuất</td>
          <td>Thể loại</td>
          <td>Độ tuổi</td>
          <td>Thời lượng</td>
          <td>Trailer</td>
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item, key)=> <tr className={"item-table-data-film"} key={key}>
            <td>{item.movieName}</td>
            <td>{item.desc}</td>
            <td>{item.price}</td>
            <td>{item.country}</td>
            <td>{item.actor}</td>
            <td>{item.director}</td>
            <td>{item.flimStudio}</td>
            <td>{item.genre}</td>
            <td>{item.limitAge}</td>
            <td>{item.state}</td>
            <td>{item.trailer}</td>
            <td>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdFilm(item.id)
                }}>Chỉnh sửa</Button>
                <Button onClick={()=> {
                  deleteUser(item.id);
                  swal("Chúc mừng", "Bạn đã xóa tài khoản này thành công", "success")
                }}>Xóa</Button>
              </div>
            </td>
          </tr>)
        }
        {
          data?.length <=0 && <tr>
            <td colSpan={5} style={{textAlign: "center", padding: 10}}>Không có bản ghi nào</td>
          </tr>
        }
      </tbody>
    </table>
    {isModalOpen=== true && <InfoDetailFilm idFilm={idFilm} isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel}/>}
    </>
  )
}

const InfoDetailFilm= (props)=> {
  const [data, setData]= useState()
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/film/detail/film",
        method: "get",
        params: {
          id: props?.idFilm
        }
      })
      const result= await res.data
      return setData(result.data)
    })()
  }, [props?.idFilm])
  const updateUser= async()=> {
    const res= await axios({
      url: "http://localhost:8080/film/update/"+ props?.idFilm,
      method: "patch",
      data: {
        ...data
      }
    })
    const result= await res.data
    window.location.reload()
    return console.log(result)
  }
  return (
    <Modal title="Sửa thông tin người dùng" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateUser()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Tên phim</div>
      <Input value={data?.movieName} onChange={(e)=> setData(prev=> ({...prev, movieName: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Mô tả</div>
      <Input value={data?.desc} onChange={(e)=> setData(prev=> ({...prev, desc: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Giá</div>
      <Input value={data?.price} onChange={(e)=> setData(prev=> ({...prev, price: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Quốc gia</div>
      <Input value={data?.country} onChange={(e)=> setData(prev=> ({...prev, country: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Diễn viên</div>
      <Input value={data?.actor} onChange={(e)=> setData(prev=> ({...prev, actor: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Đạo diễn</div>
      <Input value={data?.director} onChange={(e)=> setData(prev=> ({...prev, director: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Nhà sản xuất</div>
      <Input value={data?.flimStudio} onChange={(e)=> setData(prev=> ({...prev, flimStudio: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Thể loại</div>
      <Input value={data?.genre} onChange={(e)=> setData(prev=> ({...prev, genre: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Độ tuổi</div>
      <Input value={data?.limitAge} onChange={(e)=> setData(prev=> ({...prev, limitAge: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Thời lượng</div>
      <Input value={data?.state} onChange={(e)=> setData(prev=> ({...prev, state: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Trailer</div>
      <Input value={data?.trailer} onChange={(e)=> setData(prev=> ({...prev, trailer: e.target.value}))} />

    </Modal>
  )
}

export default ListFilm
