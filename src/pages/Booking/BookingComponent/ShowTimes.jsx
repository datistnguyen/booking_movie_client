import React from 'react'
import { useState } from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import moment from "moment"

const ShowTimes = () => {
  return (
    <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div className={"dfjldjhskljhkaldsx"} style={{width: '100%', maxWidth: 960}}>
            <div className={"wgjlkrjfslkds"} style={{width: "100%", maxWidth: 640}}>
                <div className={"djsdhjsajdhajda"} style={{width: '100%', height: 62, display: 'flex', justifyContent: "center", alignItems: "center", borderRadius: 10, overflow: "hidden"}}>
                    <ComponentDay day={moment(new Date()).format("DD/MM")} formatDay={moment(new Date()).format("dddd")} />
                    <ComponentDay day={moment(new Date()).add(1, "days").format("DD/MM")} formatDay={moment(new Date()).add(1, "days").format("dddd")} />
                    <ComponentDay day={moment(new Date()).add(2, "days").format("DD/MM")} formatDay={moment(new Date()).add(2, "days").format("dddd")} />
                    <ComponentDay day={moment(new Date()).add(3, "days").format("DD/MM")} formatDay={moment(new Date()).add(3, "days").format("dddd")} />
                    <ComponentDay day={moment(new Date()).add(4, "days").format("DD/MM")} formatDay={moment(new Date()).add(4, "days").format("dddd")} />
                    <ComponentDay day={moment(new Date()).add(5, "days").format("DD/MM")} formatDay={moment(new Date()).add(5, "days").format("dddd")} />
                    <ComponentDay day={moment(new Date()).add(6, "days").format("DD/MM")} formatDay={moment(new Date()).add(6, "days").format("dddd")} />
                </div>
                <br />
                <ComponentCinema />
                <br />
                <ComponentCinema />
                <br />
                <ComponentCinema />
            </div>
            <div className={"jkdjksjaksjsdads"} style={{flex: "1 1 0"}}></div>
        </div>
    </div>
  )
}

export const ComponentDay= (props)=> {
    return (
        <div onClick={()=> props?.setChooseDay(props?.day)} className={"jfdjfklsfdljkfadas"} style={{height: "100%", flex: " 1 1 0", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", background: props?.chooseDay === props?.day ? "#fff" : "#c7d6ec", cursor: "pointer", color: props?.chooseDay === props?.day ? "#000" : "rgb(149, 170, 201)"}}>
            <div className={"fjkldfjklwjdaklsda"} style={{fontSize: 15, fontWeight: 600, color: "#95aac9"}}>{props?.day}</div>
            <div className={"dskjfkjfdkawjdksas"} style={{fontSize: 12, color: "#95aac9"}}>{props?.formatDay}</div>
        </div>
    )
}

const ComponentCinema= (props)=> {
    const [open, setOpen]= useState(()=> false)
    
    return (
        <div className={"fskfdjklwjdkalsjasas"} style={{width: "100%", borderRadius: 10, cursor: "pointer"}}>
            <div onClick={()=> setOpen(prev=> !prev)} className={`fdjdjkjsaklsjsasaada ${open=== true ? "fjkldjkljdksaoewas" : "djsjdskdjriasrwa"}`} style={{width: "100%", height: 65 , background: "#edf2f9", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 20px"}}>
                <div className={"skldjskljfkldjkslas"} style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 16}}>
                    <div className={"fdjkfjsdkjsdklas"} style={{width: 40, height: 40, display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <img style={{width: "100%", height: "100%", objectFit: "contain"}} src="https://hcm01.vstorage.vngcloud.vn/v1/AUTH_0e0c1e7edc044168a7f510dc6edd223b/media-prd/cache/square/dcc08eb55eca8002f729ae0dff98a2ae6c031db0.png" alt="" />
                    </div>
                    <div className={"fskjdkjaklajsaka"}>
                        <div className={"fdsjfjklsjdlksdjsas"} style={{fontSize: 15, fontWeight: 600}}>BHD Star Cineplex</div>
                        <div className={"fdjijdsjdkasjdklasjas"} style={{fontSize: 12}}>3 rạp</div>
                    </div>  
                </div>
                <div className={"fgjdjskdljklsa"} style={{display: "flex", justifyContent:" center", alignItems: 'center'}}>
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
            {
                open=== true && 
                <div className={"fjfjsdklajskljfklsejsaad"} style={{width: "100%", background: "#fff"}}>
                    <ComponentTheater />
                    <ComponentTheater />
                    <ComponentTheater />
                </div>
            }
        </div>
    )
}

const ComponentTheater= (props)=> {
    const [open, setOpen]= useState(false)

    return (
        <div className={"fjfjakejakedjaklwas"} style={{width: "100%", padding: "12px 20px", border: "1px solid #e3ebf6",}}>
            <p onClick={()=> setOpen(prev=> !prev)}>BHD Star Cầu Giấy</p>
            {
                open=== true && 
                <div className={"fdkjdlfjflkdjlkdasfea"}>
                    <div className={"fjadklfjskalejlksasa"} style={{fontSize: 12}}>Tầng 8, TTTM Discovery, 302 Cầu Giấy, P. Dịch Vọng, Q. Cầu Giấy, Tp. Hà Nội  </div>
                    <br />
                    <div style={{fontSize: 14, fontWeight: 600, marginBottom: 10}}>2D Phụ Đề Việt</div>
                    <TimeFrame />
                </div>
            }
        </div>
    )
}

const TimeFrame= (props)=> {
    return (
        <div className={"fksjdkjsdklfjkgflddsa"} style={{display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap"}}>
            <div className={"dsjdjfgjkldjassd"} style={{padding: "4px 8px", height: 38, borderRadius: 5, display: "flex", justifyContent:" center", alignItems: "center", background: "#f3f7fb", color: "#a5afbc"}}>
                09:55
            </div>
            <div className={"dsjdjfgjkldjassd"} style={{padding: "4px 8px", height: 38, borderRadius: 5, display: "flex", justifyContent:" center", alignItems: "center", background: "#f3f7fb", color: "#a5afbc"}}>
                12:05
            </div>
            <div className={"dsjdjfgjkldjassd"} style={{padding: "4px 8px", height: 38, borderRadius: 5, display: "flex", justifyContent:" center", alignItems: "center", background: "#f3f7fb", color: "#a5afbc"}}>
                13:25
            </div>
            <div className={"dsjdjfgjkldjassd"} style={{padding: "4px 8px", height: 38, borderRadius: 5, display: "flex", justifyContent:" center", alignItems: "center", background: "#f3f7fb", color: "#a5afbc"}}>
                14:10
            </div>
            <div className={"dsjdjfgjkldjassd"} style={{padding: "4px 8px", height: 38, borderRadius: 5, display: "flex", justifyContent:" center", alignItems: "center", background: "#f3f7fb", color: "#a5afbc"}}>
                15:30
            </div>
            <div className={"dsjdjfgjkldjassd"} style={{padding: "4px 8px", height: 38, borderRadius: 5, display: "flex", justifyContent:" center", alignItems: "center", background: "#f3f7fb", color: "#a5afbc"}}>
                16:15
            </div>
        </div>
    )
}

export default ShowTimes