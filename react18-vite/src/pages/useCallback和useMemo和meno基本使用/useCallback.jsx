import React, { useCallback, memo, useState } from 'react';
import { Button } from 'antd'

// 父组件
export default function UseCallbackCom() {
  console.log('执行useCallback父组件----');
  const [n, setN] = useState(0)
  //XXX 这里使用useCallback对函数进行缓存、当子组件调用这个函数时、不会重复渲染子组件
  const doSth = useCallback(() => setN(i => i + 1), [])

  return (
    <div style={{ border: '4px solid #FFCC33', padding: '15px', marginTop: '10px' }}>
      <h2><span style={{ backgroundColor: '#FFCC33', width: 'fit-Content', borderRadius: '10px' }}> useCallback使用场景：</span> <b>搭配memo包裹子组件、子组件触发的回调函数、父组件用useCallback对函数进行缓存、防止子组件的重复渲染（子组件更新父组件的数据不会重复渲染子组件）</b></h2>
      <h2>n: {n}</h2>
      <Child doSth={doSth} ></Child>
    </div>
  );
}



// 子组件
const Child = memo((props) => {
  console.log('执行useCallback子组件');
  return (
    <div>
      <Button onClick={() => props.doSth()} type="primary">子组件回调累加父组件数据</Button>
    </div >
  )
})
