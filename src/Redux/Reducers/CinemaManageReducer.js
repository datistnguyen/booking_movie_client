import { SET_CUM_RAP } from "../Types/CinemaManageType";
const stateDefault = {
  arrCinema:[]
}
export const CinemaManageReducer = (state=stateDefault,action) => { 
  switch (action.type) {
    case SET_CUM_RAP:
      state.arrCinema=action.arrCinema;
      return{...state}
      
  
    default:return{...state}
      
  }
 }