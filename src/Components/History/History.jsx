import axios from 'axios'
import moment from 'moment';
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import _ from "lodash"

const History = (props) => {
  const { userLogin } = useSelector((state) => state.UserManageReducer);
  const [history, setHistory]= useState([])
  useEffect(()=> {
    (async ()=> {
        const res= await axios({
            url: "http://localhost:8080/auth/history",
            method: "get",
            params: {
                userId: userLogin?.id
            }
        })
        const result= await res.data
        return setHistory(Object.values(_.mapValues(_.groupBy(result, "id_book"), clist => clist.map(car => _.omit(car, 'id_book')))))
    })()
  }, [userLogin?.id])
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          position: "relative",
          top: 60,
          padding: 20,
          background: "#212121",
          color: "#fff"
        }}
      >
        {history?.map((item, key) => (
          <div key={key} style={{ width: "50%", padding: 20 }}>
            <div
              className={"list-f"}
              style={{
                width: "100%",
                padding: 16,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#131313",
                borderRadius: 5
              }}
            >
              <div style={{height: 200}}>
                <div style={{ fontSize: 16, fontWeight: 600 , marginBottom: 12}}>
                  {item?.[0]?.movieName}
                </div>
                <div style={{ fontSize: 13, color: "#a1a1a1", marginBottom: 12 }}>
                    Giờ chiếu:{" "}
                  {moment(item?.timeStart).format("DD/MM/YYYY HH:mm:ss A")}
                </div>
                <div
                  className={"film-c-desc"}
                  style={{ overflow: "hidden", width: "100%", marginBottom: 12 }}
                >
                  Địa điểm: {item?.[0]?.address}
                </div>
                <div
                  className={"film-c-desc"}
                  style={{ overflow: "hidden", width: "100%", marginBottom: 12 }}
                >
                  Tên rạp: {item?.[0]?.cinemaName}
                </div>
                <div
                  className={"film-c-desc"}
                  style={{ overflow: "hidden", width: "100%", marginBottom: 12 }}
                >
                  Ghế: {item?.map((item1, key)=> <Fragment key={key}>[{item1?.seatIndex}]&nbsp;</Fragment>)}
                </div>
              </div>
              <div style={{height: 200, aspectRatio: 2 / 3, position: "relative", cursor: "pointer"}}>
                <img style={{width: '100%'}} src={item?.[0]?.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default History