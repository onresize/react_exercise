import React, { useState } from 'react';

function AsyncStateUse() {
  const [show, setShow] = useState(false)
  const handleChange = (state) => {
    setShow(() => {
      console.log('执行第一步')
      return !state
    })
    console.log('执行第二步：', state)
  }
  return (
    <>
      <h2>
        {/* 这里useState的状态是 boolean类型要转成字符串类型 */}
        验证useState是否异步: {show + ''}
      </h2>
      <h2>
        结论： useState Hook的第二个参数setState执行第一次是同步的、第二次之后都是异步的
      </h2>
      <button onClick={() => handleChange(show)}>测试</button>
    </>
  );
}

export default AsyncStateUse;
