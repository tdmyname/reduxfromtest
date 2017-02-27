/**
 * Created by tanDong on 2017/2/17.
 */
import React from "react"
import {Field, reduxForm} from "redux-form"
const ContactForm = (props) => {
    const {handleSubmit}=props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userName">UserName:</label>
                <Field name="userName" component="input" type="text" placeholder="userName" />
                <label htmlFor="password">password:</label>
                <Field name="password" component="input" type="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}
const validate=(value)=>{
    const errors={}
    if(!value.userName){
        errors.userName="isRequired"
    }
    if(!value.password){
        errors.password="isRequired"
    }
}
export default  reduxForm({
    form: 'login',validate
})(ContactForm)
