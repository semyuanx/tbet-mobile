import React,{Component} from 'react';
import Header from '../public/header';

class DownLoad extends Component{
    render(){
        return(
            <div>
                <Header title="下载中心" history = {this.props.history}  />
                <div className="container">真人游戏</div> 
            </div>
        )
    }
}
export default DownLoad;