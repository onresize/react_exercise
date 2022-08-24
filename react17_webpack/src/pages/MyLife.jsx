import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class MyLife extends Component {

  state = {
    num: 2
  }
  // 相当于vue的 mounted
  componentDidMount() {
    console.log('挂载之后');
  }
  // 相当于vue的 update
  componentDidUpdate() {
    console.log('更新之后', this.state.num);
  }

  // 相当于vue的 beforeDestroy
  componentWillUnmount() {
    console.log('销毁时');
  }

  render() {
    return (
      <>
        <h2>演示类组件下的生命周期num： {this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>累加触发更新</button>
        <button><Link to="/home">跳转触发销毁</Link></button>
      </>
    )
  }
}
