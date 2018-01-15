import React,{Component} from 'react';
import Ajax from 'superagent';
import { NavBar, Icon, Drawer, Toast } from 'antd-mobile';
import { clearData } from '../../redux/action';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

//等级处理函数
function setLevel(val) {
    var levelName;
    switch (val) {
        case "0":
            return levelName = "普通会员";
        case "2000":
            return levelName = "特邀会员";
        case "2101":
            return levelName = "白银会员";
        case "2102":
            return levelName = "黄金会员";
        case "2103":
            return levelName = "钻石会员";
        case "2111":
            return levelName = "精英会员";
        case "2112":
            return levelName = "明星会员";
        case "2113":
            return levelName = "大师会员";
        default:
            return levelName;
    }
}


//侧边栏内容组织
class HeaderItem extends Component{
    render(){
        var { info } = this.props,
        infoDom, regDom, centerDom, outDom;
        if (JSON.stringify(info) !== "{}") {
            infoDom = (
                <div className="drawerInfo-main">
                    <div className="drawerInfo-img">
                        <img src={require("../../assets/img/members_" + info.level + ".png")} alt="" />
                    </div>
                    <div className="drawerInfo-right">
                        <span>{info.username}</span>
                        <i>{setLevel(info.level)}</i>
                    </div>
                </div>
            )
            centerDom = (
                <div className="drawer-item">
                    <span>
                        <svg className="tbet-icon am-icon-md" aria-hidden="true">
                            <use xlinkHref="#icon-personalinformation"></use>
                        </svg>
                    </span>
                    <Link onClick={this.props.rightClick} to="/user-center.html"  >会员中心</Link>
                </div>
            )
            outDom = (
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-tuichu"></use>
                    </svg>
                    <Link onClick={this.props.out} to="/"  >立即退出</Link>
                </div>
            )
        } else {
            regDom = (
                <div>
                    <div className="drawer-item">
                        <svg className="tbet-icon am-icon-md" aria-hidden="true">
                            <use xlinkHref="#icon-personalinformation"></use>
                        </svg>
                        <Link  to="/login.html"  >会员登录</Link>
                    </div>
                    <div className="drawer-item">
                        <svg className="tbet-icon am-icon-md" aria-hidden="true">
                            <use xlinkHref="#icon-zhuce01"></use>
                        </svg>
                        <Link onClick={this.props.rightClick} to="/register.html"  >会员注册</Link>
                    </div>
                </div>)
        }
        var sidebar = (
            <div>
                <div className={JSON.stringify(info) !== "{}" ? "drawer-item drawer-info" : "drawer-item"}>
                    {infoDom}
                </div>
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-home"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/"  >精彩首页</Link>
                </div>
                {centerDom}
                {regDom}
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-youhui"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/specoal-offers.html"  >优惠活动</Link>
                </div>
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-tongzhizhongxin"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/notice.html"  >最新公告</Link>
                </div>
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-iconlianxiwomen"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/about-us.html"  >联系我们</Link>
                </div>
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-ziyuanbaosongmobanxiazai"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/download.html"  >下载中心</Link>
                </div>
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-vip"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/vip.html"  >VIP尊享</Link>
                </div>
                <div className="drawer-item">
                    <svg className="tbet-icon am-icon-md" aria-hidden="true">
                        <use xlinkHref="#icon-vip"></use>
                    </svg>
                    <Link onClick={this.props.rightClick} to="/"  >T博代理</Link>
                </div>
                {outDom}
                <p onClick={this.props.rightClick} className="closeDrawer">关闭</p>
            </div>
        )
        return (
            <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight }}
            position="right"
            enableDragHandle
            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
            sidebar={sidebar}
            open={this.props.open}
            onOpenChange={this.props.rightClick}
        >
            ...
                </Drawer>
        )
    }
}


//头部
class Header extends Component{
    constructor(props,context){
        super(props,context);
        this.state={
            open:false
        }
        this.rightClick = this.rightClick.bind(this);
        this.openPop    = this.openPop.bind(this);
        this.out        = this.out.bind(this);
    }
    render(){
        return(
            <header>
                <NavBar
                    iconName="ellipsis"
                    rightContent={
                        <svg onClick={this.rightClick} className="tbet-icon am-icon-md" aria-hidden="true">
                            <use xlinkHref="#icon-caidan"></use>
                        </svg>
                    }
                    leftContent={
                        this.props.type === "1" ?
                            <Link to="/about-us.html">
                                <svg className="tbet-icon am-icon-md" aria-hidden="true">
                                    <use xlinkHref="#icon-weixin"></use>
                                </svg>
                            </Link> :
                            <Link onClick={()=>{this.context.router.goBack()}} >
                                <Icon key="1" type="left" />
                            </Link>
                    }
                >
                    {this.props.title ? this.props.title :
                        <Link to="/"><img src={require("../../assets/img/logo.png")} alt="logo" /></Link>}
                </NavBar>
                <HeaderItem
                    out={this.out} 
                    info={this.props.userInfo}
                    open={this.state.open}
                    rightClick={this.rightClick} />
        </header>
        )
    }
    rightClick() {
        var { open } = this.state;
        this.setState({
            open: !open
        })
    }
    openPop() {
        var { dispatch } = this.props;
        dispatch({
            type: "OPEN_CLOSE",
            meta: true
        });
        this.setState({
            open: false
        })
    }
    out() {
        var { dispatch } = this.props;
        dispatch({
            type: "LOADING",
            meta: true
        })
        this.setState({
            open: false
        })
        Ajax
            .post("/user/logout.do")
            .then(function (res) {
                dispatch({
                    type: "LOADING",
                    meta: false
                })
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    dispatch(clearData());
                    Toast.info("退出成功", 1)
                } else {
                    Toast.info(data.Msg, 1);
                }                
            })
    }

}

Header.contextTypes = {
    router: PropTypes.object.isRequired
}

function store2props(store) {
    return {
        userInfo: store.indexInit.userInfo
    }
}
var HeaderView = connect(store2props)(Header)
export default HeaderView;