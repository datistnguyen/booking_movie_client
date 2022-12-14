import { Carousel } from 'antd';
import React from 'react'
import "../HomeCarousel/HomeCarousel.css"
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "cover",
  backgroundSize: "contain",
  width: "100%",
};

export default function HomeCarousel() {
  return (
    <Carousel autoplay={true} >
      <div >
        <h3 style={contentStyle}>
          <img className='w-full opacity-1' 
          style={{ width: "100%", height: "500px",backgroundPosition:'center',backgroundSize:'cover' }} 
          src="https://movienew.cybersoft.edu.vn/hinhanh/ban-tay-diet-quy.png" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img className='w-full opacity-1'
          style={{ width: "100%", height: "500px",backgroundPosition:'center',backgroundSize:'cover' }}  
          src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h.png" alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img className='w-full opacity-1'
          style={{ width: "100%", height: "500px",backgroundPosition:'center',backgroundSize:'cover' }}  
          src="https://movienew.cybersoft.edu.vn/hinhanh/cuoc-chien-sinh-tu.png" alt="" />
        </h3>
      </div>
    
  </Carousel>
  )
}
