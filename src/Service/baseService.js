import axios from "axios";
import { API_ROOT } from "../utilities/setting/config";
import { KEY_TOKEN } from "../Service/storeService";
export class baseService {
  put = (url, model) => {
    return axios({
      url: `${API_ROOT}${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: `Bearer ${KEY_TOKEN}` + localStorage.getItem(KEY_TOKEN),
      },
    });
  };
  post = (url, model) => {
    return axios({
      url: `${API_ROOT}${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(KEY_TOKEN),
      },
    });
  };
  get = (url, model) => {
    return axios({
      url: `${API_ROOT}${url}`,
      method: "GET",
      data: model,
      headers: {
        Authorization: `Bearer ${KEY_TOKEN}` + localStorage.getItem(KEY_TOKEN),
        
      },
    });
  };
  delete = (url, model) => {
    return axios({
      url: `${API_ROOT}${url}`,
      method: "DELETE",
      data: model,
      headers: {
        Authorization: `Bearer ` + localStorage.getItem(KEY_TOKEN)
      }, //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
    });
  };
}