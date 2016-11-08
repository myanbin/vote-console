import React from 'react'

import { Input, InputNumber, Select, Radio, Row, Col } from 'antd'


class RuleInput extends React.Component {

  render = () => {
    return (
      <Row gutter={16}>
        <Col span={10}>
          <Input />
        </Col>
      </Row>
    )
  }
}

class RuleNumber extends React.Component {

  render = () => {
    return (
      <InputNumber />
    )
  }
}

class RuleSelect extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  handleChange = (value) => {
    console.log(value)
    this.setState({value})
  }

  render = () => {
    let options = []
    for (let [key, value] of this.props.options.entries()) {
      options.push(
        <Select.Option key={key.toString()} value={key.toString()}>{value}</Select.Option>
      )
    }
    return (
      <Row gutter={16}>
        <Col span={10}>
          <Select onChange={this.handleChange}>
            {options}
            <Select.Option value="-1">其他值</Select.Option>
          </Select>
        </Col>
        <Col span={6}>
          {this.state.value === '-1' ? <Input /> : null}
        </Col>
      </Row>
    )
  }
}

class RuleRadio extends React.Component {

  render = () => {
    return (
      <InputNumber />
    )
  }
}


export { RuleInput, RuleNumber, RuleSelect, RuleRadio }
