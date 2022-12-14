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
        .required("Tên người dùng không để trống")
        .min(6, "Tối thiểu 6 ký tự")
        .max(15, "Tối đa 15 ký tự"),
      password: Yup.string()
        .required("Mật khẩu không để trống")
        .min(6, "Mật Khẩu Tối thiểu 6 ký tự")
        .max(12, "Mật khẩu Tối đa 12 ký tự"),
      email: Yup.string()
        .required("Email không để trống")
        .email("Email không đúng format"),
      phoneNumber:Yup.string().required("Số điện thoại không được bỏ trống !"),
      date:Yup.string().required("không được để trống trường thông tin !"),
      address:Yup.string().required("Địa chỉ không được bỏ trống!"),
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
