import React, { useState, useEffect, useRef } from 'react';
import { useWindowScroll } from '../../hooks/useWindowScroll'
import { useLocalStorage } from '../../hooks/useLocalStorage'

function HooksUse() {
  const [y] = useWindowScroll()
  const [message, setMessage] = useLocalStorage('hook-key', '111')
  let n = 3

  const [age, setAge] = useState(() => {
    return n ** 4
  })

  // 设置了定时器要在页面销毁前清除定时器、否则会报错
  useEffect(() => {
    let r = setTimeout(() => {
      setMessage('cc')
    }, 3000);
    return () => {
      clearTimeout(r)
    }
  })

  const iptRef = useRef(null)

  return (
    <>
      <h2>
        Hooks使用
      </h2>
      <div style={{ height: '2000px' }}>
        <div style={{ position: 'fixed' }}>
          <h3>
            （useWindowScroll）当前滚动值： {y}
          </h3>
          <h3>
            （useLocalStorage）存储：{message}
          </h3>
          <h3>
            测试useState回调传参： {age}
          </h3>
          <input ref={iptRef} type="text" />
          <button onClick={() => iptRef.current.focus()}>useRef操作Dom聚焦ipt</button>
        </div>
      </div>
    </>
  );
}

export default HooksUse;
