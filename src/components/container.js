/**
 * 最外层容器
 */
import React,{Component} from 'react';
import { ActivityIndicator } from 'antd-mobile';
import { getUserInfo } from '../redux/action'
import { connect } from 'react-redux';
import Footer from './public/footer';
// import LoginPop from './public/loginPop';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    maskProps = {
        onTouchStart: e => e.preventDefault(),
    };
}

class Container extends Component{
    render(){
        var { loading,
            location,
            userInfo } = this.props,
            dom, popDom, activityDom;
        if (JSON.stringify(userInfo) !== "{}") { //判断登录状态增加底部导航
            window.status = true;
            dom = <Footer info={userInfo} url={location.pathname} />
        }
        if (loading) {
            activityDom = (<ActivityIndicator
                                toast
                                text="加载中..."
                                animating={loading}
                          />)
        }
        return(
            <div>
                {popDom}
                {activityDom}
                {this.props.children}
                {dom}
            </div>
        )
    }
    componentDidMount(){ //初始化读取个人信息
        var { dispatch} = this.props;
            dispatch(getUserInfo());
    }
}

function store2props(store) {
    return {
        loading: store.loading.loadingStatus,
        userInfo: store.indexInit.userInfo
    }
}
var ContainerView = connect(store2props)(Container)
export default ContainerView;