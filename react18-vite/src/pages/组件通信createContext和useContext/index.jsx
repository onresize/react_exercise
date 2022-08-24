import React, { createContext, useState, useContext } from 'react';
import { Button } from 'antd'

// Provider：提供数据、 Consumer：消费数据
// const { Provider, Consumer } = createContext()
const Context = createContext()

// 父组件
export default function Father() {
  const [status, setStatus] = useState(111)
  return (
    <>
      <h2 style={{ backgroundColor: 'pink', width: 'fit-content' }}>
        组件通信context基本使用 (useContext()、createContext())：父孙、父子、兄弟通信
      </h2>
      <div className="border-3 border-dashed border-yellow-500 p-4 m-4">
        <h2>父组件接收底层组件的传参: <mark>{status}</mark></h2>
        <Button onClick={() => setStatus(3333)}>顶层组件改变公共数据</Button>
      </div>

      {/* value传递了一个对象、分别为参数 和  回调函数setStatus */}
      <Context.Provider value={{ status, setStatus }}>
        <Child></Child>
      </Context.Provider>
    </>
  );
}


//XXX 子组件
function Child() {
  const { status, setStatus } = useContext(Context)
  return (
    <>
      <div className="border-3 border-dashed border-green-500 p-4 m-4">
        <h2>
          子组件拿到公共数据：<mark>{status}</mark>
        </h2>
        <Button onClick={() => setStatus('我子组件通过useContext方式传参')} style={{ backgroundColor: "skyblue" }}>子组件修改数据</Button>

        <Context.Consumer>
          {
            data => {
              // console.log('子组件通过Consumer获取公共数据：', data)
              return (
                <>
                  <hr  className="mt-3 mb-3" />
                  <h2>
                    子组件用Consumer方式拿到公共数据：<mark>{data.status}</mark>
                  </h2>
                  <Button onClick={() => data.setStatus('我是子组件使用consumer方式传递的参数')} style={{ backgroundColor: "skyblue" }}>Consumer（方式二）给顶层组件传参</Button>
                </>
              )
            }
          }
        </Context.Consumer>
      </div>

      <GrandSon></GrandSon>
    </>
  )
}


//XXX 孙组件
function GrandSon() {
  // 这里不要忘记传Context
  const { status, setStatus } = useContext(Context)
  return (
    <>
      <div className="border-3 border-dashed border-blue-500 p-4 m-4">
        <h2>useContext(Context)方式拿到公共数据：<mark>{status}</mark></h2>
        <Button onClick={() => setStatus('我是孙组件通过useContext方式传参')} style={{ backgroundColor: "yellow" }}>HOOK（方式一）给顶层组件传参</Button>

        {/* 此时的 data就是拿到了顶层的 Provider组件上的value */}
        <Context.Consumer>
          {
            data => {
              // console.log('Consumer获取公共数据：', data)
              return (
                <>
                  <hr className="mt-3 mb-3" />
                  <h2>
                    Consumer方式拿到公共数据：<mark>{data.status}</mark>
                  </h2>
                  <Button onClick={() => data.setStatus('我是孙组件使用consumer方式传递的参数')} style={{ backgroundColor: "yellow" }}>Consumer（方式二）给顶层组件传参</Button>
                </>
              )
            }
          }
        </Context.Consumer>
      </div>

    </>
  )
}
