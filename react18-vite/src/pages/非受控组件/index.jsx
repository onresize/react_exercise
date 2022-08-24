import React, { createRef } from 'react';
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
      <input type="text" ref={iptRef} />
      <button onClick={() => console.log(iptRef.current.value)}>打印ipt值</button>

      <hr />
      <h2>演示统一导出组件方式</h2>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <div className="bgcPic1"></div>
    </>
  );
}

export default RefCom;
