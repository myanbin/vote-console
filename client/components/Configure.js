import React from 'react'

import { Form, Transfer } from 'antd'
import { RuleInput, RuleNumber, RuleSelect } from './shared/Rules'


import io from 'socket.io-client'


class FormDemo extends React.Component {
  handleSubmit = () => {
    e.preventDefault()
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        console.log('errors in form')
        return
      }
      console.log('submit', values)
    })
  }

  render = () => {
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 4 },
    }
    const rules = []
    Array.from([{
      id: "judges",
      name: "评委人数",
      input: "text",
    }, {
      id: "ratio",
      name: "通过比例",
      input: "selectandedit",
    }]).map((rule, index) => {
      let options = new Map([
        [0, "不设置通过比例"],
        [0.5, "半数以上评委投票"],
        [0.66666, "三分之二以上评委投票"],
        [1, "需全部评委投票"],
      ])
      rules.push(
        <Form.Item {...formItemLayout} key={index} label={rule.name}>
          {getFieldDecorator(rule.id)(
            rule.input === 'text' ? <RuleInput /> : <RuleSelect options={options} />
          )}
        </Form.Item>
      )
    })
    return (
      <Form horizontal onSubmit={this.handleSubmit}>
        {rules}
      </Form>
    )
  }
}

let RuleForm = Form.create()(FormDemo)

class Configure extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      rules: [],
      candidates: [],
      inputs: [],
    }
  }

  componentDidMount = () => {

    const rules = []


    const candidates = []
    const inputs = []

    this.setState({rules, candidates, inputs})
  }


  handleRulesChange = (rules) => {
    this.setState({...this.state.rules, ...rules})
  }

  handleCandidatesChange = (inputs) => {
    this.setState({inputs})
  }

  render = () => {
    return (
      <div>
        <h2>参数配置</h2>
        <RuleForm {...this.state.rules} onChange={this.handleRulesChange} />
        <h2>候选项配置</h2>
        <Transfer
          dataSource={this.state.candidates}
          targetKeys={this.state.inputs}
          listStyle={{ width: 360, height: 360 }}
          showSearch
          onChange={this.handleCandidatesChange}
          render={item => item.title}
        />
      </div>
    )
  }
}

export default Configure
