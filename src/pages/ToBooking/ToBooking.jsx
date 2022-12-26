import React, { Fragment, memo, useEffect, useMemo } from 'react'
import {SlArrowRight} from "react-icons/sl"
import { FiCreditCard, FiInbox, FiGrid}from "react-icons/fi"
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import "./ToBooking.sass"
// import FoodAndDrink from './FoodAndDrink'
import Payment from './Payment'
import axios from 'axios'
import { useState } from 'react'
import moment from 'moment'
import swal from 'sweetalert'
import InfoTicket from './InfoTicket'
import * as Scroll from 'react-scroll';
import _ from 'lodash'

const ToBooking = (props) => {
    const [discount, setDiscount]= useState(0)
    const scroll= Scroll.animateScroll
    const [idBook, setIdBook]= useState()
    const navigate= useNavigate()
    const [bookTime, setBookTime]= useState(300)
    const [detailFilm, setDetailFilm]= useState()
    const [detailCinema, setDetailCinema]= useState()
    const location = useLocation()
    const idFilm= useMemo(()=> window.location.pathname.split("/")[window.location.pathname.split("/").length - 2], [])
    const idCinema= useMemo(()=> window.location.pathname.split("/")[window.location.pathname.split("/").length - 1], [])
    // const [timeOutBooking, setTimeOutBooking]= useState(false)
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8080/discount/by/film",
                method: "get",
                params: {
                    idFilm
                }
            })
            const result= await res.data
            return setDiscount(result?.filter(item=> moment(item?.dateStart, "YYYY-MM-DD HH:mm:ss").valueOf() <= moment(new Date()).valueOf() && moment(item?.dateEnd, "YYYY-MM-DD HH:mm:ss").valueOf() >= moment(new Date()).valueOf())?.[0]?.percent || 0)
        })()
    }, [idFilm])
    useEffect(()=> {
        scroll.scrollToTop()
    }, [scroll])
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8080/film/detail/film",
                method: "get",
                params: {
                    id: idFilm
                }
            })
            const result= await res.data
            return setDetailFilm(result)
        })()
    }, [idFilm])
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8080/cinema/detail/cinema/"+ idCinema,
                method: "get",
            })
            const result= await res.data
            return setDetailCinema(result)
        })()
    }, [idCinema])
    useEffect(()=> {
        const intervalId= setInterval(()=> {
            if(bookTime >=1 ) {
                setBookTime(prev=> parseInt(prev) - 1)
            }
            if(bookTime<= 1) {
                swal("Notice", "The reservation time has expired. Please try again", "success")
                .then(()=> navigate(-1))
                return clearInterval(intervalId)
            }
        }, 1000)
        return ()=> clearInterval(intervalId)
    })
    const [seatBook, setSeatBook]= useState([])
    return (
        <div className={"component-wrap-book-ticket"} style={{width: "100%", position: "relative", top: 60}}>
            <Header idBook={idBook} />
            <div className={"componet-book-ticket"} style={{display: "flex", justifyContent: "center", alignItems: "center", background: "#f9fbfd"}}>
                <div className={"component-1"} style={{width:" 100%", maxWidth: 1140, background: "#f9fbfd", padding: "20px"}}>
                    <Routes>
                        <Route path={"/choose-chair/:idFilm/:idCinema"} element={<ChooseChair 
                            discount={discount}
                            seatBook={seatBook}
                            setSeatBook={setSeatBook}
                            detailCinema={detailCinema}
                            detailFilm={detailFilm}
                            bookTime={bookTime}
                            setBookTime={setBookTime}
                            idFilm={idFilm}
                            idCinema={idCinema}
                            timeStart={location.state?.timeStart}
                            timePlayId={location.state?.timePlayId}
                        />} />
                        {/* <Route path={"/food-and-drink/:idFilm/:idCinema"} element={<FoodAndDrink
                            seatBook={seatBook}
                            setSeatBook={setSeatBook}
                            detailCinema={detailCinema}
                            detailFilm={detailFilm}
                            bookTime={bookTime}
                            setBookTime={setBookTime} 
                            idFilm={idFilm}
                            idCinema={idCinema}  
                         />} /> */}
                        <Route path={"/checkout/:idFilm/:idCinema"} element={<Payment 
                            discount={discount}
                            seatBook={seatBook}
                            setSeatBook={setSeatBook}
                            detailCinema={detailCinema}
                            detailFilm={detailFilm}
                            bookTime={bookTime}
                            setBookTime={setBookTime} 
                            idFilm={idFilm}
                            idCinema={idCinema}  
                            timeStart={location.state?.timeStart}
                            setIdBook={setIdBook}
                            timePlayId={location.state?.timePlayId}

                        />} />
                        <Route path={"/ticket/detail/:idBook"} element={<InfoTicket
                            seatBook={seatBook}
                            setSeatBook={setSeatBook}
                            detailCinema={detailCinema}
                            detailFilm={detailFilm}
                            bookTime={bookTime}
                            setBookTime={setBookTime} 
                            idFilm={idFilm}
                            idCinema={idCinema}  
                            idBook={idBook}
                            timeStart={location.state?.timeStart}
                            timePlayId={location.state?.timePlayId}

                        />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}

const Header= (props)=> {
    return (
        <div className={"fdjkldjskfsljdsklas"} style={{width: "100%", height: "100%", display :"flex", justifyContent: "center", alignItems: "center", background: "#fff"}}>
            <div className={"dkdksjfkljklasjkassa"} style={{width:" 100%", maxWidth: 1140, display: "flex", justifyContent: "center", alignItems: "center", height: 50}}>
                <div className={"fjlkjdklfjklsdjdasa"} style={{flex: "1 1 0", height: "100%", padding: "10px 0 5px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div></div>
                    <NavLink className={({isActive})=> isActive ? "fdjkdjhdheajsasldada" : "fdjlsfhjkdhjakwshasas"} to={"/book/choose-chair"}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5}}>
                            <FiGrid style={{width: 20, height: 20}} />
                            <div style={{fontSize: 12}}>Choose chair</div>
                        </div>
                    </NavLink>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <SlArrowRight style={{width: 28, height: 28}} />
                    </div>
                </div>
                {/*  */}
                {/* <div className={"fjlkjdklfjklsdjdasa"} style={{flex: "1 1 0", height: "100%", padding: "10px 0 5px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div></div>
                    <NavLink className={({isActive})=> isActive ? "fdjkdjhdheajsasldada" : "fdjlsfhjkdhjakwshasas"} to={"/book/food-and-drink"}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5}}>
                            <FiShoppingBag style={{width: 20, height: 20}} />
                            <div style={{fontSize: 12}}>Bắp nước</div>
                        </div>
                    </NavLink>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <SlArrowRight style={{width: 28, height: 28}} />
                    </div>
                </div> */}
                {/*  */}
                <div className={"fjlkjdklfjklsdjdasa"} style={{flex: "1 1 0", height: "100%", padding: "10px 0 5px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div></div>
                    <NavLink className={({isActive})=> isActive ? "fdjkdjhdheajsasldada" : "fdjlsfhjkdhjakwshasas"} to={"/book/checkout"}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5}}>
                            <FiCreditCard style={{width: 20, height: 20}} />
                            <div style={{fontSize: 12}}>Payment</div>
                        </div>
                    </NavLink>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <SlArrowRight style={{width: 28, height: 28}} />
                    </div>
                </div>
                {/*  */}
                <div className={"fjlkjdklfjklsdjdasa"} style={{flex: "1 1 0", height: "100%", padding: "10px 0 5px 0", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div></div>
                    <NavLink className={({isActive})=> isActive ? "fdjkdjhdheajsasldada" : "fdjlsfhjkdhjakwshasas"} to={"/book/ticket/detail/"+ props?.idBook}>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 5}}>
                            <FiInbox style={{width: 20, height: 20}} />
                            <div style={{fontSize: 12}}>Ticket information</div>
                        </div>
                    </NavLink>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                     
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ToBooking

const ChooseChair= (props)=> {
    const [infoRoom, setInfoRoom]= useState()
    const [seated, setSeated]= useState([])
    const location= useLocation()
    const navigate= useNavigate()
     useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: "http://localhost:8080/room/get_room/by/cinema/"+ props?.idCinema+ "/"+ props?.idFilm,
                method: "get"
            })
            const result= await res.data
            if(result.runout=== true ) {
                swal("Notice", "The movie is out of room, please book another theater", "success")
                .then(()=> navigate(-1))
            }
            setSeated(result.seated)
            return setInfoRoom(result.roomChosen)
        })()
     }, [props?.idCinema, props?.idFilm, navigate])
    
    
    return (
        <div className={"dfjskldjsklfjkldssa"} style={{width: "100%", display: "flex", justifyContent: "center", gap: 10}}>
            <div className={"fjlkdjklgjkfldssdasas"} style={{width: "calc(100% / 3 * 2)"}}>
                <TypeSeat seatBook={props?.seatBook} setSeatBook={props?.setSeatBook} />
                <br />
                <StructureCinema seated={seated} infoRoom={infoRoom} seatBook={props?.seatBook} setSeatBook={props?.setSeatBook} />
            </div>
            <div className={"fjddjskldjskljasklasas"} style={{width: "calc(100% / 3)"}}>
                <div className={"jdfjhldjiaoehjas"} style={{width: "100%", padding: 10, background: "#fff", borderRadius: 5}}>
                    <div>{props?.detailFilm?.data?.movieName}</div>
                    <div className={"jldfjskldjkfasas"} style={{fontSize: 15, fontWeight: 600}}>{props?.detailFilm?.data?.cinemaName}</div>
                    <div>Set <span className={"sgdjkldfjksldjsa"} style={{fontWeight: 600, fontSize: 15}}>{moment(props?.timeStart).format("HH:mm")}</span> - {moment(props?.timeStart).format("dddd")}, <span className={"sgdjkldfjksldjsa"} style={{fontWeight: 600, fontSize: 15}}>{moment(props?.timeStart).format("DD/MM")}</span></div>
                </div>
                <br />
                <div className={"jdfjhldjiaoehjas"} style={{width: "100%", padding: 10, background: "#fff", borderRadius: 5}}>
                    <span>Room:&nbsp;</span>
                    <span className={"jldfjskldjkfasas"} style={{fontSize: 15, fontWeight: 600}}>{infoRoom?.RoomName}</span>
                    <div>Seat: <span className={"sgdjkldfjksldjsa"} style={{fontWeight: 600, fontSize: 15}}>{props?.seatBook?.map((item, key)=> <Fragment key={key}>{item}{parseInt(key) === props?.seatBook?.length - 1 ? "" : ","}</Fragment>)}</span></div>
                </div>
                <br />
                <div className={"jdfjhldjiaoehjas"} style={{width: "100%", padding: 10, background: "#fff", borderRadius: 5, display: "flex", justifyContent: "space-between", alignItems: "center",}}>
                    <div className={"fdajklfjsakldjaks"}>
                        <div className={"fdzjdjskldjassaaws"} style={{fontSize: 14, fontWeight: 600}}>Total order </div>
                        <div className={"fzjldsjkfhdjkdhsdsa"} style={{fontSize: 18, fontWeight: 600}}>{numberWithCommas(parseInt(props?.detailFilm?.data?.price) * parseInt(props?.seatBook.length) * ((1 - parseInt(props?.discount) / 100))) || "_"}đ</div>
                    </div>
                    <div>|</div>
                    <div className={"fdajklfjsakldjaks"} style={{direction: "rtl"}}>
                        <div className={"fdzjdjskldjassaaws"} style={{fontSize: 14, fontWeight: 600, direction: "rtl", textAlign: "right"}}>Time holding</div>
                        <ComponentCounter counter={props?.bookTime} />
                    </div>
                </div>
                <br />
                <div onClick={()=> navigate("/book/checkout/"+ props?.idFilm+ "/"+ props?.idCinema, {state: {timeStart: moment(props?.timeStart).format("DD-MM-YYYY hh:mm:ss"), idRoom: infoRoom?.id, playTimeId: location.state?.playTimeId}})} className={"jdsldjskldjksldas"} style={{width: "100%", color: "#fff", backgroundColor: "#12263f", borderRadius: 5, display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 600, cursor: "pointer", padding: "12px 10px", fontSize: 16 }}>
                    Continue
                </div>
            </div>
        </div>
    )
}

const TypeSeat= memo((props)=> {
    return (
        <div className={"dfdjdslksjldkajss"} style={{width: '100%', display: "flex", justifyContent: "center", alignItems: "center", gap: 20}}>
            <div className={"fdksldjdkljdklas"} style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 5}}>
                <div className={"djdjdkljklsjasas"} style={{width: 20, height: 20, backgroundColor: "#00b300", color: "#fff", boxShadow: "0 0 11px #00b300"}}></div>
                <div className={"fdgljjhzslkdjksl"} style={{fontSize: 12,}}>Chosen</div>
            </div>
            {/*  */}
            <div className={"fdksldjdkljdklas"} style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 5}}>
                <div className={"djdjdkljklsjasas"} style={{width: 20, height: 20, backgroundImage: "url(https://moveek.com/build/images/seat-unavailable.74bb3c1e.png)", color: "#fff", backgroundRepeat: "no-repeat", backgroundColor: "#dfdfdf", backgroundPosition: "center"}}></div>
                <div className={"fdgljjhzslkdjksl"} style={{fontSize: 12,}}>Prohibit</div>
            </div>
            {/*  */}
            <div className={"fdksldjdkljdklas"} style={{display: "flex", justifyContent:" center", alignItems: "center", gap: 5}}>
                <div className={"djdjdkljklsjasas"} style={{width: 20, height: 20, background: "repeating-linear-gradient(45deg,hsla(0,0%,60%,.4),hsla(0,0%,60%,.4) 10px,hsla(0,0%,60%,.6) 0,hsla(0,0%,60%,.6) 20px)", color: "#fff"}}></div>
                <div className={"fdgljjhzslkdjksl"} style={{fontSize: 12,}}>Sold</div>
            </div>
        </div>
    )
})

const StructureCinema= memo((props)=> {

    return (
        <div className={"dskldkfkddlskasssas"} style={{width: '100%'}}>
            <div className={"fjdjklfjkdlajklasdas"} style={{width: "calc(100% - 38px)", marginLeft: 38, display: "flex", justifyContent:" center", alignItems: "center", fontSize: 18, fontWeight: 600, textTransform: "uppercase", background:" #dfdfdf", marginBottom: 12}}>
                Screen
             </div>
            <div className={"jfjsdklfjklfjfjkdasas"} style={{width: '100%', display: "flex"}}>
                <div className={"fkgjkljskdjkassada"} style={{width: 40, display: "flex", flexDirection: "column", gap: 6, marginTop: 3}}>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        A
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        B
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        C
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        D
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        E
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        F
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        G
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        H
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        J
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        K
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        L
                    </div>
                    <div className={"fvdjklfjdfkljdklasa"} style={{width: 32, height: 32, display: "flex", justifyContent:" center", alignItems:" center", borderRadius: 5, color: "#fff", background: "#727575", fontSize: 12, fontWeight: 600}}>
                        M
                    </div>
                </div>
                <div style={{flex: '1 1 0', alignItems: "flex-start"}} className="c-flex-center">
                    <div className={"component-list-chair-in-room"} style={{display: "flex", maxWidth: 456, alignItems: "center", flexWrap: "wrap", marginLeft: 30, height: "max-content"}}>
                        {
                            parseInt(props?.infoRoom?.seat) > 0&& Array.from(Array(parseInt(props?.infoRoom?.seat)).keys()).map((item, key)=> <ComponentSeat index={key} seated={props?.seated} seatBook={props?.seatBook} setSeatBook={props?.setSeatBook} key={key} item={item} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
})

const ComponentSeat= memo((props)=> {
    const seatBook= ()=> {
       if(props?.seatBook?.includes(parseInt(props?.item))) {
            return props?.setSeatBook(props?.seatBook?.filter(item=> parseInt(item) !== parseInt(props?.index)))
       }
       else {
            return props?.setSeatBook(prev=> ([...prev, parseInt(props?.item)]))
       }
    }
    return (
        <div onClick={seatBook} className={"dSJDKljdklaasf"} style={{width: 32, height: 32, margin: 3, background: "#dfdfdf", borderRadius: 5, cursor: "pointer"}}>
            {
                props?.seatBook?.includes(parseInt(props?.item)) && <div className={"skfksjdfkldjakdjsdas"} style={{width: "100%", height: "100%", backgroundColor: "rgb(0, 179, 0)", boxShadow: "rgb(0 179 0) 0px 0px 11px", borderRadius: 5}}>
                
                </div>
            }
            {
                props?.seated?.filter(item1=> parseInt(item1?.seatIndex)=== parseInt(props?.index))?.length > 0 && <button title={"Ghế này đã có người chọn"} className={"djdjdkljklsjasas"} style={{width: 32, height: 32, background: "repeating-linear-gradient(45deg,hsla(0,0%,60%,.4),hsla(0,0%,60%,.4) 10px,hsla(0,0%,60%,.6) 0,hsla(0,0%,60%,.6) 20px)", color: "#fff", border: "none", outline: "none", cursor: "not-allowed"}} disabled></button>
            }

        </div>
    )
})

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function ComponentCounter({counter}) {
    return (
        <div className={"counter-booking-ticket"} style={{fontSize: 18, fontWeight: 600, direction: "rtl", textAlign: "right"}}>
            {moment.utc(moment.duration(parseInt(counter), "seconds").as("milliseconds")).format("mm:ss")}
        </div>
    )
}


// const RightSide= ()=> {

// }