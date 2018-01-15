import React,{Component} from 'react';
import Header from '../public/header';

class Sport extends Component{
    render(){
        return (
            <div className="sport">
                 <Header title="体育游戏"  history = {this.props.history} />
                 <div className="container">我是测试</div>
            </div>
        )
    }
}
export default Sport;