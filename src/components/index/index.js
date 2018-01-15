import React, { Component } from 'react';
import {Link} from 'react-router';
import { Carousel, WhiteSpace, NoticeBar, Grid, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { getIndexInit } from '../../redux/action';
import Header from '../public/header';

//轮播
const IndexCarousel = (props) => {
    return (<Carousel
        className="my-carousel"
        autoplay={true}
        infinite
        selectedIndex={1}
        swipeSpeed={35}
    >
        {props.list.map(function (obj, key) {
            return (
                <a key={key} >
                    <img
                        src={`${obj.img4}`}
                        alt="icon"
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                        }}
                    />
                </a>
            )
        })}
    </Carousel>)
};

//公告
var Notice = (props) => {
    return (
        <div>
            <WhiteSpace size="sm" />
            <NoticeBar className="myNotice" marqueeProps={{ loop: true, fps: 40, style: { padding: '0 0.15rem' } }}>
                {props.list.map(function (obj, key) {
                    return (<a key={key}>&nbsp;&nbsp;&nbsp;{obj.content}&nbsp;&nbsp;&nbsp;</a>)
                })}
            </NoticeBar>
            <WhiteSpace size="sm" />
        </div>
    )
}


//九宫格
var Sudoku = (props) => {
    return (
        <WingBlank size="sm">
            <div className="myGrid">
                <div className="grid-list">
                    <div className="grid-item">
                        <div className="grid-border">
                            <Link to="/egame.html">
                            <img src={require("../../assets/img/grid1.png")} alt="电子游戏" />
                            <h3>电子游戏</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-border">
                            <Link to="/live-game.html">
                            <img src={require("../../assets/img/grid2.png")} alt="真人现场" />
                            <h3>真人现场</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-border">
                            <Link to="/egame.html">
                            <img src={require("../../assets/img/grid3.png")} alt="捕鱼游戏" />
                            <h3>捕鱼游戏</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid-list">
                    <div className="grid-item">
                        <div className="grid-border">
                            <Link to="/sport.html">
                            <img src={require("../../assets/img/grid4.png")} alt="体育投注" />
                            <h3>体育投注</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-border">
                            <img src={require("../../assets/img/grid5.png")} alt="彩票投注" />
                            <h3>彩票投注</h3>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-border">
                            <Link to="/lucky-draw.html">
                            <img src={require("../../assets/img/grid6.png")} alt="立即抽奖" />
                            <h3>立即抽奖</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="grid-list">
                    <div className="grid-item">
                        <div className="grid-border">
                            <Link to="/check-in.html">
                            <img src={require("../../assets/img/grid7.png")} alt="每日签到" />
                            <h3>每日签到</h3>
                            </Link>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-border">
                            <img src={require("../../assets/img/grid5.png")} alt="VR彩票" />
                            <h3>VR彩票</h3>
                        </div>
                    </div>
                    <div className="grid-item"></div>
                </div>
            </div>
        </WingBlank>
    )
}

//热门推荐
class HotGame extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    render(){
        return (
             <div className="hotGame">
                <div className="hotGame-head">
                    <h3>热门推荐</h3>
                    <Link to="/egame.html">更多</Link>
                </div>
                <div className="hotGame-main">
                    <WhiteSpace size="sm" />
                    <Grid
                        autoplay={true}
                        dots={false}
                        carouselMaxRow="1"
                        columnNum="3"
                        data={this.state.data}
                        isCarousel
                        hasLine={false}
                        onClick={_el => console.log(_el)}
                        renderItem={dataItem => (
                            <div className="grid-game">
                                <div className="gridGame-border">
                                    <img src={dataItem.img_url} alt="游戏" style={{ width: "60%" }} />
                                    <div className="gridGame-title">
                                        <span>{dataItem.game_title}</span>
                                    </div>
                                    <i className="gridGame-tip">{dataItem.plat_form}</i>
                                </div>
                            </div>
                        )}
                    />
                    <WhiteSpace size="sm" />
                </div>
            </div>
        )
    }
    componentDidMount() {
        this.setState({
            data: [{
                "ext": "",
                "game_code": "0",
                "game_id": "Dragons_Luck",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "龙之谕",
                "game_type": "egame",
                "hot_status": "1",
                "id": "105",
                "img_url": "/assets/img/tgp/Dragons_Luck.jpg",
                "plat_form": "TGP",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "Fortune_House",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "财富满屋",
                "game_type": "egame",
                "hot_status": "1",
                "id": "135",
                "img_url": "/assets/img/tgp/Fortune_House.jpg",
                "plat_form": "TGP",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "PP Game",
                "game_code": "0",
                "game_id": "14471",
                "game_kind": "0",
                "game_name": "EGIGAME",
                "game_title": "神龙界",
                "game_type": "egame",
                "hot_status": "1",
                "id": "146",
                "img_url": "/assets/img/ttg/pp/51.png",
                "plat_form": "TTG",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "luckybomber",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "幸运炸弹人",
                "game_type": "egame",
                "hot_status": "1",
                "id": "1502345679",
                "img_url": "/assets/img/gpi/LuckyBomber.jpg",
                "plat_form": "GPI",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "cleopatra",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "埃及艳后",
                "game_type": "egame",
                "hot_status": "1",
                "id": "1502345680",
                "img_url": "/assets/img/gpi/walletCleopatra.png",
                "plat_form": "GPI",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "PP Game",
                "game_code": "0",
                "game_id": "14452",
                "game_kind": "0",
                "game_name": "EGIGAME",
                "game_title": "宾果老虎机",
                "game_type": "egame",
                "hot_status": "1",
                "id": "153",
                "img_url": "/assets/img/ttg/pp/1.png",
                "plat_form": "TTG",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "0",
                "game_kind": "0",
                "game_name": "bib",
                "game_title": "蓝鲸",
                "game_type": "egame",
                "hot_status": "1",
                "id": "20",
                "img_url": "/assets/img/pt/27.png",
                "plat_form": "PT",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "0",
                "game_kind": "0",
                "game_name": "hk",
                "game_title": "高速公路之王",
                "game_type": "egame",
                "hot_status": "1",
                "id": "22",
                "img_url": "/assets/img/pt/30.png",
                "plat_form": "PT",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "TTG 手机游戏",
                "game_code": "0",
                "game_id": "1051",
                "game_kind": "0",
                "game_name": "MadMonkeyH5",
                "game_title": "疯狂的猴子",
                "game_type": "egame",
                "hot_status": "1",
                "id": "265",
                "img_url": "/assets/img/ttg/Ttg/1.png",
                "plat_form": "TTG",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "视频老虎机",
                "game_code": "0",
                "game_id": "29026",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "星梦之吻",
                "game_type": "egame",
                "hot_status": "1",
                "id": "291",
                "img_url": "/assets/img/mg/mg_dd/26.png",
                "plat_form": "MG",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "视频老虎机",
                "game_code": "0",
                "game_id": "45611",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "幸运的锦鲤",
                "game_type": "egame",
                "hot_status": "1",
                "id": "304",
                "img_url": "/assets/img/mg/mg_dd/24.png",
                "plat_form": "MG",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "视频老虎机",
                "game_code": "0",
                "game_id": "28736",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "狂欢节",
                "game_type": "egame",
                "hot_status": "1",
                "id": "323",
                "img_url": "/assets/img/mg/shipin/9.png",
                "plat_form": "MG",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "0",
                "game_kind": "0",
                "game_name": "bob",
                "game_title": "熊之舞",
                "game_type": "egame",
                "hot_status": "1",
                "id": "4",
                "img_url": "/assets/img/pt/7.png",
                "plat_form": "PT",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "sevenbrothers",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "福禄娃",
                "game_type": "egame",
                "hot_status": "1",
                "id": "50",
                "img_url": "/assets/img/gpi/sevenbrothers.png",
                "plat_form": "GPI",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "bikinibeach",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "沙滩比基尼",
                "game_type": "egame",
                "hot_status": "1",
                "id": "55",
                "img_url": "/assets/img/gpi/bikinibeach.png",
                "plat_form": "GPI",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            },
            {
                "ext": "",
                "game_code": "0",
                "game_id": "fortunecat",
                "game_kind": "0",
                "game_name": "0",
                "game_title": "招财猫",
                "game_type": "egame",
                "hot_status": "1",
                "id": "66",
                "img_url": "/assets/img/gpi/fortunecat.png",
                "plat_form": "GPI",
                "plat_type": "mobile",
                "sort": "0",
                "status": "0"
            }]
        })
        // Ajax.post("/game/get_list.do")
        //     .query({plattype:'mobile',is_hot:'1'})
        //     .then(function(res){
        //         var data = res.text ? JSON.parse(res.text) : null;
        //         console.log(data);
        //         if(data.Status===200){

        //         }
        //     })
    }
}

// 登录按钮
var GoLogin = (props)=>{
    return (
        <div className="index-login-btn">
            <Link to="/login.html">
                <img src={require("../../assets/img/tbet_loginBtn.png")} alt="登录按钮" style={{width:"100%"}} />
            </Link>
        </div>
    )
}
class Index extends Component {
    openPop=()=>{
        var { dispatch} = this.props;
        dispatch({
            type:"OPEN_CLOSE",
            meta:true
        })
    }
    render() {
        var { info} = this.props,
              dom;
        if(JSON.stringify(info)==="{}"){
            dom = ( <GoLogin open={this.openPop} />)
        }
        return (
            <div>
                <Header type="1" />
                <div className="container" ref="mate">
                    <IndexCarousel list={this.props.carousel} />
                    <Notice list={this.props.notice} />
                    <Sudoku info ={JSON.stringify(info)==="{}"?false:true} />
                    <HotGame />
                   {dom}
                </div>
            </div>
        )
    }
    componentDidMount(){
        var { dispatch} = this.props;
        dispatch(getIndexInit());    
    }
    
}

function store2props(store) {
    return {
        carousel: store.indexInit.carouselList,
        notice: store.indexInit.noticeList,
        info:store.indexInit.userInfo
    }
}
var IndexView = connect(store2props)(Index)

export default IndexView;