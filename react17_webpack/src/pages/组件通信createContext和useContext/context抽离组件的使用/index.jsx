import React, { useState } from 'react';
import Father from './father';
import { firstContext } from './context'
import { secondContext } from './context'

function ContextLeave() {
  const [msg, setMsg] = useState(2222)
  const [sta, setSta] = useState('two')

  return (
    <>
      <h2>Context抽离组件的使用</h2>
      <firstContext.Provider value={msg}>
        <Father></Father>
      </firstContext.Provider>
      <secondContext.Provider value={sta}>
        <Father></Father>
      </secondContext.Provider>
    </>
  );
}

export default ContextLeave;
