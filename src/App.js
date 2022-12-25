import './App.css';
import { createBrowserHistory } from 'history'
import {BrowserRouter , Route, Routes } from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate'
import { UserTemplate } from './templates/UserTemplate/UserTemplate'
import {AdminTemplate } from './templates/AdminTemplate/AdminTemplate'
import {CheckTemplate } from './templates/CheckTemplate/CheckTemplate'
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Theater'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Detail from './pages/Detail/Detail'
// import Checkout from './pages/Checkout/Checkout'
import Profile from "./pages/Profile/Profile"
import Booking from './pages/Booking/Booking';
import { createContext, Fragment, useEffect, useState } from 'react';
import Header from './templates/HomeTemplate/Layout/Header/Header';
import Footer from './templates/HomeTemplate/Layout/Footer/Footer';
import ToBooking from './pages/ToBooking/ToBooking';
import ContactPage from './Components/Contact/Contact';
import FilmHot from './pages/FilmHot/FilmHot';
import "./App.css"
import axios from 'axios';
import History from './Components/History/History';
// import {Supense,lazy} from 'react'

export const history = createBrowserHistory();

export const AppContext= createContext()
function App() {
  const [film, setFilm]= useState([])
  useEffect(()=> {
    (async()=> {
      const res= await axios({
        url: "http://localhost:8080/film",
        method: "get",
      })
      const result= await res.data
      return setFilm(result)
    })()
  }, [])
  return (
    <AppContext.Provider value={{film, setFilm}}>
      <div className="App">
        <BrowserRouter >
          <Routes>
            <Route path={"/history"} element={<Fragment>
              <Header />
              <History />
              <Footer />
            </Fragment>} />
            <Route path="/book/*" element={<Fragment>
              <Header />
                <ToBooking />
              <Footer />
          </Fragment>} />
          <Route path="/" element={
          <Fragment>
              <Header />
                <Home />
              <Footer />
          </Fragment>}/>
          <Route path="/home" element={
            <Fragment>
              <Header />
                <Home />
              <Footer />
          </Fragment>}
          />
          <Route path="/theater" element={<Fragment>
            <Header />
              <Contact />
            <Footer />
          </Fragment>}/>
          <Route path="/booking/*" element={
            <Fragment>
            <Header />
              <Booking />
            <Footer />
          </Fragment>}
          />
          <Route path="/filmhot" element={
            <Fragment>
              <Header />
                <FilmHot />
              <Footer />
              
            </Fragment>} />
          <Route path={"/contact"} element={
              <Fragment>
                <Header />
                  <ContactPage />
                <Footer />
              </Fragment>
            } />
          <Route path="/detail/:id" element={<Fragment>
            <Header />
              <Detail />
            <Footer />
          </Fragment>}/>
          <Route path="/profile" element={<Fragment>
            <Header />
              <Profile />
            <Footer />
          </Fragment>} />
          <Route path="/login" element={
            <Fragment>
              <section className="login" style={{backgroundImage:'url(../img/homeappbg.jpg)', height:"727px",backgroundSize:"cover",backgroundPosition:"center"}}>
                <div className="login-box">
                  <Login />
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
          }/>
          <Route path="/register" element={
            <Fragment>
              <section className="login" style={{backgroundImage:'url(../img/homeappbg.jpg)', height:"727px",backgroundSize:"cover",backgroundPosition:"center"}}>
                <div className="login-box">
                  <Register/>
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
          }/>
          {/* <Route path="/checkout/:id" element={<Checkout />}/> */}
          <Route path="/admin/*" element={<Admin />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}

export default App;


