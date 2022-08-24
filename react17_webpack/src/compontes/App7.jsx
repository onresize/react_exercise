import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

export default function App7() {
  // const local = useLocation()
  // console.log('获取当前页面路由:',local.pathname);

  const navigate = useNavigate()

  return (
    <>
      <Link to='/home1111'>找不到该路由会直接走404页面</Link>--
      <Link to='/myLife'>类组件下的生命周期</Link>--
      <Link to='/home'>首页</Link>--
      <Link to='/list/123'>列表传id</Link>--
      <Link to='/detail?id=44&name=张三'>详情?方式传值</Link>--
      <button onClick={() => navigate('/home', { state: { name: '测试', age: 13, id: 1 } })}>按钮触发事件方法跳转home并携带多个数据</button>--
      <button onClick={() => navigate('/list/33')}>跳转列表传id</button>--
      <button onClick={() => navigate('/detail?name=王杰&id=13')}>跳转详情</button>
      {/*  react的路由占位符、显示子路由 */}
      <Outlet />
    </>
  )
}
