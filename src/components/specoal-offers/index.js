import React,{Component} from 'react';
import Header from '../public/header';

class SpecoalOffers extends Component{
    render(){
        return (
            <div>
                <Header title="优惠活动"  history = {this.props.history} />
                <div className="container">真人游戏</div>
            </div>
        )
    }
}
export default SpecoalOffers;