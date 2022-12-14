import React, { useState } from "react";
import {  useSelector } from "react-redux";
import Footer from "../../templates/HomeTemplate/Layout/Footer/Footer";
import Header from "../../templates/HomeTemplate/Layout/Header/Header";
import "../Profile/Profile.css";
// import { TwitterOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import { Form, Input, Button } from "antd";

export default function Profile(props) {
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [componentSize, setComponentSize] = useState("default");

  const { userLogin } = useSelector((state) => state.UserManageReduccer);
  // const {Chitietdatve}  = useSelector((state)=>state.QuanLyDatVeReducer)
  console.log(userLogin, "profile");
  // console.log(Chitietdatve,'chi tiet dat ve')
  // const { thongTinPhim } = Chitietdatve;

  // const dispatch = useDispatch();
  const Formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: userLogin.username,
      email: userLogin.email,
      phoneNumber: userLogin.soDT,
      date: userLogin.date,
      address: userLogin.address,
      role: userLogin.role,
    },
  });

  return (
    <div
      className="body"
      style={{
        backgroundImage: "url(../img/cinema-slide.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
        onSubmitCapture={Formik.handleSubmit}
        id="card"
      >
        <div className="left">
          <svg width={0} height={0}>
            <clipPath id="clipPolygon">
              <polygon points="0 430,405 570,405 0,0 0" />
            </clipPath>
          </svg>
          <img src="../img/ticket.png" alt="user" className="clip" id="image" />
          <table className="table">
            <tbody>
              <tr className="MuiTableRow-root">
                <th scope="col">Tên Phim :</th>
                <td></td>
              </tr>
              <tr className="MuiTableRow-root">
                <th scope="col">Địa Chỉ:</th>
                <td></td>
              </tr>
              <tr>
                <th>Giờ chiếu: </th>
                <td></td>
              </tr>
              <tr>
                <th>Ngày Chiếu: </th>
                <td></td>
              </tr>
              <tr>
                <th>Tên cụm Rạp: </th>
                <td></td>
              </tr>
              <tr>
                <th>Tên Rạp: </th>
                <td></td>
              </tr>
            </tbody>
          </table>
          {/* <a href="#" className="chat"><span className="entypo-comment" /></a> */}
        </div>
        <div className="right">
          <h1>Thông Tin Cá Nhân</h1>
          <div className="table">
            <Form.Item label="username">
              <Input
                name="username"
                className="ml-5"
                type="text"
                value={Formik.values.username}
                onChange={Formik.handleChange}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                name="email"
                className="ml-5"
                type="text"
                value={Formik.values.email}
                onChange={Formik.handleChange}
              />
            </Form.Item>
            <Form.Item label="Name">
              <Input
                name="email"
                className="ml-5"
                type="text"
                value={Formik.values.email}
                onChange={Formik.handleChange}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input
                name="phoneNumber"
                className="ml-5"
                type="text"
                value={Formik.values.phoneNumber}
                onChange={Formik.handleChange}
              />
            </Form.Item>
            <Form.Item label="Date">
              <Input
                name="date"
                className="ml-5"
                type="text"
                value={Formik.values.date}
                onChange={Formik.handleChange}
              />
            </Form.Item>
            <Form.Item label="Address">
              <Input
                name="address"
                className="ml-5"
                type="text"
                value={Formik.values.address}
                onChange={Formik.handleChange}
              />
            </Form.Item>
            <Form.Item label="UserCode">
              <Input
                name="role"
                className="ml-5"
                type="text"
                value={Formik.values.role}
                onChange={Formik.handleChange}
              />
            </Form.Item>
          </div>

          <nav className="social">
            <Button htmlType="submit" className="btn  button mb-4">
              <h2 className="text-light">UPDATE</h2>
            </Button>
            {/* <a href="#"><span><TwitterOutlined /></span></a>
      <a href="#"><span className="entypo-facebook" /></a>
      <a href="#"><span className="entypo-dribbble" /></a>
      <a href="#"><span className="entypo-instagrem" /></a> */}
          </nav>
        </div>
      </Form>
      <Footer />
    </div>
  );
}
