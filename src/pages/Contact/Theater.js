import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Contact(props) {
  const [data, setData]= useState([])
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/cluster/",
        method: "get",

      })
      const result= await res.data
      setData(result)
    })()
  }, [])
  return (
    <div>
      <div style={{ marginTop: "60px", color: "white", paddingTop: 35 }}>
        <div className="row">
          {
            data.map((item, key)=> <div key={key} className="col-6">
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      style={{ height: "200px", width: 200, objectFit: "cover", borderRadius: "50%"}}
                      src={item?.img}
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <span style={{ fontSize: 20, fontWeight: 600 }}>
                        Tên Rạp: {item?.ClusterName}
                      </span>
                      <br />

                      <span>
                        -{" "}
                        <span>Địa Chỉ: {item?.address}</span>
                        <div></div>
                        <br />
                        <div style={{fontWeight: 600, fontSize: 20}}>Các rạp phim: </div>
                        <br />
                        {
                          item?.Cinemas?.map((item, key)=> <div key={key}>
                            <div>Tên: {item.cinemaName}</div>
                            <div>Địa chỉ: {item.address}</div>
                          </div>)
                        }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
          </div>)
          }
          
          
        </div>  
      </div>
    </div>
  );
}
