import { createContext, useState, useContext } from 'react'

const Context = createContext()
// 顶层组件
export default function App3() {
  const [num, setNum] = useState(123)
  return (
    <Context.Provider value={{ num, setNum }}>
      <Father />
    </Context.Provider>
  )
}

// 父组件
const Father = () => <Child />


// 子组件
const Child = () => {
  const { num, setNum } = useContext(Context)
  return (
      <>
        <h2>子组件接收到顶层组件的值：{ num }</h2>
        <button onClick={() => setNum(456)}>子组件改变顶层组件的值</button>
      </>
  )
}
