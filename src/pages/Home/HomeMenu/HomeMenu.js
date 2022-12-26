import React, { useState, Fragment } from "react";
import { Tabs } from "antd";
import "../HomeMenu/HomeMenu.css";
// import {NavLink}  from 'react-router-dom'
import moment from "moment";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

export default function HomeMenu(props) {
  const navigate= useNavigate()
  const [tabPosition, setTabPosition] = useState("left");
  // eslint-disable-next-line
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  // const navigate= useNavigate()
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
          <Tabs style={{overflow: "hidden"}} className={"list-film-c"} tabPosition={tabPosition}>
            {cluster.Cinemas.map((Cinemas, index) => {
              return (
                <TabPane
                  className="list-film-w-c scrollbar style-1"
                  style={{maxHeight: 500, overflow: "auto"}}
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
                        style={{ overflow: "hidden", textOverflow: "ellipsis",color :"#fff" }}
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
                          style={{ display: "flex", paddingBottom: "20px", marginRight: 24, borderBottom: "1px solid #fff"}}
                        >

                          <div className="d-flex" style={{boxSizing: "border-box"}}>
                            <img
                              style={{
                                width: "80px",
                                aspectRatio: 2 / 3,
                                objectFit: "contain",
                                borderRadius: 5
                              }}
                              src={Films.img}
                              alt=""
                            />
                            <div className="ml-2 " style={{flex: "1 1 0"}}>
                              <h1 style={{ color: "green", fontWeight: "700", fontSize: 20 }}>
                                {Films.movieName}
                              </h1>
                              <p className="text">{Films.country}</p>
                              <div className="grid grid-cols-6 gap-6">
                                {/* <p
                                  style={{ whiteSpace: "nowrap" }}
                                  className="time"
                                >
                                  {moment(Films.dateEnd).format("DD-MM-YYYY")}
                                </p> */}
                                <div></div>
                              </div>
                              <div className={"fjdasjdkljdkass"} style={{display: "flex", alignItems:" center", gap: 16}}>

                                <div style={{display: "flex", alignItems: "center", gap: 12}}>
                                  {
                                    Films?.PlayTimes?.filter(item=> moment(item?.timeStart, "YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY") === moment(new Date()).format("DD-MM-YYYY") && moment(item?.timeStart, "YYYY-MM-DD HH:mm:ss").valueOf() >= moment(new Date()).valueOf())?.map((item, key)=> <>
                                     {
                                      moment(new Date()).valueOf() <= moment(item.timeStart).valueOf() &&
                                    <span onClick={() =>
                                      navigate(
                                        "/book/choose-chair/" + item?.filmId + "/" + Cinemas?.id,
                                        { state: { timeStart: item?.timeStart, id_cinema: Cinemas?.id, playTimeId: item?.id} }
                                      )
                                    } key={key} style={{padding: 10, borderRadius: 80, cursor: "pointer", background: "#3a3b3c", color: "#fff"}}>
                                      {  moment(item.timeStart).format("HH:mm:ss")}
                                    </span>
                                     } 
                                    </>
                                    )  
                                  }
                                </div>
                                
                              </div>
                              
                            </div>
                          </div>
                        </div>
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
        Schedule
      </h1>
      <Tabs
        tabPosition={tabPosition}
        style={{
          width: "100%",
          border: "solid 1px #f7f8f9",
          borderRadius: 10,
          marginBottom: "70px",
        }}
      >
        {renderCinema()}
      </Tabs>
    </>
  );
}
