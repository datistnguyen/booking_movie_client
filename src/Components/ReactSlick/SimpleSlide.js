import React, { memo, useEffect, useState } from "react";
import "../ReactSlick/Slick.css";
import Film from "../Film/Film";
import Slider from "react-slick";
import styleSlick from 'react-slick'
import moment from "moment";
import _ from "lodash"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}
export const settings = {
  className: "center variable-width",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 1,
  rows: 2,
  slidesPerRow: 1,
  slidesToShow: 5,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CustomArrows = (props) =>  {
  const [playing, setPlaying]= useState([])
  useEffect(()=> {
    setPlaying(_.uniqBy(props.arrFilm?.filter(item=> item?.PlayTimes?.filter(item2=> moment(item2?.timeStart, "YYYY-MM-DD HH:mm:ss").valueOf() > moment(new Date()).valueOf() && moment(item2?.timeStart, "YYYY-MM-DD HH:mm:ss").subtract(5, "hours").valueOf() <= moment(new Date()).valueOf() && moment(item2?.timeStart, "YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY") === moment(new Date()).format("DD-MM-YYYY"))?.length > 0), function(e) {return e.movieName?.trim()}))
  }, [props?.arrFilm])
  

  return (
    <div style={{width: "100%"}} className={"c-flex-center"}> 
      <div className={"row-xas-aw c-flex-center"} style={{width: "100%", maxWidth: 1200, flexWrap: "wrap", justifyContent: "flex-start"}}>
      {
        playing?.map((item, index) => 
        <div style={{width: "calc(100% /3)"}} className={`c-co-as ${styleSlick['width-item']}`} key={index}>
          <Film movie={item} />
        </div>
      )
      }
    </div>
    </div>
  );
}

export const CustomArrows1 = (props) =>  {
  const [playing, setPlaying]= useState([])
  useEffect(()=> {
    setPlaying(_.uniqBy(props.arrFilm?.filter(item=> item?.PlayTimes?.filter(item2=> moment(item2?.timeStart, "YYYY-MM-DD HH:mm:ss").valueOf() <= moment(new Date()).valueOf() && moment(item2?.timeStart, "YYYY-MM-DD HH:mm:ss").add(parseInt(item?.state), "minutes").valueOf() >= moment(new Date()).valueOf() && moment(item2?.timeStart, "YYYY-MM-DD HH:mm:ss").format("DD-MM-YYYY") === moment(new Date()).format("DD-MM-YYYY"))?.length > 0), function(e) {return e.movieName?.trim()}))
  }, [props?.arrFilm])
  

  return (
    <div style={{width: "100%"}} className={"c-flex-center"}> 
      <div className={"row-xas-aw c-flex-center"} style={{width: "100%", maxWidth: 1200, flexWrap: "wrap", justifyContent: "flex-start"}}>
      {
        playing?.map((item, index) => 
        <div style={{width: "calc(100% /3)"}} className={`c-co-as ${styleSlick['width-item']}`} key={index}>
          <Film movie={item} />
        </div>
      )
      }
    </div>
    </div>
  );
}


  export default memo(CustomArrows)