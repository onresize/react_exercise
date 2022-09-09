import React from 'react'
import { useParams } from 'react-router-dom'

export default function List() {
  const { id } = useParams()
  return (
    <>
      <h2>列表页拿到传来的随机id：{id}</h2>
    </>
  )
}
