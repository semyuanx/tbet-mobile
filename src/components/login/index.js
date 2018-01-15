/**
 * 登录弹窗
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUserInfo } from '../../redux/action'
import Ajax from 'superagent';
import { Link } from 'react-router';
import { Modal, InputItem, Toast } from 'antd-mobile';

//登录弹窗主体样式
class LoginPopMain extends Component {
    state = {
        hasError: false,
        errorTxt: "欢迎光临T博娱乐",
        loginCode: "/public/captcha.do?" + Math.random(),
        accountVal: '',
        pwdVal: '',
        checkCodeVal: ""
    }
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info("电话号码错误")
        }
    }
    checkAccount = (value) => {
        if (value.replace(/^[A-Z-a-z]{1}[A-Za-z0-9]{5,9}$/, '')) {
            this.setState({
                hasError: true,
                errorTxt: '账号错误'
            });
        } else {
            this.setState({
                hasError: false,
                errorTxt: '欢迎光临T博娱乐'
            });
        }
        this.setState({
            accountVal: value,
        });
    }
    changeCode = () => {
        this.setState({
            loginCode: "/public/captcha.do?" + Math.random()
        })
    }
    loginSub = () => {
        var { accountVal, pwdVal, checkCodeVal, hasError, errorTxt } = this.state;
        if (hasError) { Toast.info(errorTxt); return; }
        if (!accountVal) { Toast.info("账号不能为空"); return; }
        if (!pwdVal) { Toast.info("密码不能为空"); return; }
        if (!checkCodeVal) { Toast.info("验证码不能为空"); return; }
        this.props.goLogin(accountVal, pwdVal, checkCodeVal)
    }
    render() {
        return (
            <div className="pop-container">
                <span className="closePop" onClick={this.props.onClose}>×</span>
                <div className="pop-head">
                    <img src={require("../../assets/img/login_logo.png")} alt="登录" />
                </div>
                <h3 className={this.state.hasError ? 'loginErr' : ''}>
                    {this.state.errorTxt}
                </h3>
                <div className="pop-main">
                    <InputItem
                        placeholder="输入会员账号"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.checkAccount}
                        value={this.state.accountVal}
                        autoFocus={true}
                        clear={true}
                        labelNumber={3}
                        className="loginInput"
                    >
                        <span>
                            <svg className="tbet-icon am-icon-md" aria-hidden="true">
                                <use xlinkHref="#icon-user"></use>
                            </svg>
                        </span>

                    </InputItem>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        onChange={(e) => { this.setState({ pwdVal: e }) }}
                        value={this.state.pwdVal}
                        autoFocus={true}
                        clear={true}
                        labelNumber={3}
                        className="loginInput"
                    >
                        <span>
                            <svg className="tbet-icon am-icon-md" aria-hidden="true">
                                <use xlinkHref="#icon-password"></use>
                            </svg>
                        </span>
                    </InputItem>
                    <div className="login-code">
                        <InputItem
                            type="number"
                            placeholder="输入会员账号"
                            onChange={(e) => { this.setState({ checkCodeVal: e }) }}
                            value={this.state.checkCodeVal}
                            autoFocus={true}
                            clear={true}
                            labelNumber={3}
                            className="loginCode-flex"
                        >
                            <span>
                                <svg className="tbet-icon am-icon-md" aria-hidden="true">
                                    <use xlinkHref="#icon-yanzhengma"></use>
                                </svg>
                            </span>
                        </InputItem>
                        <img onClick={this.changeCode} src={this.state.loginCode} alt="" />
                    </div>
                    <div className="login-fotget">
                        <Link to="/forget-pwd.html">忘记密码</Link>
                    </div>
                    <div
                        className="login-btn"
                        onClick={this.loginSub}
                    >
                        <img src={require('../../assets/img/login-sub.png')} alt="登录按钮" />
                    </div>
                    <Link to="/register.html" className="login-goReg" >没有账号？立即注册>></Link>
                </div>
            </div>
        )
    }
}


class LoginPop extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            status:true
        }
        this.onClose = this.onClose.bind(this);
        this.goLogin = this.goLogin.bind(this);
    }
    
    state = {
        errorMsg: ""
    }
    render() {
        return (
            <Modal className="login-modal" transparent={false} visible={this.state.status} animationType="slide-up">
                <LoginPopMain
                    onClose = {this.onClose}
                    goLogin = {this.goLogin}
                    error   = {this.state.errorMsg}
                />
            </Modal>
        )
    }
    onClose(){
        this.context.router.goBack();
    }
    goLogin(account, pwd, code) {  //登录方法
        var { dispatch,location } = this.props;
        var that = this;
        var _url = location.query.page?location.query.page:"/";     
        dispatch({
            type: "OPEN_CLOSE",
            meta: true
        })
        Ajax
            .post("/public/login.do")
            .query({
                username: account,
                password: pwd,
                captcha: code
            })
            .then(function (res) {
                dispatch({
                    type: "LOADING",
                    meta: false
                })
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    Toast.info("登录成功！")
                    localStorage.setItem("user_info",true);
                    dispatch(getUserInfo());
                    that.context.router.replace(_url);
                } else {
                    Toast.info(data.Msg)
                }
            })
    }

}
LoginPop.contextTypes = {
    router: PropTypes.object.isRequired
}

function store2props(store) {
    return {
        loading  : store.loading.loadingStatus
    }
}
var LoginPopView = connect(store2props)(LoginPop)

export default LoginPopView;