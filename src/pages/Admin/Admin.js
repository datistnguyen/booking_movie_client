import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminTemplate } from '../../templates/AdminTemplate/AdminTemplate'
import AddCinema from './Cinema/AddCinema'
import ListCinema from './Cinema/Cinema'
import AddCluster from './Cluster/AddCluster'
import ListCluster from './Cluster/Cluster'
import ListDiscount from './Discount/Discount'
import AddFilm from './Film/AddFilm'
import ListFilm from './Film/Film'
import AddRoom from './Room/AddRoom'
import ListRoom from './Room/Room'
import AddUser from './Users/AddUser/AddUser'
import ListUser from './Users/ListUser/ListUser'

export default function Admin() {

  return (
    <Routes>
      <Route path="/*" element={<AdminTemplate component={<Admin/> } />}/>
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
    </Routes>
  )
}
