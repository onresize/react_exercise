import { useState } from 'react'

export default function App1() {
  // HOOK只能用在组件函数中的最顶层、这里使用HOOK 的useState 解决视图和逻辑层同步更新
  const [msg, setMsg] = useState('你好世界')

  const changeMsg = (str) => setMsg(str)

  return (
    <>
      <h2>{msg}</h2>
      <button onClick={() => changeMsg('hello word')}>修改</button>
    </>
  )
}
