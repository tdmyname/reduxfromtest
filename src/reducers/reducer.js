/**
 * Created by tanDong on 2017/2/17.
 */
import {createReducer} from "redux-act"
import {loginAction} from "../actions/action"
export default createReducer({
    [loginAction]: (state, payload) =>
    {   alert(payload)
        return {...payload}}
}, { userName: "tandong", password: "1223"})