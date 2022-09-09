import React from 'react'
import { createBrowserHistory } from 'history'
import { useNavigate } from 'react-router-dom'

const history = createBrowserHistory()
// 定义一个函数通过canAccess的值实现对应路由控制访问权限
export default ({ canAccess, children }) => {
  const navigateTo = useNavigate()
  // console.log('history路由实例：', history)

  if (!canAccess) {
    console.log('当前没有登入-----------')
    //XXX 使用 history.push('/') 和 window.location.reload()刷新代替 navigateTo('/')
    // 参考： https://blog.csdn.net/qq_53120043/article/details/126358758
    history.push('/login')
    window.location.reload()
    // navigateTo('/')
    return
  }
  return <>{children}</>
}
