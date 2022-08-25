import React, { useState } from 'react';
import { Button, Anchor } from 'antd';
import RcViewer from '@hanyk/rc-viewer'
import pImg from '../../assets/memo.jpg'

import MemoCom from './memo'
import UseMemoCom from './useMemo'
import UseCallbackCom from './useCallback'

const { Link } = Anchor;

export default function App() {
  const options = {
    // 是否显示下面工具栏 1 显示 0 隐藏
    toolbar: 1,
    navbar: false,       //关闭缩略图
    fullscreen: false,   //播放全屏
    loop: false,         //是否循环 上一个 下一个
    minWidth: '',
    minHeight: '',
    toolbar: {
      zoomIn: { size: 'large' },  //放大
      zoomOut: { size: 'large' }, //缩小
      reset: { size: 'large' },   //重置
      prev: { show: true, size: 'large', }, //上一张
      play: { show: false, size: 'large', },  //播放
      next: { show: true, size: 'large', },  //下一张
      rotateLeft: { size: 'large' },  //左旋转
      rotateRight: { size: 'large' }, //右旋转
      flipHorizontal: { size: 'large' },  //左右翻转
      flipVertical: { size: 'large' },    //上下翻转
    }
  }
  return (
    <>
      <h2>
        <mark>useCallback</mark>、<mark>useMemo</mark>、<mark>memo</mark>的基本使用（减少的性能消耗、无效的优化会导致程序首次加载时间的增加）
        <Anchor>
          <a href="https://juejin.cn/post/6897038904914870286" target="_blank">掘金参考</a>
        </Anchor>
      </h2>
      <h2>useCallback 和 useMemo(useMemo相比之下回调函数里又return了一个回调函数)使用语法一致、第一个参数是回调函数、第二个参数是数组依赖（依赖变化时才会重新计算函数）</h2>
      <MemoCom></MemoCom>
      <UseMemoCom></UseMemoCom>
      <UseCallbackCom></UseCallbackCom>

      <RcViewer options={options} className="mt-2">
        <img className='my_img1 cursor-pointer border-4 border-dashed border-yellow-500 rounded-xl' src={pImg} alt="原" />
      </RcViewer>
    </>
  )
}


