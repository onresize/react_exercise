import React from 'react'
import ReactDOM from 'react-dom'
import App from './compontes/App3'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'

import 'antd/dist/antd.css';

let arr = [
  { name: '张三' },
  { name: '张三12' },
  { name: '张三2' },
];

class App1 extends React.Component {
  state = {
    txt: '',
    content: '',
    city: 'bj',
    isCheck: false,
  }

  handChange = e => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  render() {
    return (
      <>
        {/* 文本框 */}
        <input name="txt" type="text" value={this.state.txt} onChange={this.handChange} />
        <br />
        {/* 富文本框 */}
        <textarea name="content" value={this.state.content} onChange={this.handChange}></textarea>
        <br />
        {/* 下拉框 */}
        <select name="city" value={this.state.city} onChange={this.handChange}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="gj">广州</option>
        </select>
        <br />
        {/* 复选框 */}
        <input name="isCheck" type="checkbox" checked={this.state.isCheck} onChange={this.handChange} />
      </>
    )
  }
}
// PureComponent优化
class BindEvent extends React.PureComponent {
  // 这里是state的完整写法相当于直接写 state = { msg: 112 }
  constructor(props) {
    super(props)
    this.state = {
      msg: '方法一立即执行',
      msg1: '方法二正常点击执行',
    }
  }
  clog = (i, v) => {
    console.log('绑定事件传参', i, v)
  }
  render() {
    // PS:组件写jsx外层必须有一对标签包裹、这里用的 <></>
    return (
      <>
        {/* 1.这种方法会直接执行绑定事件的方法 */}
        <button onClick={this.clog(this.state.msg, 1)}>
          方法一点击无效默认立即执行
        </button>
        {/* 2.这种方法属于正常传参 */}
        <button onClick={this.clog.bind(this, this.state.msg1, 2)}>
          点击方法二
        </button>
        {/* 3.箭头函数也是正常传参 */}
        <button onClick={() => this.clog(32, 42)
        }>
          点击箭头函数传参方法三
        </button>
      </>
    )
  }
}
// 1.父子组件传值
// 父组件
class Father extends React.Component {
  state = {
    takenMsg: '',
    count: 123,
    flag: false
  }
  getContent = (data) => {
    this.setState({
      takenMsg: data
    })
  }
  clog = (index) => {
    console.log('绑定事件传参、打印索引', index)
  }
  render() {
    return (
      <div>
        父组件： {this.state.takenMsg}
        <Children getMsg={this.getContent} count={this.state.count} />
        <div onClick={this.clog(100)} style={{ background: this.state.flag ? 'pink' : 'green' }}>三元运算控制颜色</div>
        <div>
          {
            arr.map((item, i) => <li key={i} >{item.name}</li>)
          }
        </div>
      </div>
    )
  }
}
// 子组件
class Children extends React.Component {
  state = {
    msg: '刷抖音',
  }
  render() {
    return (
      <div>
        <h2>拿到了父组件的值：{this.props.count}</h2>
        <button onClick={this.props.getMsg(this.state.msg)}>将值传递给父组件</button>
      </div>
    )
  }
}
// 2.兄弟组件传值
// 兄弟AB组件在一个类下实现相互传值
class Public extends React.Component {
  state = {
    num: 0
  }
  changeNum = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
    return (
      <div>
        <A number={this.state.num}></A>
        <B changeNum={this.changeNum}></B>
      </div>
    )
  }
}

const A = (props) => {
  return (
    <div>
      计算器：{props.number}
    </div>
  )
}
const B = (props) => {
  return (
    <button onClick={() => props.changeNum()}>+1</button>
  )
}

ReactDOM.render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  // redux提供器
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)

// 这里3秒替换节点、模拟App2.jsx中HOOK的useEffect触发回调函数、模拟vue销毁前的钩子
// setTimeout(() => {
//   ReactDOM.render(
//     <h2>3秒后走了销毁</h2>,
//     document.getElementById('root')
//   )
// }, 3000)