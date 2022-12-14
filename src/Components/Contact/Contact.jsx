import React from "react";
import "./Contact.css"

const ContactPage = () => {
  return (
    
    <div className="formbold-main-wrapper">
    <div className="formbold-form-wrapper" style={{borderRadius: 10}}>
      <form action="https://formbold.com/s/FORM_ID" method="POST" style={{padding: 10, borderRadius: 10}}> 
        <div className="formbold-mb-5">
          <label for="name" className="formbold-form-label"> Tên của bạn </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Tên của bạn"
            className="formbold-form-input"
          />
        </div>
  
        <div className="formbold-mb-5">
          <label for="email" className="formbold-form-label"> Địa chỉ email </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email của bạn"
            className="formbold-form-input"
          />
        </div>
  
        <div className="formbold-mb-5">
          <label for="subject" className="formbold-form-label"> Số điện thoại </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Nhập số điện thoại của bạn"
            className="formbold-form-input"
          />
        </div>
  
        <div className="formbold-mb-5">
          <label for="message" className="formbold-form-label"> Lời nhắn </label>
          <textarea
            rows="6"
            name="message"
            id="message"
            placeholder="Nhập lời nhắn của bạn"
            className="formbold-form-input"
          ></textarea>
        </div>
  
        <div>
          <button className="formbold-btn">Gửi</button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ContactPage;
