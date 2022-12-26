import moment from 'moment'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { numberWithCommas } from './ToBooking'

const FoodAndDrink = (props) => {
  const navigate= useNavigate()

  return (
    <div className={"dfjskldjsklfjkldssa"} style={{width: "100%", display: "flex", justifyContent: "center", gap: 10}}>
            <div className={"fjlkdjklgjkfldssdasas"} style={{width: "calc(100% / 3 * 2)", padding: 10, background: "#fff", borderRadius: 5}}>
                <table className={"gfzdjdljskdljksla"} style={{width: "100%"}}>
                    <thead className={"gjlkdhjjhdjkadassa"}>
                        <tr>
                            <th>Combo</th>
                            <th>Giá tiền</th>
                            <th style={{textAlign: "center"}}>Số lượng</th>
                        </tr>
                        <tr><td style={{fontSize: 18, fontWeight: 600}} colSpan={3}>Bắp rang vùng</td></tr>
                        <tr>
                            <td>Bắp ngọt</td>
                            <td>40,000 đ</td>
                            <td>
                                <div className={"fsjkldjskldjklasa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 12}}>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        -
                                    </div>
                                    <div>0</div>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        +
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Bắp phô mai</td>
                            <td>44,000 đ</td>
                            <td>
                                <div className={"fsjkldjskldjklasa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 12}}>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        -
                                    </div>
                                    <div>0</div>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        +
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Nấm Caramel</td>
                            <td>50,000 đ</td>
                            <td>
                                <div className={"fsjkldjskldjklasa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 12}}>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        -
                                    </div>
                                    <div>0</div>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        +
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr><td style={{fontSize: 18, fontWeight: 600}} colSpan={3}>Combo</td></tr>
                        <tr>
                            <td>Bắp + Coca</td>
                            <td>79,000 đ</td>
                            <td>
                                <div className={"fsjkldjskldjklasa"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 12}}>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        -
                                    </div>
                                    <div>0</div>
                                    <div className={"fdjzldjskldjksdsd"} style={{width: 30, height: 30, borderRadius: "50%", border: "1px solid #e7e7e7", fontSize: 12, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer"}}>
                                        +
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className={"fjddjskldjskljasklasas"} style={{width: "calc(100% / 3)"}}>
                <div className={"jdfjhldjiaoehjas"} style={{width: "100%", padding: 10, background: "#fff", borderRadius: 5}}>
                    <div>{props?.detailFilm?.movieName}</div>
                    <div className={"jldfjskldjkfasas"} style={{fontSize: 15, fontWeight: 600}}>{props?.detailCinema?.cinemaName}</div>
                    <div>Suất <span className={"sgdjkldfjksldjsa"} style={{fontWeight: 600, fontSize: 15}}>21:30</span> - Hôm nay, <span className={"sgdjkldfjksldjsa"} style={{fontWeight: 600, fontSize: 15}}>09/12</span></div>
                </div>
                <br />
                <br />
                <div className={"jdfjhldjiaoehjas"} style={{width: "100%", padding: 10, background: "#fff", borderRadius: 5, display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                    <div className={"fdajklfjsakldjaks"}>
                        <div className={"fdzjdjskldjassaaws"} style={{fontSize: 14, fontWeight: 600}}>Tổng đơn hàng</div>
                        <div className={"fzjldsjkfhdjkdhsdsa"} style={{fontSize: 18, fontWeight: 600}}>{numberWithCommas(parseInt(props?.detailFilm?.price) * props?.seatBook.length) || "_"}đ</div>
                    </div>
                    <div>|</div>
                    <div className={"fdajklfjsakldjaks"} style={{direction: "rtl"}}>
                        <div className={"fdzjdjskldjassaaws"} style={{fontSize: 14, fontWeight: 600, direction: "rtl", textAlign: "right"}}>Thời gian giữ ghế</div>
                        <div className={"fzjldsjkfhdjkdhsdsa"} style={{fontSize: 18, fontWeight: 600, direction: "rtl", textAlign: "right"}}>
                            {moment.utc(moment.duration(parseInt(props?.bookTime), "seconds").as("milliseconds")).format("mm:ss")}
                        </div>
                    </div>
                </div>
                <br />
                <div onClick={()=> navigate("/book/checkout/"+ props?.idFilm+ "/"+ props?.idCinema)} className={"jdsldjskldjksldas"} style={{width: "100%", color: "#fff", backgroundColor: "#12263f", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 600, cursor: "pointer", padding: "12px 10px", fontSize: 16 }}>
                    Continue
                </div>
            </div>
        </div>
  )
}

export default FoodAndDrink
