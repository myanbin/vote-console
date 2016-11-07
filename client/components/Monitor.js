import React from 'react'

import { Table } from 'antd'

import io from 'socket.io-client'


class Monitor extends React.Component {

  constructor() {
    super()

    this.state = {
      judges: []
    }
  }

  componentDidMount = () => {
    this.getJudges()
  };

  getJudges = () => {
    const judges = []
    for (let i = 0; i < 5; i++) {
      const data = {
        index: i + 1,
        ip: '192.168.1.100',
        isOnline: `${Math.random() * 2 > 1}`,
        isVoted: `${Math.random() * 2 > 1}`,
      };
      judges.push(data)
    }
    this.setState({ judges })
  }

  render = () => {
    const columns = [{
      title: '序号',
      dataIndex: 'index',
    }, {
      title: 'IP 地址',
      dataIndex: 'ip',
    }, {
      title: '是否在线',
      dataIndex: 'isOnline',
    }, {
      title: '是否投票',
      dataIndex: 'isVoted',
    }];
    return (
      <div>
        <h1>投票监控</h1>
        <Table columns={columns} dataSource={this.state.judges} size="middle" pagination={false} />
      </div>
    )
  }
}


export default Monitor