import { baseService } from "./baseService";
export class CinemaManageService extends baseService {
  
     getAllCinema =()=>{
      return this.get('/cluster/')
     }
    getAllMovieSchedule =(filmId) => { 
      return this.get(`/film/?filmId=${filmId}`)
     }
  }
  export const CinemaService = new CinemaManageService();