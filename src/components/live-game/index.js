import React,{Component} from 'react';
import {connect} from 'react-redux';
import Header from '../public/header';

class LiveGame extends Component{
    render(){
        return (
            <div>
                <Header title="真人游戏"  history = {this.props.history} />
                <div className="container">真人游戏</div>
            </div>
        )
    }
}
function store2props(store) {
    return {
        info:store.indexInit.userInfo
    }
}
var LiveGameView = connect(store2props)(LiveGame)
export default LiveGameView;

