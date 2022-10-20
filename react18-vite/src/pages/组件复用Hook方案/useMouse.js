import React, { useState, useEffect } from 'react'

export default () => {
  // 初始化鼠标坐标 x,y
  const [poc, setPoc] = useState({ x: 0, y: 0 })

  const handledMouseMove = (e) => {
    setPoc({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', handledMouseMove)
    return () => {
      document.removeEventListener('mousemove', handledMouseMove)
    }
  }, [])

  return [poc.x, poc.y]
}
