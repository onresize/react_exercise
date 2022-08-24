import React, { useState, useEffect } from 'react';

export default function HighOrderCom(WrapperComponent) {
  // 组件复用之高阶组件方式(HOC)
  return function Mouse(props) {
    const [x, setX] = useState()
    const [y, setY] = useState()

    const MouseMove = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }

    useEffect(() => {
      window.addEventListener('mousemove', MouseMove)
      return () => {
        window.removeEventListener('mousemove', MouseMove)
      }
    }, [])

    return (
      <>
        {/* XXX下面三种写法等同 */}
        <WrapperComponent {...{ x, y }}></WrapperComponent>
        {/* <WrapperComponent x={x} y={y}></WrapperComponent> */}
        {/* <WrapperComponent show={x, y}></WrapperComponent> */}
      </ >
    )
  }

}

