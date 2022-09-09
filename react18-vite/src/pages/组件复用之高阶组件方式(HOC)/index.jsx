import React from 'react';
import WithMouse from './withMouse'
import Child from '../组件复用render-props/child'
import Child1 from '../组件复用render-props/child1'

// Child相当于传递的dom解构
const MousePro = WithMouse(Child)
const MousePro1 = WithMouse(Child1)

export default function HighOrderCom(props) {
  return (
    <>
      <h2>组件复用之高阶组件方式实现共用组件、笑脸是共用的一个组件</h2>
      <MousePro1>123</MousePro1>
      <MousePro>456</MousePro>
    </>
  )
}

