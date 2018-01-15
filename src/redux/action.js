import ajax from 'superagent';
import { Toast } from 'antd-mobile';

var api = {
    carousel: "/public/active_list.do", //首页轮播
    notice: "/public/notice.do", //公告
    userInfo: "/user/info.do",//获取用户信息
    payList: "/cash/thridpay_list.do", //获取支付方式
    wechatPay:"/cash/wechat_manual_list.do", //手工微信支付方式
    hanldPay:"/cash/bank_manual_list.do", //手工银行
    hanldPayCode:"/cash/sgck_code.do" //手工银行银行备注
}

/**
 * 公用方法 如果登录状态为600，则调用此方法
 */
function redirectStatue(dispatch){
    dispatch(clearData());
}


/**
 * 获取首页轮播
 */
var getCarousel = new Promise(function (resolve) { 
    ajax
        .post(api.carousel)
        .query({ class_id: "", is_banner: 1, is_list: "" })
        .then(function (res) {
            var data = res.text ? JSON.parse(res.text) : null;
            if (data.Status === 200) {
                var imgData = [];
                data.Data.active_list.map(function (obj, key) {
                    if (obj.img4 !== "") {
                        imgData.push(obj)
                    }
                    return obj;
                })
                resolve(imgData)
            } else {
                Toast.info(data.Msg, 1);
            }

        })
})
/**
 * 获取首页公告
 */
var getNotice = new Promise(function (resolve) {  
    ajax
        .post(api.notice)
        .then(function (res) {
            var data = res.text ? JSON.parse(res.text) : null;
            if (data.Status === 200) {
                resolve(data.Data.notice)
            } else {
                Toast.info(data.Msg, 1);
            }
        })
});
/**
 * 初始化首页数据
 */
export function getIndexInit() {  
    return function (dispatch) {
        dispatch({
            type: "LOADING",
            meta: true
        })
        Promise.all([getCarousel, getNotice]).then(function (results) {
            dispatch({
                type: "LOADING",
                meta: false
            })
            dispatch({
                type: "SET_INDEXDATA",
                meta: results
            })
        })
    }
}
/**
 * 设置登录弹窗的显示及隐藏
 */
// export function setLoginPop(val) { 
//     return function (dispatch) {
//         dispatch({
//             type: "OPEN_CLOSE",
//             meta: val
//         })
//     }
// }
/**
 * 获取个人信息
 */
export function getUserInfo() {  
    return function (dispatch) {
        dispatch({
            type: "LOADING",
            meta: true
        })
        ajax
            .post(api.userInfo)
            .then(function (res) {
                dispatch({
                    type: "LOADING",
                    meta: false
                })
                var data = res.text ? JSON.parse(res.text) : null;
                if (data.Status === 200) {
                    var userInfo = data.Data.user_info;
                    window.status = true;
                    dispatch({
                        type: "SET_USERINFO",
                        meta: userInfo
                    })
                    localStorage.setItem("user_info",JSON.stringify(userInfo));
                } else if(data.Status===600){
                    redirectStatue(dispatch);
                    // Toast.info(data.Msg, 1);                
                }
            })
    }
}

/**
 * 获取支付方式公用方法
 */
var publicPayList = {
    get: function (id, dispatch) {
        var promise = new Promise(function (resolve) {
            ajax
                .post(api.payList)
                .query({ pay_type: id })
                .then(function (res) {
                    var data = res.text ? JSON.parse(res.text) : null;
                    resolve(id);
                    if (data.Status === 200) {        
                        switch (id) {
                            case 1: //在线支付
                                dispatch({
                                    type: "LIVE_PAY",
                                    meta: data.Data.pt_list
                                })
                                break;
                            case 2:
                                dispatch({
                                    type: "ALI_PAY",
                                    meta: data.Data.pt_list
                                })
                                break;
                            case 3:
                                dispatch({
                                    type: "TEN_PAY",
                                    meta: data.Data.pt_list
                                })
                                break;
                            case 4:
                                dispatch({
                                    type: "WECHAT_PAY",
                                    meta: data.Data.pt_list
                                })
                                break;
                            default:
                                break;
                        }
                    } else if(data.Status === 600) {
                        redirectStatue(dispatch);
                    }
                })
        })
        return promise;
    }

}
/**
 * 手工微信单独接口
 */ 

var hanldWeChatPay = {
    get:function(dispatch){
        var promise = new Promise(function(resolve){
            ajax
                .post(api.wechatPay)
                .then(function(res){
                    resolve(res);
                    var data = res.text ? JSON.parse(res.text) : null;
                    if(data.Status === 200){
                        dispatch({
                            type:"HANLDWECHAT_PAY",
                            meta:data.Data.wechat_list
                        })
                    }else if(data.Status === 600){
                        redirectStatue(dispatch);
                    }
                })
        })
        return promise;
    }
}

/**
 * 手工存款支付方式
 */
var getHanldPay = {
    get:function(dispatch){
        var promise = new Promise(function(resolve){
            ajax
                .post(api.hanldPay)
                .then(function(res){
                    resolve(res);
                    var data = res.text ? JSON.parse(res.text) : null;
                    if(data.Status === 200){
                        dispatch({
                            type:"HANLD_PAY",
                            meta:data.Data.bank_list
                        })
                    }else if(data.Status === 600){
                        redirectStatue(dispatch);
                    }
                })
        })
        return promise;
    }
}
/**
 * 手工银行存款银行备注
 */  

var getHanldPayCode = {
    get:function(dispatch){
        var promise = new Promise(function(resolve){
            ajax
                .post(api.hanldPayCode)
                .then(function(res){
                    resolve(res);
                    var data = res.text ? JSON.parse(res.text) : null;
                    if(data.Status === 200){
                        dispatch({
                            type:"HANLDCODE_PAY",
                            meta:data.Data.yhbz
                        })
                    }else if(data.Status === 600){
                        redirectStatue(dispatch);
                    }
                })
        })
        return promise;
    }
}


/**
 * 获取支付方式异步同步化
 */ 
export function getPayList() {
    return function (dispatch) {
        dispatch({
            type: "LOADING",
            meta: true
        })
        Promise.all([publicPayList.get(1, dispatch),
                     publicPayList.get(2, dispatch),
                     publicPayList.get(3, dispatch),
                     publicPayList.get(4, dispatch),
                     hanldWeChatPay.get(dispatch),
                     getHanldPay.get(dispatch),
                     getHanldPayCode.get(dispatch)]).then(function () {
            dispatch({
                type: "LOADING",
                meta: false
            })
        })
    }
}

/**
 * 退出清除数据
 */ 
export function clearData(){
    return function(dispatch){
        localStorage.setItem("user_info",'');
        dispatch({
            type: "SET_USERINFO",
            meta: {}
        });
        dispatch({
            type: "LIVE_PAY",
            meta: {}
        });
        dispatch({
            type: "ALI_PAY",
            meta: {}
        });
        dispatch({
            type: "WECHAT_PAY",
            meta: {}
        });
        dispatch({
            type: "TEN_PAY",
            meta: {}
        });
        dispatch({
            type: "HANLDWECHAT_PAY",
            meta: {}
        });
        dispatch({
            type: "HANLD_PAY",
            meta: {}
        });
        dispatch({
            type: "HANLDCODE_PAY",
            meta: {}
        });
    }
}




