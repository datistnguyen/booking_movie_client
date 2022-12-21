// import { Button } from "react-bootstrap";
import React from "react";
import "./Contact.css"

const ContactPage = () => {
  return (
    
   <div className={"contact-page"} style={{width: "100%", padding: 16, position: "relative", top: 76}}>
    <div className={"contact-page-wrap"} style={{width: "100%", background: "#3a3b3c", padding: 24, borderRadius: 10, color: "#fff"}}>

      <div style={{fontWeight: 600, textAlign: "center", fontSize: 18}}>Liên hệ với chúng tôi</div>
      <div style={{fontSize: 32, fontWeight: 700, textTransform: "uppercase", textAlign: "center"}}>Gửi tin nhắn đến chúng tôi</div>
      <div style={{marginTop: 12, fontSize: 14, textAlign: "center"}}>Nếu bạn có bất kỳ về dịch vụ của chúng tôi, hãy liên hệ với chúng tôi dưới form sau</div>
      <div className={"info"} style={{width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 16}}>
        <div className={"info-f-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Họ" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#000", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
        <div className={"info-l-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Tên" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#000", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className={"info"} style={{width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 16}}>
        <div className={"info-f-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Email" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#000", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
        <div className={"info-l-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Số điện thoại" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#000", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
      </div>
      <br />
      <br />

      <div className={"info"} style={{width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 16}}>
        <div className={"info-f-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Nhập tin nhắn vào đây" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#000", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
      </div>
      <br />
      <br />
      <div style={{width: '100%', direction: "rtl"}}>
        <div style={{padding: "12px 16px", borderRadius: 10, background: "#2e89ff", color: "#fff", cursor: "pointer", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: "center", border: "none", outline: "none", width: 160, fontSize: 18,}}>
          Gửi
        </div>
      </div>
    </div>
   </div>
  );
};

export default ContactPage;
