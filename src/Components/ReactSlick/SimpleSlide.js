import React from "react";
import "../ReactSlick/Slick.css";
import Film from "../Film/Film";
import Slider from "react-slick";
import styleSlick from 'react-slick'
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
const settings = {
  className: "center variable-width",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  speed: 1,
  rows: 2,
  slidesPerRow: 1,
  slidesToShow: 3,
  variableWidth: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const CustomArrows = (props) =>  {
 const renderfilm = () => {
    return props.arrFilm.map((item, index) => {
      return (
        <div className={`${styleSlick['width-item']}`} key={index}>
          <Film movie={item} />
        </div>
      );
    });
  };

  return (
    <div>
      <Slider className="row" {...settings}>
        {renderfilm()}
      </Slider>
    </div>
  );
}


  export default CustomArrows