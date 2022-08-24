import React, { useState } from "react"
import { useRequest } from 'ahooks'
import { message, Input, Button } from 'antd'

function changeUserName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  })
}

let Pname = '' // 暂存name值

export default () => {
  const [name, setName] = useState('张三')
  // let [Pname] = useState('')
  const { loading, run } = useRequest(changeUserName, {
    manual: true, // 手动触发
    onSuccess: ({ success }, params) => {
      if (success) {
        Pname = name
        setName('')
        message.success(`修改成功为：${params[0]}`)
      }
    }
  })
  console.log(Pname);

  return (
    <>
      <h3><u>实现：设置options.manual = true手动通过run函数触发</u></h3>
      <div>
        <Input onChange={(e) => setName(e.target.value)} value={name} placeholder="请输入要修改的name" className="w-200px mr-1" />
        <Button disabled={loading} onClick={() => run(name)}>{loading ? '正在修改' : '修改'}</Button>
        <h2>当前姓名：<Button disabled={name} type="primary">{Pname || name}</Button></h2>
      </div>
    </>
  )
}