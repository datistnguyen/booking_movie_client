import { baseService } from "./baseService";
export class FilmManageService extends baseService {
  constructor(){
    super()
  }
     getAllFilm =()=>{
      return this.get('/film/')
     }
     
  }
  export const FilmService = new FilmManageService();