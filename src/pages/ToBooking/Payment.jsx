import axios from "axios";
// import { uniqueId } from "lodash";
import moment from "moment";
import React from "react";
// import { useContext } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert'
import { numberWithCommas } from "./ToBooking";
import {v4 as uuidv4} from "uuid"

const Payment = (props) => {
  const navigate= useNavigate()
  const location = useLocation()
  console.log(location.state)
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
        id_book: uuid
        // seatIndex: 
      }
    })))
    const result= await Promise.all(arrPromise)
    props?.setIdBook(result[0]?.data?.id_book)
    return result[0]?.data?.id_book
    // return result[0]
    // 

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
              <th>Mô tả</th>
              <th style={{textAlign: "center"}}>Số lượng</th>
              <th style={{ textAlign: "right" }}>Thành tiền</th>
            </tr>
            <tr>
              <td>Standard</td>
              <td style={{textAlign: 'center'}}>{props?.seatBook?.length}</td>
              <td style={{textAlign: "right"}}>
                {numberWithCommas(parseInt(props?.detailFilm?.data?.price) * props?.seatBook.length) || "_"}
              </td>
            </tr>
            <tr>
              <td>Phí tiện ích</td>
              <td></td>
              <td style={{textAlign: "right"}}>
                5,000đ
              </td>
            </tr>
            <tr>
              <td>Tổng</td>
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
            Suất{" "}
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
              Tổng đơn hàng
            </div>
            <div
              className={"fzjldsjkfhdjkdhsdsa"}
              style={{ fontSize: 18, fontWeight: 600 }}
            >
              {numberWithCommas(parseInt(props?.detailFilm?.data?.price) * props?.seatBook.length + 5000) || "_"}đ
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
              Thời gian giữ ghế
            </div>
            <div
              className={"fzjldsjkfhdjkdhsdsa"}
              style={{
                fontSize: 18,
                fontWeight: 600,
                direction: "rtl",
                textAlign: "right",
              }}
            >
              {moment.utc(moment.duration(parseInt(props?.bookTime), "seconds").as("milliseconds")).format("mm:ss")}
            </div>
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
          <div className={"djkljskdljklfddsa"}>Vé đã mua không thể đổi hoặc hoàn tiền.</div>
          <div>Mã vé sẽ được gửi <span style={{fontWeight: 600}}>01</span> lần qua số điện thoại và email đã nhập. Vui lòng kiểm tra lại thông tin trước khi tiếp tục.</div>
        </div>
        <br />
        <div
          onClick={async ()=> {
            const result= await checkout()
            swal("Chúc mừng!", "Bạn đã thanh toán thành công!", {
              buttons: {
                backtoHome: "Ok",
                infoTicket: "Thông tin vé"
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
          Thanh toán
        </div>
      </div>
    </div>
  );
};

export default Payment;
