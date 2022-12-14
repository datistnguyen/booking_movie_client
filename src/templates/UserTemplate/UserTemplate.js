import "../UserTemplate/UserTemplate.css"
import { Fragment } from "react"
import {Route} from 'react-router-dom'
export const UserTemplate = (props) => { 
  const {Component,...restProps} = props
  return<Route {...restProps} render={(propsRoute) => { 
    return<Fragment>
    <section className="login" style={{backgroundImage:'url(../img/homeappbg.jpg)', height:"727px",backgroundSize:"cover",backgroundPosition:"center"}}>
      <div className="login-box">
        <Component {...propsRoute}/>
       
       <div className="login-right" style={{backgroundImage:'url(../img/homeappbg.jpg)'}}>
        <div className="login-text">
          <img src="./img/logo-full.png" alt="" />
           <h5>A UX BASED CREATIVE AGENCEY</h5>
        </div>
        <div className="login-inductor"><img src="./img/logo-full.png" alt="" /></div>
       </div>
      </div>
     
    </section>
    </Fragment>
   }}/>
 }