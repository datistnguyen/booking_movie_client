import { FilmService } from "../../Service/FilmManageService"
import { SET_DANH_SACH_PHIM } from "../Types/FilmManageType";


export const getAllFilmAction = () =>{
  return async (dispatch) => {
    try {
      const result = await FilmService.getAllFilm();
      dispatch({
        type:SET_DANH_SACH_PHIM,
        arrFilm:result.data
      })
    } catch (errors) {
      console.log('errors',errors)
    }
  }
}