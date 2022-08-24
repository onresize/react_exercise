import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'
import App from './compontes/App3'

import 'antd/dist/antd.css';
import 'virtual:windi.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  // redux提供器
  <Provider store={store}>
    <Router />
  </Provider>
)

// 这里3秒替换节点、模拟App2.jsx中HOOK的useEffect触发回调函数、模拟vue销毁前的钩子
// setTimeout(() => {
//   ReactDOM.render(
//     <h2>3秒后走了销毁</h2>,
//     document.getElementById('root')
//   )
// }, 3000)
