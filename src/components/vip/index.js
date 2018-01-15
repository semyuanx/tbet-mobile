import React,{Component} from 'react';
import Header from '../public/header';

class VIP extends Component{
    render(){
        return (
            <div>
                <Header title="VIP" history = {this.props.history}  />
                <div className="container">真人游戏</div> 
            </div>
        )
    }
}
export default VIP;