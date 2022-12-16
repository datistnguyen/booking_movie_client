import { Fragment, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import swal from 'sweetalert'
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
// import { useSelector } from "react-redux"
import SubMenu from "antd/lib/menu/SubMenu";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  // TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {SiCinema4D, SiGoogleclassroom } from "react-icons/si"
import {AiOutlineCluster} from "react-icons/ai"
import {CiDiscount1} from "react-icons/ci"
import "./AdminTemplate.css"
const { Header, Content, Footer, Sider } = Layout;
// const {Submenu} = Menu

export const AdminTemplate = (props) => {
  const navigate= useNavigate()
  // eslint-disable-next-line
  const { Component, ...restProps } = props;
  const [collapsed, setCollapsed] = useState(false);
  // eslint-disable-next-line
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  useEffect(() => {
    window.scrollTo(1, 0);
  });
  // eslint-disable-next-line
  const operations = (
    <Fragment>
      <div style={{ position: "absolute", left: 1335, top: 10 }}>
        <button
          className="btn  px-3 "
          type="submit"
          style={{
            display: "flex",
            justifyContent: "center",
            width: "50%",
            height: 20,
          }}
        >
          <NavLink
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              marginRight: "32px",
            }}
            to="/profile"
          >
            <UserOutlined
              style={{
                width: "32px",
                height: "32px",
                lineHeight: "30px",
                borderRadius: "20px",
                backgroundColor: "pink",
                color: "black",
              }}
            />
            <span className="text-success">hello!</span>
          </NavLink>
        </button>

        <button
          onClick={() => {
            //  console.log(userlogin,'đăng xu')
            //    localStorage.removeItem(userlogin);
            //    localStorage.removeItem(USER_LOGIN);
            //    localStorage.removeItem(TOKEN);
            navigate("/Home");
            window.location.reload();
          }}
          style={{ position: "absolute", top: "-7px", left: "90px" }}
          className="text-success mt-3"
        >
          || Đăng Xuất
        </button>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={collapsed}>
          <div className="logo mt-1 py-2">
            <NavLink to="/Home">
              <img
                style={{ width: "70%", marginLeft: "25px" }}
                src="../img/logo-full.png"
                alt=""
              />
            </NavLink>
          </div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            {/* <Menu.Item key="3" icon={<PieChartOutlined />}>
              <NavLink to="/admin/Dashboard">Dashboard</NavLink>
            </Menu.Item> */}
            <SubMenu key="sub2" icon={<UserOutlined />} title="User">
              <Menu.Item key="1" icon={<FileOutlined />}>
                <NavLink to="/admin/user">Users</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<DesktopOutlined />} title="Film">
              <Menu.Item key="2" icon={<FileOutlined />}>
                <NavLink to="/admin/film">Films</NavLink>
              </Menu.Item>
              <Menu.Item key="5" icon={<FileOutlined />}>
                <NavLink to="/admin/film/addnew">Add New</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<SiCinema4D />} title="Cinema">
              <Menu.Item key="66" icon={<SiCinema4D />}>
                <NavLink to="/admin/cinema">Cinema</NavLink>
              </Menu.Item>
              <Menu.Item key="51" icon={<SiCinema4D />}>
                <NavLink to="/admin/cinema/addnew">Add Cinema</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" icon={<AiOutlineCluster />} title="Cluster">
              <Menu.Item key="10" icon={<AiOutlineCluster />}>
                <NavLink to="/admin/cluster">Cluster</NavLink>
              </Menu.Item>
              <Menu.Item key="99" icon={<AiOutlineCluster />}>
                <NavLink to="/admin/cluster/addnew">Add Cluster</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="su6b" icon={<SiGoogleclassroom />} title="Room">
              <Menu.Item key="11" icon={<SiGoogleclassroom />}>
                <NavLink to="/admin/room">Room</NavLink>
              </Menu.Item>
              <Menu.Item key="12" icon={<SiGoogleclassroom />}>
                <NavLink to="/admin/room/addnew">Add Room</NavLink>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="sub7" icon={<CiDiscount1 />} title="Discount">
              <Menu.Item key="13" icon={<CiDiscount1 />}>
                <NavLink to="/admin/discount">Discount</NavLink>
              </Menu.Item>
              <Menu.Item key="15" icon={<CiDiscount1 />}>
                <NavLink to="/admin/discount/addnew">Add Discount</NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout
          className="site-layout"
          style={{ backgroundColor: "#e8e8e8" }}
        >
          <Header style={{ padding: 0, backgroundColor: "aliceblue" }} />
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
                border: "1px solid #e2dcdc",
                backgroundColor: "aliceblue",
              }}
            >
              {props?.component}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            @ Admin Templates react movie 2022 PTB{" "}
          </Footer>
        </Layout>
      </Layout>
    </Fragment>
  );
};
