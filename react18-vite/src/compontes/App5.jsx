import React, { useState, memo, useCallback, useMemo } from 'react'

const Child = memo((props) => {
  console.log('子组件111');
  return <button onClick={() => props.doSth()}>累加</button>
})

export default function App5() {
  const [num, setNum] = useState(123)
  // 使用useCallback 搭配 memo实现更新父组件数据不更新子组件、memo使用场景子组件不操作可以直接使用

  /* 
    setNum(num) 使用新值强行覆盖初始值
    setNum(num  => num+1) 不断使用新值覆盖旧值
  */

  /* 这里用useCallback 相当于下面 useMemo */
  const doSth = useCallback(() => {
    setNum(num => num + 1)
  }, [])

  // const doSth = useMemo(() => {
  //   return () => {
  //     setNum(num => num + 1)
  //   }
  // }, [])

  return (
    <>
      <h2>HOOK memo解决父组件更新数据造成子组件也更新消耗性能问题</h2>
      <h2>数字：{num}</h2>
      <Child doSth={doSth} />
    </>
  )
}
