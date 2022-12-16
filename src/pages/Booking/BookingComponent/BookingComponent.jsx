import React from 'react'
import {AiOutlineCalendar} from "react-icons/ai"
import {TfiTimer} from "react-icons/tfi"
import {BiUserCheck} from "react-icons/bi"
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
import moment from 'moment'
import { useNavigate, useParams } from 'react-router-dom'

const BookingComponent = (props) => {
  const navigate= useNavigate()
  const {idFilm}= useParams()

  return (
    <div className={"fjdkldjfklfjkslefdjsa"} style={{width: "100%"}}>
        <div className={"fjdhjskjhdjkashas"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center", backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 100%), url(${props?.data.img})`, gap: 16, padding: '20px 0'}}>
            <div className='dsldudhjkhsdajkdssa' style={{width: '100%', maxWidth: 960, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10}}>
                <div className={"fjslkadjkdsjaklsas"}>
                    <img style={{width: "200px", height: "300px", borderRadius: 5, border: '1px solid #fff'}} src={props?.data.img} alt="" />
                </div>
                <div className={"zklsdjskljklsjaasdas"} style={{flex: "1 1 0", display: 'flex', gap: 10}}>
                    <div className={"jskdjskdjkldsajssa"} style={{}}>
                        <div className={"fjdfjlajjdlsas"} style={{fontSize: 26, fontWeight: 600, color: "#fff"}}>{props?.data?.movieName}</div>
                        <div className={"fksdjkldjkldasj"}>{props?.data.genre}</div>
                        <div className={"fkdjskldjskldas"} style={{display: "flex", alignItems: "center", gap: 5}}>
                            <div className={"cvkjdsjkljsdklasas"} style={{padding: "2px 8px", fontSize: 13, color: "#fff", borderRadius: 5, border: "1px solid #fff"}}>Trailer</div>
                            <div className={"dajfhjhjhjashjas"} style={{padding: "2px 8px", fontSize: 13, color: "#fff", borderRadius: 5, border: "1px solid #fff", backgroundColor: "#e63757", cursor: "pointer"}} onClick={()=> navigate("/booking/buy-ticket/"+ idFilm)}>Mua vé</div>
                        </div>
                        <br />
                        <p style={{cursor: "context-menu", color: "#fff"}} title={props?.data.desc}>{props?.data.desc}</p>
                        <br />
                        <div className={"fjklfjkdjslsasa"} style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: 5, width: "100%"}}>
                            <div className={"fgdnfjkldjskldad"}>
                                <div className={"fdkdsfjkldjfkd"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 5, color: "#fff"}}>
                                    <AiOutlineCalendar style={{color: "#fff"}} />
                                    <span style={{fontWeight: 600, fontSize: 15, color: "#fff"}}>Khởi chiếu</span>
                                </div>
                                <div style={{fontSize: 16, color: "#fff"}}>{moment(props?.data?.dateStart).format("DD/MM/YYYY")}</div>
                            </div>
                            <div className={"fgdnfjkldjskldad"}>
                                <div className={"fdkdsfjkldjfkd"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 5, color: "#fff"}}>
                                    <TfiTimer style={{color: "#fff"}} />
                                    <span style={{fontWeight: 600, fontSize: 15, color: "#fff"}}>Thời lượng</span>
                                </div>
                                <div style={{fontSize: 16, color: "#fff"}}>{props?.data?.state} phút</div>
                            </div>
                            <div className={"fgdnfjkldjskldad"}>
                                <div className={"fdkdsfjkldjfkd"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 5, color: "#fff"}}>
                                    <BiUserCheck style={{color: "#fff"}} />
                                    <span style={{fontWeight: 600, fontSize: 15, color: "#fff"}}>Giới hạn tuổi</span>
                                </div>
                                <div style={{fontSize: 16, color: "#fff"}}>{props?.data?.limitAge} + </div>
                            </div>
                        </div>
                    </div>
                    <div className={"fjkdjkljdkljsadasadfdsas"} style={{fontSize: 15}}>
                        <div className={"fdkjdsjfklfvgfgj"} style={{marginBottom: 10}}>
                            <div className={"kfldfkjkdjskjklsdas"} style={{fontWeight: 600, color: "#fff", whiteSpace: "nowrap"}}>Diễn viên: </div>
                            <div className={"fjdfjklsdjkldjaklea"} style={{fontWeight: 600, color: "#e63757"}}>
                                {props?.data?.actor}
                            </div>
                        </div>
                        <div className={"fdkjdsjfklfvgfgj"} style={{marginBottom: 10}}>
                            <div className={"kfldfkjkdjskjklsdas"} style={{fontWeight: 600, color: "#fff", whiteSpace: "nowrap"}}>Đạo diễn: </div>
                            <div className={"fjdfjklsdjkldjaklea"} style={{fontWeight: 600, color: "#e63757"}}>
                                Hwang In-Ho
                            </div>
                        </div>
                        <div className={"fdkjdsjfklfvgfgj"} style={{marginBottom: 10}}>
                            <div className={"kfldfkjkdjskjklsdas"} style={{fontWeight: 600, color: "#fff", whiteSpace: "nowrap"}}>Nhà sản xuất: </div>
                            <div className={"fjdfjklsdjkldjaklea"} style={{fontWeight: 600, color: "#e63757"}}>
                                {props?.data?.flimStudio}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
        <Trailer trailer={props?.data.trailer} />
    </div>
  )
}

const Trailer= (props)=> {
    return (
        <div className={"fnbjkdhjkhaedawd"} style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className={"jfdfjvfdjksfdsdaas"} style={{width: "100%", maxWidth: 960}}>
                <br />
                <div className={"fjdjfkjdsklsdfdsa"} style={{fontSize: 26, color: "#fff", fontWeight: 600}}>
                    Trailer
                </div>
                <iframe title={"Trailer"} width="729" height="500" src={props?.trailer} allowFullScreen></iframe>
            </div>
        </div>
    )   
}

export default BookingComponent 