import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Button } from 'antd'

export default function Home() {
  const local = useLocation()
  const [obj] = useSearchParams()
  // console.log(local);
  const getAll = (e, f) => {
    console.log('---------------------', e, f);
  }
  return (
    <>
      <h2>首页拿到按钮触发携带的多个参数：{local?.state?.id || '没有传值'}</h2>
      {/* 1.方法一 */}
      <Button onClick={() => getAll('123')}>函数式组件触发方法一</Button>
      {/* 2.方法二 */}
      <Button onClick={getAll.bind(this, '2222', '3333')}>函数式组件触发方法二</Button>
    </>
  )
}
