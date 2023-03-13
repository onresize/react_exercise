import React from 'react';


const SvgTextBg = (props) => {
  console.log('SvgTextBg组件_____________')
  const { text = '殷志伟牛逼', fontSize = 16, fillOpacity = '0.4', fillColor = 'grey' } = props
  const res = `
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="180px" height="180px" viewBox="0 0 180 180">
        <text x="-100" y="-30" fill='${fillColor}'  transform = "rotate(-35 220 -220)" fillOpacity='${fillOpacity}' font-size='${fontSize}'> ${text}</text>
      </svg>`

  const blob = new Blob([res], { type: 'image/svg+xml', })
  const url = URL.createObjectURL(blob)

  return (
    <>
      <div
        id="__wm"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 99,
          width: 'calc(100vw - 440px)',
          height: '80%',
          pointerEvents: 'none', // 点击穿透
          background: `url(${url})`,
        }}
      ></div>
    </>
  )
}



//XXX 这里注意因为 高阶组件内部要 return一个组件、再在内部组件里面渲染
export default function AAA(WrapperComponent) {
  return (props) => {
    return (
      <div style={{ height: 'calc(100vh - 80px)' }}>
        <WrapperComponent />
        <SvgTextBg {...props} style={{ overflow: 'hidden' }}></SvgTextBg>
      </div>
    )
  }
}