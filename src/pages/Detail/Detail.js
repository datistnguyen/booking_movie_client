import React, { useEffect } from "react";
import "../Detail/Detail.css";
import "../../assets/css/style.css";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";

import moment from "moment";
import { StarOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
import { getAllMovieSchedule } from "../../Redux/Actions/CinemaManageAction";
const { TabPane } = Tabs;
export default function Detail(props) {
  const filmDetail = useSelector((state) => state.FilmManageReducer)
    .filmDetail[0];
  console.log("Detail", filmDetail);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    console.log("id", id);
    dispatch(getAllMovieSchedule(id));
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${filmDetail.img})`,

        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="detail " style={{ marginTop: "60px" }}>
        <div className="container">
          <div className="row">
            <div className="img-left col-8">
              <div className="row bg-all">
                <div className="col-6 bg">
                  <img src={filmDetail.img} alt="" />
                </div>
                <div className="col-6 " style={{}}>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "bolder",
                      color: "palegreen",
                    }}
                  >
                    Tên Phim: {filmDetail.movieName}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "bolder",
                      color: "palegreen",
                    }}
                  >
                    Mã Phim: 1
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "bolder",
                      color: "palegreen",
                      width: "120%",
                    }}
                  >
                    Mô Tả: Phim hay và nổi tiếng các bạn nên đón xem
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      fontWeight: "bolder",
                      color: "palegreen",
                    }}
                  >
                    Giờ Chiếu: {moment().format("DD/MM/YYYY")}{" "}
                  </p>
                  <button className="btn btn-success">
                    <a
                      style={{ color: "white", textDecoration: "none" }}
                      href="#lichchieu"
                    >
                      Đặt Vé
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="animate col-4 mt-5 ">
              <div>
                <div className="inner-content text-center">
                  <div className="c100 p50 big center green">
                    <span>50%</span>
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </div>
              </div>
              <p
                style={{
                  position: "absolute",
                  left: "27px",
                  top: "30px",
                  color: "chocolate",
                }}
              ></p>

              <div
                className="start"
                style={{
                  marginTop: 75,
                  marginLeft: 100,
                  fontSize: 27,
                  color: "yellow",
                }}
              >
                <Rate allowHalf />
              </div>
            </div>
          </div>

          <div style={{ paddingBottom: "30px", marginTop: 10 }}>
            <Tabs defaultActiveKey="1" centered>
              <TabPane tab="Lịch Chiếu" key={1}>
                <div id="lichchieu">
                  <Tabs
                    tabPosition={"left"}
                    style={{
                      width: "100%",
                      marginTop: "-16px",
                      border: "solid 1px #f7f8f9",
                      borderRadius: 5,
                      backgroundColor: "#f7f8f9",
                    }}
                    className="htr"
                  >
                    <TabPane
                      tab={
                        <div>
                          <img
                            style={{ width: 50, height: 50 }}
                            src="https://movienew.cybersoft.edu.vn/hinhanh/cgv.png"
                          ></img>
                          <p className="text">
                            L3-Bitexco Icon 68, 2 Hải Triều, Q.1
                          </p>
                        </div>
                      }
                    >
                      <div>
                        <div className="row">
                          <div className="col-12 d-flex mt-3">
                            <img
                              style={{ width: "10%", height: "90px" }}
                              src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png"
                              alt=""
                            />
                            <div>
                              <div
                                style={{
                                  color: "crimson",
                                  paddingLeft: "30px",
                                  fontSize: "20px",
                                }}
                              >
                                <div className="text-left ml-2">
                                  BHD Star Cineplex - Bitexco
                                </div>
                              </div>
                              <p
                                className="mt-2"
                                style={{
                                  color: "crimson",
                                  paddingLeft: "30px",
                                  fontSize: "15px",
                                  width: "85%",
                                }}
                              >
                                Tầng 4-5, Saigonres Plaza, 79/81 Nguyễn Xí, P.
                                26, Bình Thạnh
                              </p>
                            </div>
                          </div>

                          <div className="mt-1 px-3">
                            <NavLink to={`/checkout/id`}>
                              <div style={{ color: "black", fontSize: "20px" }}>
                                {moment().format("hh:mm A")}
                              </div>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </TabPane>

              <TabPane tab="Thông Tin" key={2}>
                <div className="row mt-3 text-light">
                  <div className="col-6 px-5">
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "bolder",
                        color: "white",
                      }}
                    >
                      Tên Phim:
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "bolder",
                        color: "white",
                      }}
                    >
                      Mã Phim:{" "}
                    </p>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "bolder",
                        color: "white",
                      }}
                    >
                      Giờ Chiếu: {moment().format("hh:mm A")}{" "}
                    </p>
                  </div>
                  <div className="col-6">
                    <h3
                      style={{
                        fontSize: "15px",
                        fontWeight: "bolder",
                        color: "white",
                        width: "90%",
                      }}
                    >
                      Mô Tả: {}
                    </h3>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Đánh Giá" key={3}>
                <div className="d-flex justify-content-center mt-4">
                  <p className="mt-2" style={{ fontSize: "25px" }}>
                    Đánh Giá :
                  </p>
                  <button
                    className="start d-flex mt-3"
                    style={{ marginLeft: 100, color: "yellow" }}
                  >
                    <img width={20} src="../img/star.png" allowHalf />
                    <img width={20} src="../img/star.png" allowHalf />
                    <img width={20} src="../img/star.png" allowHalf />
                    <img width={20} src="../img/star.png" allowHalf />
                    <img width={20} src="../img/star.png" allowHalf />
                  </button>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
