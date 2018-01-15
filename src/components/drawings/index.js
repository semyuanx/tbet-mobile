/**
 * 账户提款
 */
import React,{Component} from 'react';
import Header from '../public/header';
import {connect} from 'react-redux';

class Drawings extends Component{
    render(){
        return(
            <div>
                <Header title="取款" history = {this.props.history}  />
                <span style={{color:"#fff"}}>我是提款页面</span>    
            </div>
        )
    }
}

function store2props(store) {
    return {
        info:store.indexInit.userInfo
    }
}
var DrawingsView = connect(store2props)(Drawings)
export default DrawingsView;