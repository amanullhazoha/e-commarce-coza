import { combineReducers } from "redux";
import { productReducer } from "../shop";
import { userReducer } from "../user";

export default combineReducers({ productReducer, userReducer })