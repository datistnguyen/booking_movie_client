import { UserService } from "../../Service/UserManageService";
import {THONG_TIN_NGUOI_DUNG} from "../Types/UserManageType";
import swal from "sweetalert";
// export const RegisterAction = (thongTinDangNhap) => {
//   //thông tin người dùng mk tk

//   // call api
//   return async (dispatch) => {
//     try {
//       const result = await UserService.Register(thongTinDangNhap);
//       //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
//       console.log("result", result.data.content);
//       if (result.status === 200) {
//         dispatch({
//           type: THONG_TIN_NGUOI_DUNG,
//           ttDangNhap: result.data.content,
//         });
//         swal({
//           title: "Good job!",
//           text: "Đăng nhập thành công",
//           icon: "success",
//         });
//         // chuyển về trang trước đó
//         history.goBack();
//       }

//       console.log("result", result);
//     } catch (errors) {
//       // xử lý thất bại
//       swal({
//         title: "warning!",
//         text: "sai tài khoản hoặc mật khẩu vui lòng  đăng nhập lại",
//         icon: "warning",
//       });
//       console.log("error", errors);
//     }
//   };
// };
export const RegisterAction = (thongTinDangKy) => {
  //thông tin người dùng mk tk

  // call api
  return async (dispatch) => {
    try {
      const result = await UserService.Register(thongTinDangKy);
      //Sau khi lấy dữ liệu từ api về =>  Đưa lên reducer
      console.log("result", result.data.content);
      if (result.status === 200) {
        await dispatch({
          type: THONG_TIN_NGUOI_DUNG,
          userRigester: result.data.content,
        });
        await swal({
          title: "Good job!",
          text: 'Đăng Ký Tài Khoản Thành Công',
          icon: "success",
  
        });
        // chuyển về trang trước đó
        window.location.href= window.location.origin+ "/login"
      }

      console.log("result", result);
    } catch (errors) {
      // xử lý thất bại
      await swal({
        title: "FAIL!",
        // content: errors.response.data?.content,
        text: 'Thông Tin Điền Vào chưa đúng vui lòng kiểm tra lại! hoặc load lại trang',
        icon: "warning",
        
      });
      
      console.log("error", errors);
    }
  };
};