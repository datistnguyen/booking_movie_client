import React, { useState, Fragment } from "react";
import { Tabs } from "antd";
import "../HomeMenu/HomeMenu.css";
// import {NavLink}  from 'react-router-dom'
import moment from "moment";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  console.log("cinema", props);
  const [tabPosition, setTabPosition] = useState("left");
  // eslint-disable-next-line
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const navigate= useNavigate()
  const renderCinema = () => {
    
    return props.arrCinema.map((cluster, index) => {
      return (
        <TabPane
          tab={
            <img
              alt=""
              src={cluster.img}
              className="rounded-full"
              width="50"
              style={{ width: 50, height: 50, objectFit: "cover" }}
            />
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {cluster.Cinemas.map((Cinemas, index) => {
              console.log(Cinemas.cinemaName, "list");
              return (
                <TabPane
                  tab={
                    <div style={{ width: "300px", display: "flex" }}>
                      <img
                        style={{ width: 50, height: 50, objectFit: " cover" }}
                        alt=""
                        src={cluster.img}
                        className="rounded-full"
                        width="50"
                      />
                      <div
                        title={`${Cinemas.cinemaName}-${Cinemas.address}`}
                        className="text-left ml-2"
                        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                      >
                        {Cinemas.cinemaName}-{Cinemas.address}
                        <p style={{ color: "red" }}>chi tiết</p>
                      </div>
                    </div>
                  }
                  key={index}
                >
                  {Cinemas.Films?.slice(0, 5).map((Films, index) => {
                    return (
                      <Fragment key={index}>
                        <div
                          className="my-2"
                          style={{ display: "flex", paddingBottom: "20px" }}
                        >
                          <div className="d-flex">
                            <img
                              style={{
                                width: "150px",
                                height: "180px",
                                objectFit: "contain",
                              }}
                              src={Films.img}
                              alt=""
                            />
                            <div className="ml-2 ">
                              <h3 style={{ color: "green", fontWeight: "700" }}>
                                {Films.movieName}
                              </h3>
                              <p className="text">{Films.country}</p>
                              <div className="grid grid-cols-6 gap-6">
                                <p
                                  style={{ whiteSpace: "nowrap" }}
                                  className="time"
                                >
                                  {moment(Films.dateEnd).format("DD-MM-YYYY")}
                                </p>
                                <div></div>
                              </div>
                              <div className={"fjdasjdkljdkass"} style={{display: "flex", alignItems:" center", gap: 16}}>
                                <button
                                  onClick={()=> navigate("/booking/movie-information/"+ Films.id)}
                                  style={{
                                    padding: "10px",
                                    borderRadius: 5,
                                    background: "#2e89ff",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Xem thông tin phim
                                </button>
                                <button
                                  style={{
                                    padding: "10px",
                                    borderRadius: 5,
                                    background: "#f00",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Mua vé
                                </button>
                                
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        <hr />
                      </Fragment>
                    );
                  })}
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "45px",
          fontFamily: "ui-monospace",
          fontWeight: 800,
          color: "white",
          marginTop: "90px",
          marginBottom: "30px",
        }}
      >
        LỊCH CHIẾU
      </h1>
      <Tabs
        tabPosition={tabPosition}
        style={{
          width: "100%",
          border: "solid 1px #f7f8f9",
          borderRadius: 15,
          marginBottom: "70px",
        }}
      >
        {renderCinema()}
      </Tabs>
    </>
  );
}
