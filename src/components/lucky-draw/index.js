import React,{Component} from 'react';
import Header from '../public/header';

class LuckyDraw extends Component{
    render(){
        return (
            <div className="lucky">
                 <Header title="存款抽奖"  history = {this.props.history} />
                 <div className="container">我是测试</div>
            </div>
        )
    }
}
export default LuckyDraw;