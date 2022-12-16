import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const InfoTicket = () => {
    const {idBook}= useParams()
    const [data, setData]= useState()
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8080/book/ticket/detail",
                method: "get",
                params: {
                  id_book: idBook
                }
            })
            const result= await res.data
            return setData(result)
        })()
    }, [idBook])
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  return (
    <div
      className={"dfjskldjsklfjkldssa"}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: 10,
      }}
    >
        <div
        className={"fjlkdjklgjkfldssdasas"}
        style={{
          width: "calc(100% / 3 * 2)",
          padding: 10,
          background: "#fff",
          borderRadius: 5,
        }}
      >
        <div className={"zjfjsdksljdkasafsd"} style={{textAlign: "center", fontWeight: 600, fontSize: 20}}>
            Chúc mừng bạn đã đặt vé thành công
        </div>
        <br />
        <br />
        <div className={"zjfjsdksljdkasafsd"} style={{textAlign: "center", fontWeight: 600, fontSize: 16}}>
            {data?.cinemaName}
        </div>
        <br />
        <div className={"zjfjsdksljdkasafsd"} style={{textAlign: "center", fontWeight: 600, fontSize: 16}}>
            {data?.address}
        </div>
      </div>
      <div
        className={"fjddjskldjskljasklasas"}
        style={{ width: "calc(100% / 3)" }}
      >
        <div
          className={"jdfjhldjiaoehjas"}
          style={{
            width: "100%",
            padding: 10,
            background: "#fff",
            borderRadius: 5,
          }}
        >
            <div style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>{data?.movieName}</div>
            <div style={{fontSize: 16, fontWeight: 600, marginBottom: 12}}>{data?.cinemaName}</div>
            <div style={{fontSize: 16, marginBottom: 12}}>
                Suất: <strong>{moment(data?.timeStart).format("HH:mm")}</strong> - {moment(data?.timeStart).format("dddd")}, <strong>{moment(data?.timeStart)?.format("DD/MM")}</strong>
            </div>
            <div style={{fontSize: 16, marginBottom: 12}}>
                Phòng chiếu: <strong>{data?.RoomName}</strong> - Ghế: {data?.seat?.map((item, key)=> <strong key={key}>{item.seatIndex}{parseInt(key) === data?.seat.length - 1 ? "" : ","}</strong>)}
            </div>

        </div>
        <br />
        <div
          className={"jdfjhldjiaoehjas"}
          style={{
            width: "100%",
            padding: 10,
            background: "#fff",
            borderRadius: 5,
          }}
        >
            <div style={{fontSize: 16, marginBottom: 12}}>Tổng giá trị</div>
            <div style={{fontSize: 16, marginBottom: 12, fontWeight: 600}}>
                {numberWithCommas(parseInt(data?.price) * data?.seat?.length)}đ
            </div>
        </div>
      </div>    
    </div>
  )
}

export default InfoTicket
