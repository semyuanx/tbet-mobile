import React from 'react';
import {  Route, IndexRoute } from 'react-router';
import Container       from '../components/container';
import Index           from '../components/index/index';
import Drawings        from '../components/drawings';
import Recharge        from '../components/recharge';
import Game            from '../components/game';
import Notice          from '../components/notice';
import Egame           from '../components/egame';
import LiveGame        from "../components/live-game";
import Sport           from '../components/sport';
import LuckyDraw       from '../components/lucky-draw';
import CheckIn         from '../components/check-in';
import Register        from '../components/register';
import ForgetPwd       from '../components/forget-pwd';
import SpecoalOffers   from '../components/specoal-offers';
import AboutUs         from '../components/about-us';
import DownLoad        from '../components/download';
import VIP             from '../components/vip';
import UserCenter      from '../components/user-center';
import Login           from '../components/login';

//已登录状态
function pageHook(nextState,replace){ 
    var user_info = localStorage.getItem("user_info");//获取用户本地保存的用户信息
   
    if(user_info){
        replace("/"); //如果已经登录则不准进入页面，跳转到首页
    }
}
function noLogin(nextState,replace){
    var user_info = localStorage.getItem("user_info");//获取用户本地保存的用户信息
    if(!user_info){
        replace({ 
            pathname: '/login.html',
            query: {page:nextState.location.pathname}
        }); //如果已经登录则不准进入页面，跳转到首页
    }
}

const Routes = (
    <Route path="/" component={Container}>
        <IndexRoute component={Index} />
        <Route path="/drawings.html"   component={Drawings}   onEnter={noLogin} />
        <Route path="/recharge.html"   component={Recharge}   onEnter={noLogin} />
        <Route path="/game.html"       component={Game}       onEnter={noLogin} />
        <Route path="/egame.html"      component={Egame}      onEnter={noLogin} />
        <Route path="/live-game.html"  component={LiveGame}   onEnter={noLogin}/>
        <Route path="/sport.html"      component={Sport}      onEnter={noLogin}/>
        <Route path="/lucky-draw.html" component={LuckyDraw}  onEnter={noLogin} />
        <Route path="/check-in.html"   component={CheckIn}    onEnter={noLogin}/>
        <Route path="/user-center.html"component={UserCenter} onEnter={noLogin}/>
        <Route path="/register.html"   component={Register}   onEnter={pageHook} />
        <Route path="/forget-pwd.html" component={ForgetPwd}  onEnter={pageHook} />
        <Route path="/specoal-offers.html" component={SpecoalOffers} />
        <Route path="/notice.html"     component={ Notice } />
        <Route path="/about-us.html"   component={ AboutUs } />
        <Route path="/download.html"   component={ DownLoad } />
        <Route path="/vip.html"        component={ VIP } />
        <Route path="/login.html"      component={ Login } />
    </Route>
)



export default Routes;