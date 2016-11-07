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
  constructor() {
    super()

    this.state = {
      value: 0
    }
  }
  render = () => {
    let options = []
    for (let [key, value] of this.props.options.entries()) {
      options.push(
        <Select.Option key={key} value={key.toString()}>{value}</Select.Option>
      )
    }
    return (
      <div>
        <Select>
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