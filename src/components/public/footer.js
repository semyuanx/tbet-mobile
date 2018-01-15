import React from 'react';
import { TabBar } from 'antd-mobile';
import { browserHistory } from 'react-router';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#ffe9c3"
        tintColor="#ffd08c"
        barTintColor="#000000"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(../assets/img/meun_cunkuan.png) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(../assets/img/meun_cunkuan_hover.png) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
          }
          title="存款"
          key="存款"
          dot={false}
          selected={this.props.url === '/recharge.html'}
          onPress={() => {
            browserHistory.push("/recharge.html")
          }}
          data-seed="logId1"
        >

        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(../assets/img/meun_game.png) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(../assets/img/meun_game_hover.png) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
          }
          title="游戏"
          key="游戏"
          selected={this.props.url === '/game.html'}
          onPress={() => {
            browserHistory.push("/game.html")
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(../assets/img/meun_tikuan.png) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
          }
          selectedIcon={
            <div style={{
              width: '0.44rem',
              height: '0.44rem',
              background: 'url(../assets/img/meun_tikuan_hover.png) center center /  0.42rem 0.42rem no-repeat'
            }}
            />
          }
          title="取款"
          key="取款"
          dot={false}
          selected={this.props.url === '/drawings.html'}
          onPress={() => {
            browserHistory.push("/drawings.html")
          }}
        >

        </TabBar.Item>

      </TabBar>
    )
  }
}
export default Footer;