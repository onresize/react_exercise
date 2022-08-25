import React, { useState, useRef, useEffect } from 'react'
import WithWaterMark from './withWaterMark'
import Video from './video'
import './index.module.css'

{/* 基于svg封装一个withWaterMark高阶组件 */ }
const WaterMarkVideo = WithWaterMark(Video)

export default () => {
  console.log('执行父组件---')
  return (
    <>
      <WaterMarkVideo className="!overflow-hidden"></WaterMarkVideo>
    </>
  )
}
