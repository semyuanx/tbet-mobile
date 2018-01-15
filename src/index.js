import React from 'react';
import ReactDOM from 'react-dom';
import routers from './router/router'
import { Provider } from 'react-redux';
import {browserHistory,Router} from 'react-router';
import store from './redux/store';
import './assets/css/app.css';
import './assets/font/iconfont.js'
// 项目创建 http://www.jianshu.com/p/5e6c620ff4d6
document.documentElement.style.fontSize = window.innerWidth * 100 / 750 + 'px';//新增


ReactDOM.render(
    <Provider store ={store}>
         <Router history={browserHistory}>
             {routers }
        </Router>
    </Provider>, 
document.getElementById('root'));
