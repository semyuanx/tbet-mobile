/**
 * 游戏列表
 */
import React,{Component} from 'react';
import {WingBlank} from "antd-mobile";
import {Link} from 'react-router';
import Header from '../public/header';
import {connect} from 'react-redux';

class Game extends Component{
    render(){
        return(
            <div>
            <Header title="游戏列表"  history = {this.props.history} />
            <div className="container">
                <div className="game-head">
                    <img src={require("../../assets/img/game_background1.png")} alt="游戏列表" />
                </div>
                <WingBlank size="sm" >
                <div className="game-list">
                    <Link to="/egame.html"><img src={require("../../assets/img/game_electron.png")} alt="电子游戏" /></Link>
                    <Link><img src={require("../../assets/img/game_live.png")} alt="真人现场" /></Link>
                    <Link><img src={require("../../assets/img/game_tiyu.png")} alt="体育游戏" /></Link>
                </div>
                </WingBlank>
            </div>
        </div>
        )
    }
}

function store2props(store) {
    return {
        info:store.indexInit.userInfo
    }
}
var GameView = connect(store2props)(Game)
export default GameView;