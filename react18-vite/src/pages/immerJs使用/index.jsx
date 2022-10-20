import { useState, useEffect } from 'react'
import produce from 'immer'
import { Button } from 'antd';

export default () => {

  const [list, setList] = useState([
    { obj: { name: '张三' } }
  ])

  const nextState = () => {
    //XXX 方法一：将数据深拷贝一份
    // let r = list
    // r[0].obj.age = 99
    // setList(() => r)


    //XXX 方法二：使用immer的produce解决这个问题
    setList(
      produce(data => {
        data[0].obj.age = 18
      })
    )
  }

  console.log('当前list：', list)
  return (
    <>
      <h2>遵从react数据不可变的原则下、修改数组或对象深层属性、对比原值和现值</h2>
      <Button onClick={nextState}>修改</Button>
    </>
  )
}