import { Fragment } from "react"
import {Redirect, Route} from 'react-router-dom'
import { USER_LOGIN } from "../../utilities/setting/config"

export const CheckTemplate = (props) => { 
  const {Component,...restProps} = props
  // if(localStorage.getItem(USER_LOGIN)){
  //          return <Redirect to="/login"/>
  // }
  return<Route {...restProps} render={(propsRoute) => { 
    return<Fragment>
     <Component {...propsRoute}/>
    </Fragment>
   }}/>
 }