/**
 * Created by U on 2017-06-23.
 */
import React from 'react'
import { Link } from 'react-router'
import './main.css'

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class MainPage extends React.Component {
  state = {
    collapsed: false,
    mode: 'inline',
    current: '1',
    openKeys: ['sub1']
  };
  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      mode: !this.state.collapsed ? 'vertical' : 'inline'
    });
  };
  handleClick = (e) => {
    this.setState({ current: e.key });
  };
  onOpenChange = (openKeys) => {
    const state = this.state;
    const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
    const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = this.getAncestorKeys(latestCloseKey);
    }
    this.setState({ openKeys: nextOpenKeys });
  };
  getAncestorKeys = (key) => {
    const map = {};
    return map[key] || [];
  };
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          >
          <div className="logo" />
          <Menu
            theme="dark"
            mode={this.state.mode}
            openKeys={this.state.openKeys}
            selectedKeys={[this.state.current]}
            onOpenChange={this.onOpenChange}
            onClick={this.handleClick}
            >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span className="nav-text">echarts</span></span>}>
              <Menu.Item key="1"><Link to="/bar">bar</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/map">map</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/echartsPlugin">echartsPlugin</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span className="nav-text">ant design</span></span>}>
              <Menu.Item key="5"><Link to="/table">antd table</Link></Menu.Item>
              <Menu.Item key="6"><Link to="/weather">antd weather</Link></Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span className="nav-text">Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.onCollapse}
              />
          </Header>
          <Content
            style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}
            key={this.props.location.pathname} ref='content'
            >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainPage
