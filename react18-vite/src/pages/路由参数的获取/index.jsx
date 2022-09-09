import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from 'antd';

export default function App7() {
  // const local = useLocation()
  // console.log('获取当前页面路由:',local.pathname);

  const navigateTo = useNavigate()
  // 随机ID
  const randomId = (Math.random() - Math.random()).toString(10).substr(Math.random() * 5 + 3)

  return (
    <>
      <h2>
        <Link to='/home1111'>找不到该路由会直接走404页面</Link>
        <br />
        <Link to='/myLife'>类组件下的生命周期</Link>
        <br />
        <Link to='/home'>首页</Link>
        <br />
        <Link to='/list/123'>列表传id</Link>
        <br />
        <Link to='/detail?id=44&name=张三'>详情?&拼接方式传值</Link>
        <br />
        <Button onClick={() => navigateTo('/home', { state: { name1: '测试', age: 13 } })}>
          按钮触发事件方法跳转home并携带多个数据
        </Button>
        <br />
        <Button onClick={() => navigateTo(`/list/${randomId}`)}>动态路由：跳转列表传随机id</Button>
        <br />
        <Button onClick={() => navigateTo('/detail?name=王杰&id=13')}>跳转详情</Button>
        {/*  react的路由占位符、显示子路由 */}
        <Outlet />
      </h2>
    </>
  )
}
