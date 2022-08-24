import React, { useState, useRef } from 'react'

export default function App4() {
  const [val, setVal] = useState('默认val')
  const ele = useRef('')
  return (
    <>
      <h3>受控组件</h3>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => console.log(val)}>获取input值</button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text" ref={ele} />
      <button onClick={() => console.log(ele.current.value)}>获取input值</button >
    </>
  )
}
