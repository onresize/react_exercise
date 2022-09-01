import React, { Fragment, useRef, useState } from 'react';
import './brage.css'

export default () => {

  const RefCount = useRef()
  const [num, setNum] = useState(0)

  const updateCount = () => {
    setNum((e) => e + 1)
    RefCount.current.dataset.count = num
  }

  return (
    <>
      <div style={{ height: '76px' }}>
        <div style={{ position: 'absolute', border: '1px solid transparent' }}>
          <div data-count={num} className="brageDiv" onClick={() => updateCount()} ref={RefCount}></div>
        </div>
      </div>
      <h3>注意attr在css中的用法</h3>
      <p data-text="hello">word</p>
    </>
  )
}
