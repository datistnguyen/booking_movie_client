import React, { useState } from 'react'
import "./LoginAdmin.sass"
import Cookies from "js-cookie"
import { Navigate } from 'react-router-dom'

const LoginAdmin = () => {
  const [account, setAccount]= useState("")
  const [password, setPassword]= useState("")
  const [message, setMessage]= useState("")
  if(Cookies?.get("uid")=== "admin") {
    return (
      <Navigate to={"/admin/user"} replace={true} />
    )
  }
  else {
    
    const loginAdmin= ()=> {
      if(account.trim()=== "admin" && password.trim()=== "admin") {
        Cookies.set("uid", "admin")
        return window.location.reload()
      }
      else {
        setMessage(()=> "Tài khoản hoặc mật khẩu không chính xác")
      }
    }
    return (
      <div className={"wrap-login-admin-page"} style={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center', position: "fixed", zIndex: 999, top: 0, left: 0}}>
        <div id="content">
          <h1>Admin đăng nhập!</h1>
          <form action="" method="get">
            <div className="input-bar">
              <input placeholder="Tài khoản" onChange={(e)=> setAccount(e.target.value)} type="text" id="name" className="input" />
              <box-icon name='user'></box-icon>
            </div>
            <div className="input-bar">
              <input placeholder="Mật khẩu" onChange={(e)=> setPassword(e.target.value)} type="password" id="password" className="input" />
              <box-icon name='lock-alt' ></box-icon>
            </div>
          </form>
          <div className={"msg"} style={{marginBottom: 12}}>{message}</div>
          <button onClick={loginAdmin} type="submit" id="btn">Đăng nhập</button>
        </div>
      </div>
    )
  }
}

export default LoginAdmin