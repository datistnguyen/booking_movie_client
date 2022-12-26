import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Header/Header.css";
import _ from "lodash";
import { Fragment } from "react";
import { USER_LOGIN } from "../../../../utilities/setting/config";
import { KEY_TOKEN } from "../../../../Service/storeService";
import { AppContext, history } from "../../../../App";
import { UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Input } from "antd";
import Fuse from "fuse.js"
import OutsideClickHandler from "react-outside-click-handler";
import {AiOutlineSearch} from "react-icons/ai"

export default function Header() {
  const [open1, setOpen1]= useState(false)
  const [open2, setOpen2]= useState(false)
  const [openSearch, setOpenSearch]= useState(false)
  const { userLogin } = useSelector((state) => state.UserManageReducer);
  // eslint-disable-next-line
  const { film, setFilm } = useContext(AppContext);
  const [search, setSearch]= useState([])
  const [searchString, setSearchString]= useState("")
  const options = {
    keys: [
      "movieName",
    ]
  };
  const fuse= new Fuse(film, options)
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <Fragment>
          <button
            className="btn btn-outline-danger px-3 "
            type="submit"
            onClick={() => {
              history.push("/login");
            }}
          >
            <NavLink style={{ color: "white" }} to="/login">
              Sign in
            </NavLink>
          </button>
          <button className="btn btn-outline-success px-3 mx-3" type="submit">
            <NavLink style={{ color: "white" }} to="/register">
              Sign up
            </NavLink>
          </button>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <button
          className="btn  px-3 "
          type="submit"
          style={{ display: "flex", justifyContent: "center", position: "relative"}}
        >
          <div style={{ color: "white" }}>
            <div onClick={()=> setOpen2(prev=> !prev)}>
              <UserOutlined
                style={{
                  width: "32px",
                  height: "32px",
                  lineHeight: "30px",
                  borderRadius: "20px",
                  backgroundColor: "pink",
                }}
              />{" "}
              hello!{userLogin.username}
              </div>
          </div>
            {
              open2=== true && <OutsideClickHandler onOutsideClick={()=> setOpen2(false)}>
                  <div style={{width: "100%", position: "absolute", top: "100%", left: 0, padding: 10, borderRadius: 10, background: "#fff"}}>
                  <Link onClick={()=> setOpen2(false)} style={{textDecoration: "none", color: "unset"}} to={"/history"}>
                    <div style={{width: "100%", padding: '10px 0', fontWeight: 600, cursor: "pointer", textAlign: "left"}}>
                      History
                    </div>
                  </Link>
                  <div
                    onClick={() => {
                      console.log(userLogin, "đăng xu");
                      localStorage.removeItem(userLogin);
                      localStorage.removeItem(USER_LOGIN);
                      localStorage.removeItem(KEY_TOKEN);
                      history.push("/home");
                      window.location.reload();
                    }}
                    className="text-success"
                    style={{width: "100%", padding: '10px 0', fontWeight: 600, cursor: "pointer", textAlign: "left"}}
                  >
                  Logout
                </div>
              </div>
              </OutsideClickHandler>
            }
        </button>
      </Fragment>
    );
  };
  return (
    <header
      className="navbar container-fluid text-light"
      style={{
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        height: 60,
        backgroundColor: "rgba(40,40,40,0.6)",
        position: "fixed",
      }}
    >
      <div className={"c-flex-center"} style={{gap: 20}}>
        <NavLink className="navbar-brand mx-4" to="/" style={{width: "max-content"}}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
            alt=""
            style={{ width: "132px" }}
          />
        </NavLink>
        <div className={"c-flex-center"} style={{position: "relative"}}>
          <>
          {
            open1=== false && <div onClick={()=> setOpen1(prev=> true)} style={{width: 40, height: 40, borderRadius: "50%", background: "#fff", cursor: "pointer"}} className={"c-flex-center"}>
              <AiOutlineSearch style={{width: 24, height: 24, color: "#000"}} />
            </div>
          }
          {
            open1=== true && <><OutsideClickHandler onOutsideClick={()=> setOpen1(false)}>
              <Input value={searchString} onChange={(e)=> {
                setSearchString(e.target.value)
                if(e.target.value.length > 0) {
                  setOpenSearch(true)
                }
                else {
                  setOpenSearch(false)
                }
                setSearch(fuse.search(e.target.value))
                console.log(fuse.search(e.target.value))
              }} placeholder="Search film..." style={{width: 350, height: 40, borderRadius: 80}} />
              {
                openSearch=== true && <OutsideClickHandler onOutsideClick={()=> setOpenSearch(()=> false)}>
                    <div style={{width: "100%", position: "absolute", left: 0, top: "100%", background: "#fff", zIndex: 99, borderRadius: 10, overflow: "hidden"}}>
                      <div style={{width: "100%", maxHeight: 300, overflow: "auto", cursor: "pointer", padding: 10}}>
                        {search?.length > 0 && search?.map((item, key)=> <Link onClick={(e)=> {
                          e.stopPropagation()
                          setOpenSearch(false)
                        }} to={"/booking/movie-information/"+ item?.item?.id} key={key}>
                        <div key={key} style={{padding: 10, alignItems: "flex-start", gap: 10}} className={"c-flex-center c-hover-eff"}>
                        <img src={item?.item?.img} style={{width: 100, aspectRatio: 2 / 3, borderRadius: 5}} alt="" />
                        <div style={{height: "auto"}}>
                          <div className="film-c-desc" style={{marginBottom: 12, color: "#000"}}>{item?.item?.movieName}</div>
                          <div className={"c-desc-s"} style={{fontSize: 12, color: "#000", width: "100%"}}>{item?.item?.desc}</div>
                        </div>
                      </div>
                      </Link>)}
                      {search?.length <= 0 && <div style={{padding: 10, textAlign: "center", color: "#000"}}>No search result</div>}
                      </div>
                  </div>
                </OutsideClickHandler>
              }
            </OutsideClickHandler></>
          }
          </>
        </div>
      </div>
      <ul
        className="nav justify-content-center pb-2"
        style={{ marginRight: "88px" }}
      >
        <li className="nav-item active">
          <NavLink
            to="/home"
            className="nav-link text-white "
            activeClassName="border-b-1 border-white"
          >
            Movies
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link text-white"
            activeClassName="border-b-1 border-white"
            to="/theater"
          >
            Theater
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link text-white"
            activeClassName="border-b-1 border-white"
            to="/filmhot"
          >
            Film Hot
          </NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink  className="nav-link text-white"  activeClassName="border-b-1 border-white"  to="/admin">Admin</NavLink>
      </li> */}
        <li className="nav-item">
          <NavLink
            className="nav-link text-white"
            activeClassName="border-b-1 border-white"
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="d-flex pb-2">{renderLogin()}</div>
    </header>
  );
}
