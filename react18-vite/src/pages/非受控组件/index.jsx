import React, { createRef } from 'react';
import { Button, Input } from 'antd'

import { TodoInput, TodoList } from './com'
import './index.css'

function RefCom() {
  // 也可以使用useRef 这个hook
  const iptRef = createRef()
  return (
    <>
      <h2>
        非受控组件基本使用
      </h2>
      <div className="flex">
        <Input type="text" ref={iptRef} className="w-200px mr-1"/>
        <Button onClick={() => console.log(iptRef.current.input.value)}>打印ipt值</Button>
      </div>

      <hr />
      <h2>演示统一导出组件方式</h2>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <div className="bgcPic1"></div>
    </>
  );
}

export default RefCom;
