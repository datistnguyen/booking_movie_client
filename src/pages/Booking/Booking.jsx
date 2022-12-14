import React, { useEffect, useState } from 'react'
import "./Booking.sass"
import {TfiTimer} from "react-icons/tfi"
import { NavLink, Route, Routes, useParams } from 'react-router-dom'
import BookingComponent from './BookingComponent/BookingComponent'
import ShowTimes from './BookingComponent/ShowTimes'
import BuyTickets from './BookingComponent/BuyTickets'
import axios from 'axios'
import { useMemo } from 'react'

const Booking = (props) => {
  const [data, setData]= useState([])
  const [cluster, setCluster]= useState([])

  const idFilm= useMemo(()=> window.location.pathname.split("/")[parseInt(window.location.pathname.split("/").length) - 1], [])
  useEffect(()=> {
    (async()=> {
        const res= await axios({
            url: "http://localhost:8080/film/detail/film",
            method: "get",
            params: {
                id: idFilm
            }

        })
        const result= await res.data
        setCluster(result.cluster)
        return setData(result.data)


    })()
  }, [idFilm])
  return (
    <div className={"fjksdjksjklasjkasd"} style={{position: "relative", top: 60, width: '100%', background: "#212121"}}>
        <Banner data={data} />
        <Navigation idFilm={idFilm} />
        <br />
        <Routes>
            <Route path={"/movie-information/:idFilm"} element={<BookingComponent data={data} />} />
            <Route path={"/showtimes/:idFilm"} element={<ShowTimes />} />
            <Route path={"/buy-ticket/:idFilm"} element={<BuyTickets data={data} cluster={cluster} />} />
        </Routes>
    </div>
  )
}

const Banner= (props)=> {
    return (
        <div className={"dskdhjjdjkljaksasas"} style={{width: "100%", height: 130, backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url(${props?.data?.img})`}}>
            <div className="dsjkdajksjkldass">{props?.data?.movieName}</div>
            <div className={"dkskdjakdjsklass"}></div>
            <div className={"dkskdjakdjsklass"}>{props?.genre}</div>
            <div className={"dfkjsldjkjklsdds"} >
                <TfiTimer /> {props?.data?.state}phút
            </div>
        </div>
    )
}

const Navigation= (props)=> {
    return (
        <div className={"kjdsjkdjsakljdsas"}>
            <div className={"fskdsjdkjaskalsjas"}>
                <NavLink className={({isActive})=> isActive ? "jfdklfdkjssdsafsd" : "sfdljhdjkhdjkashajkwa"} to={"/booking/movie-information/"+ props?.idFilm} style={{height: "100%", marginRight: 12, display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Thông tin phim
                </NavLink>
                {/* <NavLink className={({isActive})=> isActive ? "jfdklfdkjssdsafsd" : "sfdljhdjkhdjkashajkwa"} to={"/booking/showtimes/"+ props?.idFilm} style={{height: "100%", margin: "0 12px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Lịch chiếu
                </NavLink> */}
                {/* <NavLink className={({isActive})=> isActive ? "jfdklfdkjssdsafsd" : "sfdljhdjkhdjkashajkwa"} to={"/booking/news/"+ props?.idFilm} style={{height: "100%", margin: "0 12px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Tin tức
                </NavLink> */}
                <NavLink className={({isActive})=> isActive ? "jfdklfdkjssdsafsd" : "sfdljhdjkhdjkashajkwa"} to={"/booking/buy-ticket/"+ props?.idFilm} style={{height: "100%", margin: "0 12px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    Mua vé
                </NavLink>
            </div>
        </div>
    )
}

export default Booking
