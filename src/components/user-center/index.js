import React,{Component} from 'react';
import Header from '../public/header';

class UserCenter extends Component{
    render(){
        return (
            <div>
                <Header title="会员中心" history = {this.props.history}  />
                <div className="container">真人游戏</div> 
            </div>
        )
    }
}
export default UserCenter;