/**
 * 存款
 */
import React, {Component} from 'react';
import {Tabs} from 'antd-mobile';
import Header from '../public/header';
import {getPayList} from '../../redux/action';
import {connect} from 'react-redux';
import HanldPay from './hanld-pay';
import LivePay from './live-pay';
import WeChatPay from './wechat-pay';
import AliPay from './ali-pay';
import TenPay from './ten-pay';
import HanldWeChatPay from './hanldwechat-pay';
const TabPane = Tabs.TabPane;

class Recharge extends Component {
    constructor(props){
        super(props);
        this.state={
            tabsKey: "1"
        }
        this.changeTab = this.changeTab.bind(this);
    }
    render() {
        var {
                livePay,
                aliPay,
                weChatPay,
                tenPay,
                hanldWeChatPay,
                hanldPay,
                hanldPayCode
            } = this.props,
            activeList = [];

        //手工存款
        if (JSON.stringify(hanldPay) !== "{}"){
            activeList.push(
                <TabPane tab="手工存款" key='1'>
                    <HanldPay info={hanldPay} code={hanldPayCode}/>
                </TabPane>
            )
        }

        //  在线支付
        if(JSON.stringify(livePay) !== "{}"){
            activeList.push(
                <TabPane tab="在线支付" key='2'>
                    <LivePay info={livePay}/>
                </TabPane>
            )
        }

        // 支付宝
        if(JSON.stringify(aliPay) !== "{}"){
            activeList.push(
                <TabPane tab="支付宝" key='3'>
                    <AliPay info={aliPay}/>
                </TabPane>
            )
        }

        // 微信支付
        if(JSON.stringify(WeChatPay) !== "{}"){
            activeList.push(
                <TabPane tab="微信扫码" key='4'>
                    <WeChatPay info={weChatPay}/>
                </TabPane>
            )
        }

        // 财付通
        if(JSON.stringify(tenPay) !== "{}"){
            activeList.push(
                <TabPane tab="财付通" key='5'>
                    <TenPay info={tenPay}/>
                </TabPane>
            )
        }

        // 手工微信
        if(JSON.stringify(hanldWeChatPay) !== "{}"){
            activeList.push(
                <TabPane tab="微信转账" key='6'>
                    <HanldWeChatPay info={hanldWeChatPay}/>
                </TabPane>
            )
        }

        return (
            <div>
                <Header title="立即存款" history={this.props.history}/>
                <div className="container">
                    <Tabs
                        activeKey={this.state.tabsKey}
                        onChange={this.changeTab}
                        swipeable={false}
                        className="myTabs"
                        pageSize={4}>
                        {activeList}
                    </Tabs>
                </div>
            </div>
        )
    }
    changeTab(key) {
        this.setState({tabsKey: key})
    }
    componentDidMount() {
        var {dispatch} = this.props;
        dispatch(getPayList());
    }
}

function store2props(store) {
    return {
        info: store.indexInit.userInfo,
        livePay: store.payList.livePay,
        aliPay: store.payList.aliPay,
        weChatPay: store.payList.weChatPay,
        tenPay: store.payList.tenPay,
        hanldWeChatPay: store.payList.hanldWeChatPay,
        hanldPay: store.payList.hanldPay,
        hanldPayCode: store.payList.hanldPayCode
    }
}
var RechargeView = connect(store2props)(Recharge)

export default RechargeView;