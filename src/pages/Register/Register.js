import React,{useState } from 'react'
import { useFormik } from "formik";
// import DatePicker from "react-datepicker";
// import { DatePicker, Space } from 'antd';
import * as Yup from "yup";
import { NavLink } from 'react-router-dom';
import"../Register/Register.css"
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch,useSelector } from 'react-redux';
import {RegisterAction} from '../../Redux/Actions/RegisterAction'
export default function Register(props) {
  const dispatch = useDispatch();
  const { userRegister } = useSelector((state) => state.UserManageReducer);
  console.log(userRegister, "user");
  // eslint-disable-next-line
  const [startDate, setStartDate] = useState(new Date());
  const Formik = useFormik({
    initialValues:{
      username:"",
      password:"",
      email:"",
      phoneNumber:"",
      date:"",
      address:"",
    },
    validationSchema:Yup.object({
      username: Yup.string()
        .required("Username can't be blank")
        .min(6, "Minimum 6 characters")
        .max(15, "Minimum 15 characters"),
      password: Yup.string()
        .required("Password is not blank")
        .min(6, "Password Minimum 6 characters")
        .max(12, "Password Minimum 12 characters"),
      email: Yup.string()
        .required("Email is not blank")
        .email("Email is not formatted correctly"),
      phoneNumber:Yup.string().required("Phone number cannot be left blank!"),
      date:Yup.string().required("the information field cannot be left blank!"),
      address:Yup.string().required("Address not be vacant!"),
    }),
    onSubmit: (values) => {
      const action = RegisterAction(values);
      dispatch(action);
      console.log("value", values);
    },
  
  })
  return (
    <form 
    onSubmit={(e) => { 
      e.preventDefault();
      Formik.handleSubmit(e);
     }}
     className="login-left"
    >
      <div className='top-link'>
        <NavLink to="/login" className="top-go" style={{textDecoration:"none"}}>
        <i className="fa-solid fa-circle-arrow-left" style={{display:"block"}}></i>
         
        </NavLink>
      </div>
      <div className='contact'>
        <div>
          <h3 className='sign-up'>SIGN UP</h3>
          <input name='username' 
            value={Formik.values.username}
            onChange={Formik.handleChange}
            type="text"
            placeholder="USERNAME"
            />
            {Formik.touched.username && Formik.errors.username ? (
                <div className="text-danger">{Formik.errors.username}</div>
              ) : null}
           <input name='password'
           value={Formik.values.password}
           onChange={Formik.handleChange}
           type="password"
           placeholder='PASSWORD'
           />
           {Formik.touched.password && Formik.errors.password ? (
                <div className="text-danger">{Formik.errors.password}</div>
              ) : null}
           <input name='email'
           value={Formik.values.email}
           onChange={Formik.handleChange}
           type="email"
           placeholder='EMAIL'
           />
            {Formik.touched.email&& Formik.errors.email ? (
                <div className="text-danger">{Formik.errors.email}</div>
              ) : null}
           <input name='phoneNumber'
           value={Formik.values.phoneNumber}
           onChange={Formik.handleChange}
           type="text"
           placeholder='PHONENUMBER'
           />
           {Formik.touched.phoneNumber&& Formik.errors.phoneNumber ? (
                <div className="text-danger">{Formik.errors.phoneNumber}</div>
              ) : null}
           {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} status="error"  /> */}
           <input name='address'
           value={Formik.values.address}
           onChange={Formik.handleChange}
           type="text"
           placeholder='ADDRESS'
           />
            {Formik.touched.address&& Formik.errors.address ? (
                <div className="text-danger">{Formik.errors.address}</div>
              ) : null}
           <input
          name="date"
          type="date"
          onChange={Formik.handleChange}
          value={Formik.values.date}
        />
          {Formik.touched.date&& Formik.errors.date ? (
                <div className="text-danger">{Formik.errors.date}</div>
              ) : null}
          
           
          <button className="btn_submit" type='submit' >SIGN UP</button>
        </div>
      </div>
    </form>
  )
}
