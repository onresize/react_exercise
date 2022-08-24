import React, { useState } from 'react';
import { Button, Image, Anchor } from 'antd';
import pImg from '../../assets/memo.jpg'

import MemoCom from './memo'
import UseMemoCom from './useMemo'
import UseCallbackCom from './useCallback'

const { Link } = Anchor;

export default function App() {
  return (
    <>
      <h2>
        <mark>useCallback</mark>、<mark>useMemo</mark>、<mark>memo</mark>的基本使用（减少的性能消耗、无效的优化会导致程序首次加载时间的增加）
        <Anchor>
          <a href="https://juejin.cn/post/6897038904914870286" target="_blank">掘金参考</a>
        </Anchor>
      </h2>
      <h2>useCallback 和 useMemo(相比之下回调函数里又return了一个回调函数)使用语法一致、第一个参数是回调函数、第二个参数是数组依赖（依赖变化时才会重新计算函数）</h2>
      <MemoCom></MemoCom>
      <UseMemoCom></UseMemoCom>
      <UseCallbackCom></UseCallbackCom>
      <Image className='my_img1' src={pImg} alt="原" />
    </>
  )
}


