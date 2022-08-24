//XXX 公共复用组件、分别在index.jsx和 child.jsx中使用
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export default function Mouse(props) {
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

  // 这样使用这种方式 增加组件的复用性
  return (
    <div>
      {
        props.show(x, y)
      }
    </div>
  )
}

Mouse.propTypes = {
  show: PropTypes.func.isRequired
}
