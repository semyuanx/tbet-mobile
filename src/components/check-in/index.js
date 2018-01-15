import React, {Component} from 'react';
import Header from '../public/header';
class CheckIn extends Component {
    render() {
        return (
            <div className="checkin">
                <Header title="每日签到" history={this.props.history}/>
                <div className="container">我是测试</div>
            </div>
        )
    }
}
export default CheckIn;