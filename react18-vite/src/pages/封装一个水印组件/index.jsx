import React, { useState, useRef, useEffect } from 'react'
import WithWaterMark from './withWaterMark'
import Video from './video'
import './index.module.css'

{/* 基于svg封装一个withWaterMark高阶组件 */ }
const WaterMarkVideo = WithWaterMark(Video)

export default () => {
  console.log('执行父组件---')
  const status = { text: 'Lynk-Co', fontSize: '24', fillOpacity: '0.8', fillColor: '#71717A' }
  return (
    <>
      <WaterMarkVideo {...status}/>
    </>
  )
}
