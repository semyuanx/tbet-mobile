import React, {Component} from 'react';
import Header from '../public/header';

class ForgetPwd extends Component {
    render() {
        return (
            <div className="forgetpwd">
                <Header title="忘记密码" history={this.props.history}/>
                <div className="container">
                    <p>我是注册</p>
                </div>
            </div>
        )
    }
}
export default ForgetPwd;