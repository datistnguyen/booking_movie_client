import { SET_CHI_TIET_PHIM } from "../Types/CinemaManageType";
import { SET_DANH_SACH_PHIM } from "../Types/FilmManageType";

const stateDefault = {
  arrFilm: [
    //   {
    //       "id":"1",
    //       "movieName":"Ban tay diet quy",
    //       "desc":"Phim hay và nổi tiếng các bạn nên đón xem",
    //       "actor":"Trịnh Công Sơn",
    //       "img":"https://movienew.cybersoft.edu.vn/hinhanh/avatar-1-chieu-lai-_gp03.jpeg",
    //       "dateStart":"10-10-2000",
    //       "dateEnd":"10-10-2010",
    //       "country":"Việt Nam"
    //   },
    //   {
    //     "id":"2",
    //     "movieName":"Ban tay diet quy",
    //     "desc":"Phim hay và nổi tiếng các bạn nên đón xem",
    //     "actor":"Trịnh Công Sơn",
    //     "img":"https://movienew.cybersoft.edu.vn/hinhanh/avatar-1-chieu-lai-_gp03.jpeg",
    //     "dateStart":"10-10-2000",
    //     "dateEnd":"10-10-2010",
    //     "country":"Việt Nam"
    // }
  ],
  arrFilmCopy: [],
  filmDetail: {},
};
export const FilmManageReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmCopy = action.arrFilm;
      return { ...state };
    }
    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
