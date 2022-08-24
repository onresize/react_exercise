import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Home() {
  const local = useLocation()
  // console.log(local);
  const getAll = (e) => {
    console.log('---------------------', e);
  }
  return (
    <>
      <h2>首页拿到按钮触发携带的多个参数：{local?.state?.id || '没有传值'}</h2>
      {/* 1.方法一 */}
      <button onClick={() => getAll('123')}>函数式组件触发方法一</button>
      {/* 2.方法二 */}
      <button onClick={getAll.bind(this, '12311')}>函数式组件触发方法二</button>
    </>
  )
}
