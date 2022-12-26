import React, { Fragment, useEffect, useState } from "react";
import { ComponentDay } from "./ShowTimes";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import _ from "lodash"
import * as Scroll from 'react-scroll';
import { useSelector } from "react-redux";

const BuyTickets = (props) => {
  const scroll = Scroll.animateScroll;
  const { idFilm } = useParams();
  const [listCluster, setListCluster] = useState([]);
  const [chooseDay, setChooseDay] = useState(moment(new Date()).format("DD/MM"));
  useEffect(()=> {
    scroll.scrollToTop()
  }, [scroll])
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: "http://localhost:8080/cluster",
        method: "get",
      });
      const result = await res.data;
      return setListCluster(result);
    })();
  }, []);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className={"dfjldjhskljhkaldsx"}
        style={{ width: "100%", maxWidth: 960 }}
      >
        <div
          className={"wgjlkrjfslkds"}
          style={{ width: "100%", maxWidth: 640 }}
        >
          <br />
          <div
            className={"djsdhjsajdhajda"}
            style={{
              width: "100%",
              height: 62,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).format("DD/MM")}
              formatDay={moment(new Date()).format("dddd")}
            />
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).add(1, "days").format("DD/MM")}
              formatDay={moment(new Date()).add(1, "days").format("dddd")}
            />
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).add(2, "days").format("DD/MM")}
              formatDay={moment(new Date()).add(2, "days").format("dddd")}
            />
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).add(3, "days").format("DD/MM")}
              formatDay={moment(new Date()).add(3, "days").format("dddd")}
            />
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).add(4, "days").format("DD/MM")}
              formatDay={moment(new Date()).add(4, "days").format("dddd")}
            />
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).add(5, "days").format("DD/MM")}
              formatDay={moment(new Date()).add(5, "days").format("dddd")}
            />
            <ComponentDay
              chooseDay={chooseDay}
              setChooseDay={setChooseDay}
              day={moment(new Date()).add(6, "days").format("DD/MM")}
              formatDay={moment(new Date()).add(6, "days").format("dddd")}
            />
          </div>
          <br />
          <div
            className={"fkadjkdljfkljdk"}
            style={{
              width: "100%",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              background: "#f6c343",
              borderRadius: 5,
              gap: 10,
            }}
          >
            <AiOutlineInfoCircle />{" "}
            <span>Click on the show to buy tickets</span>
          </div>
          <br />
          {listCluster?.filter(item=> item?.Cinemas?.filter(item=> item?.Films?.filter(item2=> item2?.PlayTimes?.length > 0  && item2?.PlayTimes?.filter(item3=> parseInt(item3?.FilmId) === parseInt(idFilm))?.length > 0 && item2?.PlayTimes?.filter(item3=> parseInt(moment(item3?.timeStart).valueOf()) >= parseInt(moment(new Date()).valueOf()))?.length > 0 && item2?.PlayTimes?.filter(item3=> moment(item3?.timeStart).format("DD/MM") === chooseDay)?.length > 0)?.length > 0)?.length > 0)?.map((item, key) => (
            <Fragment key={key}>
              <ComponentCinema {...item} price={props?.data?.price} chooseDay={chooseDay} />
              <br />
            </Fragment>
          ))}
        </div>
        <div className={"jkdjksjaksjsdads"} style={{ flex: "1 1 0" }}></div>
      </div>
    </div>
  );
};

const ComponentCinema = (props) => {
  const [open, setOpen] = useState(() => false);

  return (
    <div
      className={"fskfdjklwjdkalsjasas"}
      style={{ width: "100%", borderRadius: 10, cursor: "pointer" }}
    >
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`fdjdjkjsaklsjsasaada ${
          open === true ? "fjkldjkljdksaoewas" : "djsjdskdjriasrwa"
        }`}
        style={{
          width: "100%",
          height: 65,
          background: "#edf2f9",
          borderRadius: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
        }}
      >
        <div
          className={"skldjskljfkldjkslas"}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            className={"fdjkfjsdkjsdklas"}
            style={{
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: "50%",
              }}
              src={props?.img}
              alt=""
            />
          </div>
          <div className={"fskjdkjaklajsaka"}>
            <div
              className={"fdsjfjklsjdlksdjsas"}
              style={{ fontSize: 15, fontWeight: 600 }}
            >
              {props?.ClusterName}
            </div>
            <div className={"fdjijdsjdkasjdklasjas"} style={{ fontSize: 12 }}>
              {props?.Cinemas?.length} cinemas
            </div>
          </div>
        </div>
        <div
          className={"fgjdjskdljklsa"}
          style={{
            display: "flex",
            justifyContent: " center",
            alignItems: "center",
          }}
        >
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      {open === true && (
        <div
          className={"fjfjsdklajskljfklsejsaad"}
          style={{ width: "100%", background: "#fff" }}
        >
          {props?.Cinemas?.filter(item=> item?.Films?.filter(item2=> item2?.PlayTimes?.length > 0 && item2?.PlayTimes?.filter(item3=> moment(item3?.timeStart).valueOf() > moment(new Date()).valueOf())?.length > 0)?.length > 0)?.map((item, key) => (
            <ComponentTheater price={props?.price} key={key} {...item} chooseDay={props?.chooseDay} />
          ))}
        </div>
      )}
    </div>
  );
};

const ComponentTheater = (props) => {
  const [open, setOpen] = useState(false);
  const [playTime, setPlayTime] = useState([]);
  const { idFilm } = useParams();
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: "http://localhost:8080/playtime/detail/playtimes/" + idFilm,
        method: "get",
        params: {
          cinemaId: props?.id
        }
      });
      const result = await res.data;
      return setPlayTime(result);
    })();
  }, [idFilm, props?.id]);
  return (
    <div
      className={"fjfjakejakedjaklwas"}
      style={{
        width: "100%",
        padding: "12px 20px",
        border: "1px solid #e3ebf6",
      }}
    >
      <p onClick={() => setOpen((prev) => !prev)}>{props?.cinemaName}</p>
      {open === true && (
        <div className={"fdkjdlfjflkdjlkdasfea"}>
          <div className={"fjadklfjskalejlksasa"} style={{ fontSize: 12 }}>
            {props?.address}{" "}
          </div>
          <br />
          <div
            style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}
          ></div>
          {
            playTime?.length > 0 &&
            <TimeFrame
              chooseDay={props?.chooseDay}
              price={props?.price}
              idCinema={props?.id}
              idFilm={idFilm}
              playTime={playTime}
            />
          }
        </div>
      )}
    </div>
  );
};

const TimeFrame = (props) => {
  const navigate = useNavigate();
  const {userLogin} = useSelector(state=>state.UserManageReducer)

  return (
    <div
      className={"fksjdkjsdklfjkgflddsa"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 5,
        flexWrap: "wrap",
      }}
    >
      {_.orderBy(_.uniqBy(props?.playTime, function(e) {return e.timeStart}), (a)=> parseInt(moment(a?.timeStart).valueOf()), ['asc'])?.filter(item=> moment(item?.timeStart).format("DD/MM") === props?.chooseDay)?.map((item, key) => (
        <Fragment key={key}>
          {moment(item?.timeStart) < moment() && (
            <div
              className={"dsjdjfgjkldjassd"}
              style={{
                padding: "4px 8px",
                height: 38,
                borderRadius: 5,
                display: "flex",
                justifyContent: " center",
                alignItems: "center",
                background: "#f3f7fb",
                color: "#a5afbc",
              }}
            >
              {moment(item?.timeStart).format("HH:mm")}
            </div>
          )}
          {moment(item?.timeStart) >= moment() && (
            <div
              onClick={() =>
                {
                  if(userLogin?.id) {
                  navigate(
                    "/book/choose-chair/" + props?.idFilm + "/" + props?.idCinema,
                    { state: { timeStart: item?.timeStart, id_cinema: item?.id_cinema, playTimeId: item?.id} }
                  )
                  }
                  else {
                    navigate("/login")
                  }
                }
              }
              className={"dsjdjfgjkldjassd"}
              style={{
                padding: "4px 8px",
                height: 38,
                borderRadius: 5,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
                border: "1px solid #000",
                flexDirection: "column",
              }}
            >
              <span
                className={"jksfdjklfjkdas"}
                style={{ color: "#000", fontSize: 14, height: 20 }}
              >
                {moment(item?.timeStart).format("HH:mm")}
              </span>
              <span
                className={"djfklajdksoewa"}
                style={{ color: "#a5afbc", fontSize: 12 }}
              >
                {props?.price}
              </span>
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default BuyTickets;
