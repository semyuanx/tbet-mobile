import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'

// 首页数据初始化
const indexInit = (state={
        carouselList:[],
        noticeList:[],
        userInfo:localStorage.getItem("user_info")?JSON.parse(localStorage.getItem("user_info")):{}},
        action)=>{
    switch(action.type){
        case 'SET_INDEXDATA': //轮播及公告
            return Object.assign({},state,{carouselList:action.meta[0],noticeList:action.meta[1]})
        case "SET_USERINFO":
            return Object.assign({},state,{userInfo:action.meta})
        default:
            return state;
    }
};
//登录
const login = (state={loginStatus:""},action)=>{
    switch(action.type){
        case 'LOGIN':
            return Object.assign({},state,{loginStatus:action.meta})
        default:
            return state;
    }
};

//加载器
const loading = (state={loadingStatus:false},action)=>{
    switch (action.type) {
        case "LOADING":
            return Object.assign({},state,{loadingStatus:action.meta});
        default:
            return state;
    }
};


//支付页面
const payList = (state={
        livePay:{},
        aliPay:{},
        weChatPay:{},
        tenPay:{},
        hanldWeChatPay:{},
        hanldPay:{},
        hanldPagCode:""},action)=>{
    switch(action.type){
        case "LIVE_PAY":
            return Object.assign({},state,{livePay:action.meta})
        case "ALI_PAY":
            return Object.assign({},state,{aliPay:action.meta})
        case "WECHAT_PAY":
            return Object.assign({},state,{weChatPay:action.meta})
        case "TEN_PAY":
            return Object.assign({},state,{tenPay:action.meta})
        case "HANLDWECHAT_PAY":
            return Object.assign({},state,{hanldWeChatPay:action.meta})
        case "HANLD_PAY":
            return Object.assign({},state,{hanldPay:action.meta})
        case "HANLDCODE_PAY":
            return Object.assign({},state,{hanldPayCode:action.meta})
        default:
            return state
    }
}

const rootReducer = combineReducers({
    indexInit,
    login,
    loading,
    payList,
    routing: routerReducer
})
export default rootReducer;