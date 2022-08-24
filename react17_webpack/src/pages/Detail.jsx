import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  const [obj] = useSearchParams()
  const id = obj.getAll('id')
  const name = obj.getAll('name')
  return (
    <>
      <h2>详情页接收?方式跳转传的参数id：{id}</h2>
      <h2>详情页接收?方式跳转传的参数name：{name}</h2>
    </>
  )
}
