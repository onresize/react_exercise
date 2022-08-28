import React, { useState, useRef, useEffect } from 'react'
export default () => {
  const [show, setShow] = useState('block')
  const videoRef = useRef()

  const playVideo = () => {
    setShow('none') // 隐藏播放按钮
    videoRef.current.play()
  }

  // 暂停
  const pauseVideo = () => {
    if (show == 'none') {
      videoRef.current.pause()
      setShow('block')
    }
  }

  return (
    <>
      <video ref={videoRef} poster="https://lynk-portal-prod-ntt-obs-02.obs.cn-east-2.myhwclouds.com/LynkCoPortal/Files/Cars/05JIA/05jia-p-dingzhen/pc.jpg" src="https://lynk-portal-prod-ntt-obs-02.obs.cn-east-2.myhwclouds.com/LynkCoPortal/Files/Cars/05JIA/05jia.mp4" loop className="w-full h-full !object-cover" onClick={() => pauseVideo()}>
      </video>
      <img style={{ position: 'absolute', zIndex: 100, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zoom: '0.4', cursor: 'pointer', userSelect: 'none', 'WebkitUserDrag': 'none', display: show }} onClick={() => playVideo()} src="https://dm30webimages.lynkco.com.cn/LynkCoPortal/Content/images/icon_play@2x.png" alt="" />
    </>
  )
}