import React,{Component} from 'react';
import Header from '../public/header';

class AboutUs extends Component{
    render(){
        return (
            <div>
                <Header title="联系我们" history = {this.props.history}  />
                <div className="container">真人游戏</div> 
            </div>
        )
    }
}
export default AboutUs;
