import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'

export default function Detail() {
  // const location = useLocation()
  const [bba] = useSearchParams()
  // console.log('location:', location)
  const id = bba.getAll('id')
  const name = bba.getAll('name')
  //XXX 这里也可以使用get('id')、get('name')获取路由传参、getAll是当路由有重复的参数名时、会返回参数值的数组
  console.log('id-name:', bba.get('id'), bba.get('name'))
  return (
    <>
      <h2>详情页接收?方式跳转传的参数id：{id}</h2>
      <h2>详情页接收?方式跳转传的参数name：{name}</h2>
    </>
  )
}
