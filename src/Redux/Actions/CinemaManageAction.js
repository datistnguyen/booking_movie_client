import { CinemaService } from "../../Service/CinemaManageService"
import { SET_CHI_TIET_PHIM, SET_CUM_RAP } from "../Types/CinemaManageType";


export const getAllCinemaAction = () =>{
  return async (dispatch) => {
    try {
      const result = await CinemaService.getAllCinema();
      dispatch({
        type:SET_CUM_RAP,
        arrCinema:result.data
      })
    } catch (errors) {
      console.log('errors',errors)
    }
  }
}

export const getAllMovieSchedule =(id) => { 
  return async (dispatch)=>{
    try {
      const result = await CinemaService.getAllMovieSchedule(id);
      console.log("result",result)
      dispatch({
          type:SET_CHI_TIET_PHIM,
          filmDetail:result.data,
      })
      
    } catch (error) {
      console.log('errors',error)
    }
  }
 }