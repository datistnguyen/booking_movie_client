import axios from "axios";
import moment from "moment";
import React, { useState, useEffect } from "react";
import {BsPlayCircle} from "react-icons/bs" 
import OutsideClickHandler from "react-outside-click-handler";
// import { Link } from 'react-router-dom'

const FilmHot = (props) => {
  const [trailer, setTrailer]= useState("")
  const [data, setData] = useState([]);
  const [open, setOpen]= useState(false)
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: "http://localhost:8080/film/",
        method: "get",
      });
      const result = await res.data;
      return setData(result);
    })();
  }, []);
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
        {data?.map((item, key) => (
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
                <div style={{ fontSize: 16, fontWeight: 600 }}>
                  {item?.movieName}
                </div>
                <br />
                <div style={{ fontSize: 13, color: "#a1a1a1" }}>
                Premiere date:{" "}
                  {moment(item?.dateStart).format("DD/MM/YYYY HH:mm:ss A")}
                </div>
                <br />
                <div
                  className={"film-c-desc"}
                  style={{ overflow: "hidden", width: "100%" }}
                >
                  Description: {item?.desc}
                </div>
              </div>
              <div style={{height: 200, aspectRatio: 2 / 3, position: "relative", cursor: "pointer"}}>
                <img style={{width: '100%'}} src={item.img} alt="" />
                <div onClick={()=> {
                  setTrailer(item?.trailer)
                  setOpen(true)
                }} className="c-flex-center" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                  <BsPlayCircle style={{width: 36, color :"#fff", height: 36}} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {
        open=== true &&
          <Trailer setOpen={setOpen} trailer={trailer} />
      }
    </div>
  );
};

const Trailer= (props)=> {
  return (
    <div style={{width: "100%", height: '100%', position: "fixed", top: 0, left: 0, background: "rgba(0, 0,0,0.3"}} className={"c-flex-center"}>
      <OutsideClickHandler onOutsideClick={()=> props?.setOpen(false)}>
        <div className={"c-flex-center"} style={{width: 729, height: 500}}>
          <iframe title={"Trailer"} width="729" height="500" src={props?.trailer} allowFullScreen></iframe>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default FilmHot;
