import Cookies from 'js-cookie'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminTemplate } from '../../templates/AdminTemplate/AdminTemplate'
import AddCinema from './Cinema/AddCinema'
import ListCinema from './Cinema/Cinema'
import AddCluster from './Cluster/AddCluster'
import ListCluster from './Cluster/Cluster'
import Comment from './Comment/Comment'
import AddDiscount from './Discount/AddDiscount'
import ListDiscount from './Discount/Discount'
import AddFilm from './Film/AddFilm'
import ListFilm from './Film/Film'
import LoginAdmin from './LoginAdmin'
import AddPlaytimes from './Playtimes/AddPlaytimes'
import ListPlaytimes from './Playtimes/Playtimes'
import AddRoom from './Room/AddRoom'
import ListRoom from './Room/Room'
import Stats from './Stats/Stats'
import AddUser from './Users/AddUser/AddUser'
import ListUser from './Users/ListUser/ListUser'

export default function Admin() {

  return (
    <Routes>
      <Route path="/*" element={<LoginAdmin />} />
      {
        Cookies.get("uid")=== "admin" && 
        <>
          <Route path='/user/adduser' element={<AdminTemplate component={<AddUser /> } />}/>
          <Route path="/user/" element={<AdminTemplate component={<ListUser />} />} />
          <Route path={"/film"} element={<AdminTemplate component={<ListFilm />} />} />
          <Route path={"/cinema"} element={<AdminTemplate component={<ListCinema />} />} />
          <Route path={"/film/addnew"} element={<AdminTemplate component={<AddFilm />} />}  />
          <Route path={"/cinema/addnew"} element={<AdminTemplate component={<AddCinema />} />}  />
          <Route path={"/cluster"} element={<AdminTemplate component={<ListCluster />} />} />
          <Route path={"/cluster/addnew"} element={<AdminTemplate component={<AddCluster />} />} />
          <Route path={"/room"} element={<AdminTemplate component={<ListRoom />} />} />
          <Route path={"/room/addnew"} element={<AdminTemplate component={<AddRoom />} />} />
          <Route path={"/discount/"} element={<AdminTemplate component={<ListDiscount />} />} />
          <Route path={"/discount/addnew"} element={<AdminTemplate component={<AddDiscount />} />} />
          <Route path={"/playtimes"} element={<AdminTemplate component={<ListPlaytimes />} />} />
          <Route path={"/playtimes/addnew"} element={<AdminTemplate component={<AddPlaytimes />} />} />
          <Route path={"/stats"} element={<AdminTemplate component={<Stats />} />} />
          <Route path={"/comments"} element={<AdminTemplate component={<Comment />} />} />
        </>
      }
      
    </Routes>
  )
}
