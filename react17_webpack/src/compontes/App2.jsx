import { useState, useEffect } from 'react'

export default function App2() {
  const [num, setNum] = useState(1);
  const [num1, setNum1] = useState(2);

  // 模拟vue的mounted 一般写ajax、
  // useEffect第一个参数是回调、第二个参数是数组、里面填哪个值改变就会走这个回调、不写会检测所有变量
  // useEffect(() => {
  //   console.log('挂载完成');
  // }, [num1])


  // 模拟beforeDestroy 销毁时会触发这个回调
  useEffect(() => {
    return () => {
      console.log('销毁阶段')
    }
  })


  return (
    <>
      <h2>数字：{ num }</h2>
      <button onClick={ () => setNum(num+1) }>累加</button>
      <hr />
      <h2>数字：{ num1 }</h2>
      <button onClick={ () => setNum1(num1+1) }>累加</button>
    </>
  )
}
