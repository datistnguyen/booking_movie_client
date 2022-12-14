import {combineReducers, createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {UserManageReducer} from "./Reducers/UserManageReducer";
import { FilmManageReducer } from "./Reducers/FilmManageReducer";
import {TicketManageReducer} from "./Reducers/TicketManageReducer"
import { CinemaManageReducer } from "./Reducers/CinemaManageReducer";
const RootReducers= combineReducers({
  UserManageReducer,
  FilmManageReducer,
  TicketManageReducer,
  CinemaManageReducer,
})

export const store = createStore(RootReducers,applyMiddleware(thunk))
