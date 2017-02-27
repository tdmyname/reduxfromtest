/**
 * Created by tanDong on 2017/2/17.
 */
import React from "react"
import {loginAction} from "../actions/action"
import {connect}from "react-redux"
import Form from "../conponents/form"
class Forms extends React.Component {
    render() {
        return (
            <div>
                <Form initialValues={this.props.login} value={this.props.login} onSubmit={this.props.loginAction}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    login: state.login,
})
export default connect(mapStateToProps, {loginAction})(Forms)