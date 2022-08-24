import React, { useMemo, memo, useState } from 'react';
import { Button } from 'antd'

// 父组件
export default function UseMemoCom() {
  const [n, setN] = useState(6)
  console.log('执行useMemo父组件----');
  //XXX 对比useCallback、这里多了一步return、函数中返回函数称为：高阶函数
  const doSth = useMemo(() => {
    return () => setN(i => i + 2)
  }, [])
  return (
    <div style={{ border: '4px solid #339933', padding: '15px', marginTop: '10px' }}>
      <h2><span style={{ backgroundColor: '#339933', width: 'fit-Content', borderRadius: '10px' }}>useMemo使用场景：</span> <b>和useCallback用法一致、搭配memo使用、useMemo缓存的是函数的返回值、防止子组件的重复渲染</b></h2>
      <h2>n: {n}</h2>
      {/*XXX 子组件如果加了没被缓存的props、就是无效优化、还是会重复渲染 */}
      <Child doSth={doSth}></Child>
    </div>
  );
}


// 子组件
const Child = memo((props) => {
  console.log('执行useMemo子组件');
  return (
    <div>
      <Button onClick={() => props.doSth()} type="primary">子组件回调累加父组件数据</Button>
    </div >
  )
})