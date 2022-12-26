import { Button, Input, Modal } from 'antd';
import axios from 'axios';
import React, { Fragment } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import swal from 'sweetalert';
import {AiOutlineSearch} from "react-icons/ai"
import "./Film.sass"
import moment from 'moment';

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
    const deleteFilm= async (id)=> {
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
      <table style={{width: '100%', background: "#fff", overflow: "auto"}}>
      <thead>
        <tr className={"title-table-data-list-film"}>
          <td>Movie's name</td>
          <td>Describe</td>
          <td>Price</td>
          <td>Nation</td>
          <td>Actor</td>
          <td>Director</td>
          <td>Studio</td>
          <td>Genre</td>
          <td>Age</td>
          <td>Time</td>
          <td>
Belonging to the theater</td>
          <td>
Belonging to the room</td>
          <td>Showtimes</td>
          {/* <td>Trailer</td> */}
          <td style={{textAlign: "center"}}>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((item, key)=> <tr className={"item-table-data-film"} key={key}>
            <td>{item.movieName}</td>
            <td>
              <div className={"desc-over"} style={{maxHeight: 150, overflow: "hidden", width: 200}}>
                {item.desc}
              </div>
            </td>
            <td>{item.price}</td>
            <td>{item.country}</td>
            <td>{item.actor}</td>
            <td>{item.director}</td>
            <td>{item.flimStudio}</td>
            <td>{item.genre}</td>
            <td>{item.limitAge}</td>
            <td>{item.state}</td>
            <td>{item?.Cinema?.cinemaName}</td>
            <td>{item?.Cinema?.Rooms?.map(item=> <Fragment key={key}>{item.RoomName}{parseInt(key) === item?.Cinema?.Rooms?.length - 1 ? "" : ","}</Fragment>)}</td>
            <td>{item?.PlayTimes?.map(item=> <div key={key}>{moment(props?.timeStart).format("DD-MM-YYYY HH:mm:ss")}{parseInt(key) === item?.PlayTimes?.length - 1 ? "" : ""}</div>)}</td>
            <td>
              <div style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 20}}>
                <Button onClick={()=> {
                  showModal()
                  setIdFilm(item.id)
                }}>Edit</Button>
                <Button onClick={()=> {
                  deleteFilm(item.id);
                  swal("Congratulations", "You have successfully deleted this movie", "success")
                }}>Delete</Button>
              </div>
            </td>
          </tr>)
        }
        {
          data?.length <=0 && <tr>
            <td colSpan={5} style={{textAlign: "center", padding: 10}}>There are no records yet</td>
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
  const updateFilm= async()=> {
    const res= await axios({
      url: "http://localhost:8080/film/update/"+ props?.idFilm,
      method: "patch",
      data: {
        ...data
      }
    })
    const result= await res.data
    swal("Congratulations", "You have successfully updated the movie", "success")
    .then(()=> window.location.reload())
    return console.log(result)
  }
  return (
    <Modal title="Edit movie information" open={props?.isModalOpen} onOk={()=> {
      props?.handleOk()
      updateFilm()
    }} onCancel={props?.handleCancel}>
      <div className={"label-item"} style={{marginBottom: 8}}>Movie's name</div>
      <Input value={data?.movieName} onChange={(e)=> setData(prev=> ({...prev, movieName: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>
Describe</div>
      <Input value={data?.desc} onChange={(e)=> setData(prev=> ({...prev, desc: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Price</div>
      <Input value={data?.price} onChange={(e)=> setData(prev=> ({...prev, price: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Nation</div>
      <Input value={data?.country} onChange={(e)=> setData(prev=> ({...prev, country: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Actor</div>
      <Input value={data?.actor} onChange={(e)=> setData(prev=> ({...prev, actor: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Director</div>
      <Input value={data?.director} onChange={(e)=> setData(prev=> ({...prev, director: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Studio</div>
      <Input value={data?.flimStudio} onChange={(e)=> setData(prev=> ({...prev, flimStudio: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Genre</div>
      <Input value={data?.genre} onChange={(e)=> setData(prev=> ({...prev, genre: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Age</div>
      <Input value={data?.limitAge} onChange={(e)=> setData(prev=> ({...prev, limitAge: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Time</div>
      <Input value={data?.state} onChange={(e)=> setData(prev=> ({...prev, state: e.target.value}))} />
      <div className={"label-item"} style={{marginBottom: 8}}>Trailer</div>
      <Input value={data?.trailer} onChange={(e)=> setData(prev=> ({...prev, trailer: e.target.value}))} />

    </Modal>
  )
}

export default ListFilm
