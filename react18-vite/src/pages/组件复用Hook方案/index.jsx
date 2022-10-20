import React from 'react'
import useMouse from './useMouse'

const ComA = () => {
  const [x, y] = useMouse()

  return (
    <>
      <h2 style={{
        transition: 'all 0s',
        border: '3px solid red',
        position: 'absolute',
        top: y / 2,
        left: x / 2
      }}>
        组件A
      </h2>
    </>
  )
}


const ComB = () => {
  const [x, y] = useMouse()
  return (
    <>
      <h3>{x}, {y}</h3>
    </>
  )
}


export default function index() {
  return (
    <>
      <h2>组件复用hook方案实现</h2>
      <ComA />
      <ComB />
    </>
  )
}
