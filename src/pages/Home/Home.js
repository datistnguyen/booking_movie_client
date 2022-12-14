import React from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import "../Home/Home.css";
import { useSelector,useDispatch } from "react-redux";
import CustomArrows from "../../Components/ReactSlick/SimpleSlide";
import Blog from "../../Components/Blog/Blog";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel"
import "animate.css";
import { useEffect } from "react";
import { getAllFilmAction } from "../../Redux/Actions/FilmManageAction";
import { getAllCinemaAction } from "../../Redux/Actions/CinemaManageAction";
export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.FilmManageReducer);
  const { arrCinema } = useSelector((state)=>state.CinemaManageReducer);
  console.log("array",arrFilm)
  // console.log("array",arrCinema)
   const dispatch = useDispatch();
  useEffect(() => { 
    const action = getAllFilmAction()
    dispatch(action)
    dispatch(getAllCinemaAction())
  },[dispatch])
  return (
    <div>
      {/* <CarouselHome/> */}
      <HomeCarousel />
      <div className="container" style={{ marginTop: 50 }}>
        <div>
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                data-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{
                  backgroundColor: "#212121",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
                
              >
                Đang Chiếu
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                data-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style={{
                  backgroundColor: "#212121",
                  fontSize: "24px",
                  fontWeight: 500,
                }}
              
              >
                Sắp Chiếu
              </button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* giao dieenj load phim */}
              <CustomArrows arrFilm={arrFilm}  />
        
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <CustomArrows arrFilm={arrFilm} />
            </div>
          </div>
        </div>

        <HomeMenu arrCinema={arrCinema}/>
      </div>
      <Blog />
    </div>
  );
}
