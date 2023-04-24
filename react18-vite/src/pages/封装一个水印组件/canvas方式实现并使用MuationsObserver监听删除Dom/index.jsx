import CanvasWaterMark from './canvasWaterMark'

//防止水印删除参考 https://www.jianshu.com/p/eaccb1ea73f9
export default () => {
  const style = {
    width: 'calc(100vw - 300px)', height: 'calc(100vh - 80px)'
  }
  return (
    <>
      <CanvasWaterMark {...{ style }}>
        {/* <h2>MuationsObserver监听实现不可删除水印</h2> */}
        <img style={{ width: 'calc(100vw - 240px)', height: 'calc(100vh  - 80px)', 'WebkitUserDrag': 'none' }} src="https://res.gwm.com.cn/tank/tanksite/assets/images/tank300f/tip2_1_p.jpg" alt="" />
      </CanvasWaterMark>
    </>
  )
}