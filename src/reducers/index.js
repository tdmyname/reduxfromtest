/**
 * Created by tanDong on 2017/2/17.
 */
import {combineReducers} from "redux"
import {reducer  as form} from "redux-form"
import login from "./reducer"
export default combineReducers({
    login, form
})