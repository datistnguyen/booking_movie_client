import axios from "axios";
// import { uniqueId } from "lodash";
import moment from "moment";
import React from "react";
// import { useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert'
import { ComponentCounter, numberWithCommas } from "./ToBooking";
import {v4 as uuidv4} from "uuid"

const Payment = (props) => {
  const navigate= useNavigate()
  const location = useLocation()
  const {userLogin} = useSelector(state=>state.UserManageReducer)
  const checkout= async ()=> {
    const uuid= uuidv4()
    const arrPromise= []
    props?.seatBook?.map((item)=> arrPromise.push(axios({
      url: "http://localhost:8080/book/checkout",
      method: "post",
      data: {
        dateStart: location.state?.timeStart,
        id_room: location.state?.idRoom,
        playTimeId: location?.state?.playTimeId,
        idFilm: props?.idFilm,
        userId: userLogin.id,
        seatIndex: parseInt(item),
        id_book: uuid,
        time_created: moment(new Date()).format("DD-MM-YYYY")
        // seatIndex: 
      }
    })))
    const result= await Promise.all(arrPromise)
    props?.setIdBook(result[0]?.data?.id_book)
    axios({
      url: "http://localhost:8080/mail",
      method: "post",
      data: {
        film: props?.detailFilm?.data?.movieName,
        cinema: props?.detailFilm?.data?.cinemaName,
        set: moment(location.state?.timeStart, "DD-MM-YYYY HH:mm:sss").format("HH:mm")+ " - "+ moment(location.state?.timeStart, "DD-MM-YYYY HH:mm:sss").format("dddd")+ ", "+ moment(location.state?.timeStart, "DD-MM-YYYY HH:mm:sss").format("DD/MM"),
        seat: props?.seatBook?.toString(),
        total: (numberWithCommas(parseInt(props?.detailFilm?.data?.price) * props?.seatBook.length * (1 - (parseInt(props?.discount) || 0) /100 ) + 5000) || "_") + "đ",
        email: userLogin?.email
      }
    })
    return result[0]?.data?.id_book
    
  }
  return (
    <div
      className={"dfjskldjsklfjkldssa"}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <div
        className={"fjlkdjklgjkfldssdasas"}
        style={{
          width: "calc(100% / 3 * 2)",
          padding: 10,
          background: "#fff",
          borderRadius: 5,
        }}
      >
        <table className={"gfzdjdljskdljksla"} style={{ width: "100%" }}>
          <thead className={"gjlkdhjjhdjkadassa"}>
            <tr>
              <th>Describe</th>
              <th style={{textAlign: "center"}}>Amount</th>
              <th style={{ textAlign: "right" }}>Provisional</th>
            </tr>
            <tr>
              <td>Standard</td>
              <td style={{textAlign: 'center'}}>{props?.seatBook?.length}</td>
              <td style={{textAlign: "right"}}>
                {numberWithCommas(parseInt(props?.detailFilm?.data?.price) * props?.seatBook.length) || "_"}đ
              </td>
            </tr>
            <tr>
              <td>Utility fee</td>
              <td></td>
              <td style={{textAlign: "right"}}>
                5,000đ
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td style={{textAlign: "right"}}>
                {numberWithCommas(parseInt(props?.detailFilm?.data?.price) * props?.seatBook.length + 5000) || "_"}đ
              </td>
            </tr>
          </thead>
        </table>
      </div>
      <div
        className={"fjddjskldjskljasklasas"}
        style={{ width: "calc(100% / 3)" }}
      >
        <div
          className={"jdfjhldjiaoehjas"}
          style={{
            width: "100%",
            padding: 10,
            background: "#fff",
            borderRadius: 5,
          }}
        >
          <div>{props?.detailFilm?.data?.movieName}</div>
          <div
            className={"jldfjskldjkfasas"}
            style={{ fontSize: 15, fontWeight: 600 }}
          >
            {props?.detailFilm?.data?.cinemaName}
          </div>
          <div>
            Set{" "}
            <span
              className={"sgdjkldfjksldjsa"}
              style={{ fontWeight: 600, fontSize: 15 }}
            >
              {moment(location.state?.timeStart, "DD-MM-YYYY HH:mm:sss").format("HH:mm")}
            </span>{" "}
            - {moment(location.state?.timeStart, "DD-MM-YYYY HH:mm:sss").format("dddd")},{" "}
            <span
              className={"sgdjkldfjksldjsa"}
              style={{ fontWeight: 600, fontSize: 15 }}
            >
              {moment(location.state?.timeStart, "DD-MM-YYYY HH:mm:sss").format("DD/MM")}
            </span>
          </div>
        </div>
        <br />
        <br />
        <div
          className={"jdfjhldjiaoehjas"}
          style={{
            width: "100%",
            padding: 10,
            background: "#fff",
            borderRadius: 5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={"fdajklfjsakldjaks"}>
            <div
              className={"fdzjdjskldjassaaws"}
              style={{ fontSize: 14, fontWeight: 600 }}
            >
              Total order
            </div>
            <div
              className={"fzjldsjkfhdjkdhsdsa"}
              style={{ fontSize: 18, fontWeight: 600 }}
            >
              {numberWithCommas(parseInt(props?.detailFilm?.data?.price) * props?.seatBook.length * (1 - (parseInt(props?.discount) || 0) /100 ) + 5000) || "_"}đ
            </div>
          </div>
          <div>|</div>
          <div className={"fdajklfjsakldjaks"} style={{ direction: "rtl" }}>
            <div
              className={"fdzjdjskldjassaaws"}
              style={{
                fontSize: 14,
                fontWeight: 600,
                direction: "rtl",
                textAlign: "right",
              }}
            >
              Holding time
            </div>
            <ComponentCounter counter={props?.bookTime} />
          </div>
        </div>
        <br />
        <div
          className={"jdfjhldjiaoehjas"}
          style={{
            width: "100%",
            padding: "20px 10px",
            background: "#fff",
            borderRadius: 5,
          }}
        >
          <div className={"djkljskdljklfddsa"}>Tickets purchased cannot be exchanged or refunded.</div>
          <div>Ticket code will be sent <span style={{fontWeight: 600}}>01</span> time via the phone number and email entered. Please double check the information before continuing.</div>
        </div>
        <br />
        <div
          onClick={async ()=> {
            swal("Notice", "Are you sure want to checkout ?", {
              buttons: {
                success: "Yes",
                failed: "No"
              }
            })
            .then(async value=> {
              switch(value) {
                case "success":
                  const result= await checkout()
                  swal("Congratulation!", "You have successfully paid!" ,"success", {
                    buttons: {
                      backtoHome: "Ok",
                      infoTicket: "Ticket info"
                    }
                  })
                  .then((value)=> {
                    switch(value) {
                      case "backtoHome": 
                        navigate("/")
                        break;
                      case "infoTicket" :
                        navigate(`/book/ticket/detail/${result}`)
                        break;
                      default: 
                        return
                      }
                  })
                  break
                case "failed":
                  break
                default: 
                  break
              }
            })
          }}
          className={"jdsldjskldjksldas"}
          style={{
            width: "100%",
            color: "#fff",
            backgroundColor: "#12263f",
            borderRadius: 5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: 600,
            cursor: "pointer",
            padding: "12px 10px",
            fontSize: 16,
          }}
        >
          Pay
        </div>
      </div>
    </div>
  );
};

export default Payment;
