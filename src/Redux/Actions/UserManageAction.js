import { UserService } from "../../Service/UserManageService";
import { DANG_NHAP } from "../Types/UserManageType";
// import { KEY_TOKEN } from "../../Service/storeService";
// import { USER_LOGIN } from "../../utilities/setting/config";
// import { history } from "../../App";
import swal from "sweetalert";
// import Cookies from "js-cookie";
export const loginAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await UserService.Login(thongTinDangNhap);
      if (result.status === 200) {
        await dispatch({
          type: DANG_NHAP,
          thongTinDangNhap: result.data.userInfo,
        });
      }
      swal({
        title: "Good job!",
        text: "Đăng nhập thành công",
        icon: "success",
      });

      window.location.href= window.location.origin+ "/"
      // chuyển về trang trước đó 
      console.log("result", result);
    } catch (error) {
      console.log(error)
      await swal({
        title: "FAIL!",
        text: 'Thông Tin Điền Vào chưa đúng vui lòng kiểm tra lại! hoặc load lại trang',
        icon: "warning"
      });
      console.log("error", error.response);
    }
  };
};
