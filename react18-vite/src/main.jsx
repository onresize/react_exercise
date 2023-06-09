import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import Router from './router'
import { Provider } from 'react-redux'
import store from './store'
import App from './compontes/App3'

import 'antd/dist/antd.css';
import './index.css'
import 'virtual:windi.css'

// antd国际化
import zhCN from 'antd/es/locale/zh_CN';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Provider store={store}>
  //   <App />
  // </Provider>,

  // redux提供器
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  </Provider>
)

// 这里3秒替换节点、模拟App2.jsx中HOOK的useEffect触发回调函数、模拟vue销毁前的钩子
// setTimeout(() => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <h2>3秒后走了销毁</h2>
//   )
// }, 3000)
