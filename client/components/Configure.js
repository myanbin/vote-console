import React from 'react'

import { Button, Icon, Popconfirm, Form, Transfer, message } from 'antd'
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
      wrapperCol: { span: 12 },
    }
    const rules = []
    this.props.rules.map((rule, index) => {
      let options = new Map(rule.options)
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

let RuleForm = Form.create({
  onFieldsChange: (props, fields) => {
    props.onChange(fields)
  },
  mapPropsToFields: (props) => {
    const fields = {}
    console.log(props)
    return {}
  }
})(FormDemo)

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

    const rules = [{
      id: 'judges',
      name: '评委人数',
      input: 'text',
    }, {
      id: 'ratio',
      name: '通过比例',
      input: 'selectandedit',
      options: [
        [0, '不设置通过比例'],
        [0.5, '半数以上评委投票'],
        [0.66666, '三分之二以上评委投票'],
        [1, '需全部评委投票'],
      ],
    }, {
      id: 'scores',
      name: '投票分数项',
      input: 'selectandedit',
      options: [
        ['0.5|1|1.5|2', '0.5、1、1.5、2'],
        ['-1|-1.5|-2|-2.5|-3', '-1、-1.5、-2、-2.5、-3'],
      ],
    }]

    const candidates = []
    const inputs = []

    this.setState({rules, candidates, inputs})
  }


  handleRulesChange = (rules) => {
    console.log('upper compoment state chang')
  }

  handleCandidatesChange = (inputs) => {
    this.setState({inputs})
  }

  confirm = () => {
    console.log('Click on Yes')
  }
  cancel = () => {
    console.log('Click on No')
  }

  render = () => {
    return (
      <div>
        <h2>参数配置</h2>
        <RuleForm
          rules={this.state.rules}
          onChange={this.handleRulesChange}
        />
        <h2>候选项配置</h2>
        <Transfer
          dataSource={this.state.candidates}
          targetKeys={this.state.inputs}
          listStyle={{width: 360, height: 360}}
          showSearch
          onChange={this.handleCandidatesChange}
          render={item => item.title}
        />
        <div style={{marginTop: 24}}>
          <Button type="primary" style={{marginRight: 16}}>
            开始本轮投票<Icon type="right" />
          </Button>
          <Popconfirm
            title="确定要终止这个计划吗？"
            onConfirm={this.confirm}
            onCancel={this.cancel}
          >
            <Button type="ghost">终止</Button>
          </Popconfirm>
        </div>
      </div>
    )
  }
}

export default Configure
