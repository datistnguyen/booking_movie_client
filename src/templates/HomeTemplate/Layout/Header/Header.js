import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'
import _ from 'lodash'
import {Fragment} from "react"
import {USER_LOGIN} from "../../../../utilities/setting/config"
import { KEY_TOKEN } from '../../../../Service/storeService'
import {history} from "../../../../App"
import { UserOutlined } from "@ant-design/icons";
import { useSelector  } from 'react-redux'

export default function Header(props) {
  const {userLogin} = useSelector(state=>state.UserManageReducer)
  const renderLogin=()=>{
    if (_.isEmpty(userLogin)) {
      return <Fragment>
         <button
          className="btn btn-outline-danger px-3 "
          type="submit"
          onClick={() => { history.push('/login') }}
        >
          <NavLink style={{color:'white'}} to="/login">
            Sign in
          </NavLink>
      
        </button>
        <button className="btn btn-outline-success px-3 mx-3" type="submit">
          <NavLink style={{color:'white'}} to="/register">
            Sign up
          </NavLink>
        </button>
      </Fragment>
    }
    return <Fragment>
    <button
       className="btn  px-3 "
       type="submit" style={{display:'flex',justifyContent:'center'}}
     >
       <div style={{color:'white'}}>
         <UserOutlined style={{width:'32px',height:'32px',lineHeight:'30px',borderRadius:'20px',backgroundColor:'pink'}} /> hello!{userLogin.username} ||
       </div>
     </button>
     <button onClick={() => { 
       console.log(userLogin,'đăng xu')
         localStorage.removeItem(userLogin);
         localStorage.removeItem(USER_LOGIN);
         localStorage.removeItem(KEY_TOKEN);
         history.push('/home')
         window.location.reload();
        }} className="text-success">Đăng Xuất</button>
     </Fragment> 
  }
  return (

<header className='navbar container-fluid text-light' style={{
  width:"100%",
  top:0,
  left:0,
  zIndex:1000,
  height: 60,
  backgroundColor: "rgba(40,40,40,0.6)",
  position:'fixed',
}}>
  <NavLink className="navbar-brand mx-4" to="/">
    <img src="./img/logo-full.png" alt="" style={{width:"50%"}}/>
  </NavLink>
    <ul className="nav justify-content-center pb-2" style={{marginRight:"88px"}}>
      <li className="nav-item active">
        <NavLink to="/home" className="nav-link text-white "  activeClassName="border-b-1 border-white" >Movies</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/theater">Theater</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/filmhot">Film Hot</NavLink>
      </li>
      {/* <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/admin">Admin</NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/contact">Liên hệ</NavLink>
      </li>
    </ul>
    <div className='d-flex pb-2'	>
      {renderLogin()}
      </div>
</header>
  )
}
