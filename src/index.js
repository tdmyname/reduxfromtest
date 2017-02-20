/**
 * Created by tanDong on 2017/2/17.
 */
import React from "react"
import ReactDOM from "react-dom"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import reducer from "./reducers"
import Forms from "./constants/forms"
const elem=document.createElement("div")
document.body.appendChild(elem)
const store=createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <Forms/>
    </Provider>,
    elem
)