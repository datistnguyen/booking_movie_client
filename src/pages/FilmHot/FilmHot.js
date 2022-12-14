import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FilmHot(props) {
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
  return (
    <div style={{width: "100%", display: "flex", alignItems: "center", flexWrap: "wrap", position: "relative", top: 60, padding: 20, background: "#212121"}}>
      {
        data?.map((item, key)=> <div key={key} style={{width: "20%", padding: 10}}>
            <div style={{width: "100%"}}>
              <img src={item?.img} alt="" style={{width: "100%", aspectRatio: 2 / 3, objectFit: "cover"}} />
              <div title={item.movieName} style={{color: "#fff", width: '100%', overflow: "hidden", textOverflow: "ellipsis", fontSize: 18}}>{item.movieName}</div>
              <Link to={"/booking/movie-information/"+ item?.id}>
                <div style={{padding: "6px 8px", background: "red", borderRadius: 5, cursor: "pointer", color: "#fff", width: "max-content"}}>
                  Đặt vé
                </div>
              </Link>
            </div>
        </div>)
      }
    </div>
  )
}
