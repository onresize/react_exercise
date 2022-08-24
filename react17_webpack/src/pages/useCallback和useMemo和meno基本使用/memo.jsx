import React, { memo, useState } from 'react';
import { Button } from 'antd';

//XXX 父组件
export default function MemoCom() {
  const [m, setM] = useState(10);
  const [n, setN] = useState(100);
  console.log('执行了memo父组件----')
  return (
    <div style={{ border: '4px solid #FF6666', padding: '5px' }}>
      <h2> <span style={{ backgroundColor: '#FF6666', width: 'fit-Content', borderRadius: '10px' }}>memo使用场景：</span> <b>包裹当缓存的子组件不需要操作父组件的数据的情况、静态的、（父组件更新自己的数据不会重复渲染子组件）</b></h2>
      <hr />
      <h2>n: {n}</h2>
      <Button onClick={() => setN((i) => i + 1)} type="primary">父组件修改自己的数据N</Button>
      <Button onClick={() => setM((i) => i + 1)}>父组件修改M数据</Button>

      <hr />
      <Child1 m={m}></Child1>
    </div>
  );
}


//XXX 子组件1、memo使用场景：适用于当缓存的组件不需要操作父组件的值的情况
const Child1 = memo((props) => {
  console.log('执行了memo子组件')
  return (
    <>
      <h2>拿到m: {props.m}</h2>
    </>
  )
})
