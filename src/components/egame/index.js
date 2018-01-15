import React, { Component } from 'react';
import Header from '../public/header';
import { Tabs } from 'antd-mobile';
const TabPane = Tabs.TabPane;
/**
 * PT
 */
// const PT = () => {
//     return (
//         <TabPane tab="PT" key="0">
//             <div>我是PT</div>
//         </TabPane>
//     )
// }


class Egame extends Component {
    render() {
        return (
            <div className="egame">
                <Header title="电子游戏" login="1" history = {this.props.history} />
                <div className="container">
                    <Tabs swipeable={false} className="myTabs">
                        <TabPane tab="PT" key="0">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="TTG" key="1">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="MG" key="2">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="GPI" key="3">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="TGP" key="4">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="GG" key="5">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="AG" key="6">
                            <div>我是PT</div>
                        </TabPane>
                        <TabPane tab="BBIN" key="7">
                            <div>我是PT</div>
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}
export default Egame;


