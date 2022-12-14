// import axios from 'axios'
// import {API_ROOT} from '../utilities/setting/config'
// export const getAllUsers = async(inputId)=>{
//   const response= await axios.get(`${API_ROOT}/api/get-all-users?id=${inputId}`)
//   return response.data
// }

import { baseService } from "./baseService";



export class UserManageService extends baseService {

   Login =(thongTinDangNhap)=>{
    return this.post('/auth/login',thongTinDangNhap)
   }
   Register = (thongTinDangKy) =>{
    return  this.post('/auth/register',thongTinDangKy);
  }
}
export const UserService = new UserManageService();