import React from 'react'
import { Menu, Breadcrumb } from 'antd'

import 'antd/dist/antd.css'
import '../stylesheets/layout.css'
import '../stylesheets/custom.css'

class Console extends React.Component {

  render() {
    return (
      <div className="ant-layout">
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">当前投票管理</Menu.Item>
            <Menu.Item key="2">历史投票管理</Menu.Item>
            <Menu.Item key="3">模板文件下载</Menu.Item>
            <Menu.Item key="4">支持与帮助</Menu.Item>
          </Menu>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item><a href="">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">会议名称</a></Breadcrumb.Item>
              <Breadcrumb.Item>计划名称</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 590 }}>
                {this.props.children}
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            版权所有 &copy; 2016 由技术局自主研发小组支持
          </div>
        </div>
      </div>
    )
  }
}

export default Console
