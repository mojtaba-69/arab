import { combineReducers } from "redux";
import AdvertisingReduser from "./AdvertisingReducer";

export default combineReducers ({
    AdvertisingState : AdvertisingReduser,
})