import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";
import "../Film/Film.css";
// import {history} from "../../App"
export default function Film(props) {
  const { movie } = props;
  return (
    <div className="film px-3 mt-5">
      <div
        className="card "
        style={{ backgroundColor: " #212121", border: "none" }}
      >
        <div
          className="image"
          style={{
            backgroundImage: `url(${movie.img}), url(./img/bgmovie.jpg) `,
            border: "solid 1px grey",
            width: "80%",
            height: "400px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "15px",
          }}
        >
          <img
            style={{ opacity: "0" }}
            src={movie.country}
            className="card-img-top"
            alt="..."
          />
        </div>
        <div className="showcase__item">
          <div className="showcase__overlay">
            <p style={{ height: "20px" }}>Mô Tả: {movie.desc}</p>
          </div>
        </div>

        <div className="card-body" style={{ alignItems: "center" }}>
          <h5
            className="card-title text-center text-white"
            style={{ width: "70%", height: "20px", fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap" }}
          >
            {movie.movieName}
          </h5>
          <p
            className="card-text text-center text-white"
            style={{ width: "70%", height: "30px", fontSize: "15px", whiteSpace: "nowrap"}}
          >
            {moment(movie.dateStart).format("DD/MM/YYYY")}
          </p>
          <button className="booking">
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={`/booking/buy-ticket/${movie.id}`}
            >
              Đặt vé
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
}
