import { KEY_TOKEN } from "../../Service/storeService";
import { USER_LOGIN } from "../../utilities/setting/config";
import { DANG_NHAP, THONG_TIN_NGUOI_DUNG } from "../Types/UserManageType";
let user = {};
let userRegister ={};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
  userRigester:userRegister,
};
export const UserManageReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP: {
      const { thongTinDangNhap } = action;
      console.log("thongTinDangNhap", thongTinDangNhap);
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(KEY_TOKEN, thongTinDangNhap.token);
      return { ...state, userLogin: thongTinDangNhap };
    }
   case THONG_TIN_NGUOI_DUNG : {
    state.userRigester = action.userRegister
    return {...state}
   }
    default:
      return { ...state };
  }
};
