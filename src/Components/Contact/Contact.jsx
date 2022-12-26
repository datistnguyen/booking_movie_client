// import { Button } from "react-bootstrap";
import React from "react";
import "./Contact.css"

const ContactPage = () => {
  return (
    
   <div className={"contact-page"} style={{width: "100%", padding: 16, position: "relative", top: 76}}>
    <div className={"contact-page-wrap"} style={{width: "100%", padding: 24, borderRadius: 10, color: "#fff"}}>
      <div style={{fontWeight: 600, textAlign: "center", fontSize: 18}}>Contact us</div>
      <div style={{fontSize: 32, fontWeight: 700, textTransform: "uppercase", textAlign: "center"}}>Leave a message</div>
      
      <div style={{marginTop: 12, fontSize: 14, textAlign: "center"}}>If you have any questions about our services, please contact us using the form below</div>
      <br />
      <br />
      <div className={"info"} style={{width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 16}}>
        <div className={"info-f-name"} style={{flex: '1 1 0'}}>
          <input placeholder="First name" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#d81457", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
        <div className={"info-l-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Last name" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#d81457", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={"info"} style={{width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 16}}>
        <div className={"info-f-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Email" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#d81457", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
        <div className={"info-l-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Phone number" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#d81457", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={"info"} style={{width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 16}}>
        <div className={"info-f-name"} style={{flex: '1 1 0'}}>
          <input placeholder="Type message to here" type="text" style={{width: "100%", oultine: "0", borderWidth: "0 0 2px", borderColor: "#d81457", background: "unset", fontSize: 24, fontWeight: 600}} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div style={{width: '100%', direction: "rtl"}}>
        <div style={{padding: "12px 16px", borderRadius: 10, background: "#2e89ff", color: "#fff", cursor: "pointer", fontWeight: 600, display: "flex", justifyContent: "center", alignItems: "center", border: "none", outline: "none", width: 160, fontSize: 18,}}>
          Submit
        </div>
      </div>
    </div>
   </div>
  );
};

export default ContactPage;
