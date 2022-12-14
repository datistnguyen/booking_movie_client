import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import { loginAction } from "../../Redux/Actions/UserManageAction";
import "../Login/Login.css";

export default function Login(props) {
  // const { userLogin } = useSelector((state) => state.UserManageReducer);
  const dispatch = useDispatch();
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("không được bỏ trống trường thông tin !"),
      password: Yup.string().required("không được để trống trường thông tin !"),
    }),
    onSubmit: (values) => {
      const action = loginAction(values);
      dispatch(action);
      console.log("value", values);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        Formik.handleSubmit(e);
      }}
      className="login-left"
    >
      <div className="top-link">
        <NavLink to="/" className="top-go" style={{ textDecoration: "none" }}>
          <i
            className="fa-solid fa-circle-arrow-left"
            style={{ display: "block" }}
          ></i>
          <span className="top-out"> Return home</span>
        </NavLink>
      </div>
      <div className="contact">
        <div>
          <h3>SIGN IN</h3>
          <input
            name="email"
            value={Formik.values.email}
            onChange={Formik.handleChange}
            type="text"
            placeholder="EMAIL"
          />
          <input
            name="password"
            value={Formik.values.password}
            onChange={Formik.handleChange}
            type="text"
            placeholder="PASSWORD"
          ></input>
          <p style={{ fontSize: "15px", fontWeight: "600" }}>
            If you do not have an account, please click the{" "}
            <NavLink to="/register" style={{ textDecoration: "none" }}>
              Register
            </NavLink>
          </p>
          <button className="btn_submit" type="submit">
            LET'S GO
          </button>
        </div>
      </div>
    </form>
  );
}
