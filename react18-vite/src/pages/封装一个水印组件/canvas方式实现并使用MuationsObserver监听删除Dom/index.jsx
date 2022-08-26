import CanvasWaterMark from './canvasWaterMark'

export default () => {
  const style = {
    width: 'calc(100vw - 290px)', height: 'calc(100vh - 80px)'
  }
  return (
    <>
      <CanvasWaterMark {...{ style }}>
        {/* <h2>MuationsObserver监听实现不可删除水印</h2> */}
        <img style={{ width: 'calc(100vw - 240px)', height: 'calc(100vh  - 80px)', '-webkit-user-drag': 'none' }} src="https://res.gwm.com.cn/tank/tanksite/assets/images/tank300f/tip2_1_p.jpg" alt="" />
      </CanvasWaterMark>
    </>
  )
}