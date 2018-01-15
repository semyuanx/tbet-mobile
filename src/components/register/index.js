import React,{Component} from 'react';
import Header from '../public/header';
class Register extends Component{
    render(){
        return (
            <div className="register">
                <Header title="注册" history={this.props.history}/>
                <div className="container">
                    <p>我是注册</p>
                </div>
            </div>
        )
    }
}
export default Register;