import React, {Component} from 'react';
import Ajax from 'superagent';
import {WingBlank, Toast} from "antd-mobile";
import Header from '../public/header';

class Notice extends Component {
    constructor(props){
        super(props);
        this.state={
            noticeList:[]
        }
    }
    render() {
        return (
            <div className="">
                <Header title="最新公告" history={this.props.history}/>
                <div className="container">
                    <WingBlank size="sm">
                        {this
                            .state
                            .noticeList
                            .map(function (obj, key) {
                                return (
                                    <div key={key} className="notice-list">
                                        <div className="notice-tip">{key + 1}</div>
                                        <div className="notice-container">
                                            <div className="notice-title">
                                                <h3>【{obj.title}】</h3>
                                                <p>{obj.c_date}</p>
                                            </div>
                                            <div className="notice-txt">{obj.content}</div>
                                        </div>
                                    </div>
                                )
                            })}
                    </WingBlank>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var that = this;
        if (this.state.noticeList.length < 1) {
            Ajax
                .post("/public/notice.do")
                .then(function (res) {
                    var data = res.text
                        ? JSON.parse(res.text)
                        : null;
                    if (data.Status === 200) {
                        that.setState({noticeList: data.Data.notice})
                    } else {
                        Toast.info(data.Msg)
                    }
                })
        }

    }
}


export default Notice;