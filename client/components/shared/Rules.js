import React from 'react'

import { Input, InputNumber, Select, Radio } from 'antd'


class RuleInput extends React.Component {

  render = () => {
    return (
      <Input />
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
      <div>
        <Select onChange={this.handleChange}>
          {options}
          <Select.Option value="-1">其他值</Select.Option>
        </Select>
        {this.state.value === '-1' ? <Input /> : null}
      </div>
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
