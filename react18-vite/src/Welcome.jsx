import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Card } from 'antd';
// 图片预览插件: npm install @hanyk/rc-viewer
import RcViewer from '@hanyk/rc-viewer'

import './assets/css/Welcome.css';
const { Content, Sider } = Layout;

const RouterList = [
  'home',
  'detail',
  'list',
  'myLife',
  'customHook',
  'hooksUse',
  'reduxUse',
  'asyncStateUse',
  'refCom',
  'fatherCom',
  'comContext',
  'contextLeave',
  'renderProps',
  'highOrderCom',
  'makeIdeas',
  'renderSvg',
  'myTour',
  'useReducerCom',
  'useCallbackCom',
  'FullPageUse',
  'ahooksUse',
  'hocWaterMarkCom',
  'canvasWaterMarkCom'
]

// 路由为'/'的默认组件
const InfoPage = () => {
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
      <div className="text_box">
        <div className="text_title">
          React v18 + react-router v6 + WindiCSS
        </div>
        <div className="text_img">
          <div className="img_box">
            <img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} className="App-logo1" alt="logo" />
          </div>
          <div className="text_add_box"><span className="text_add">+</span></div>
          <div className="img_box">
            <img src={'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'} className="App-logo" alt="logo" />
          </div>
        </div>
      </div>
      <div className="previewPic cursor-pointer">
        <RcViewer options={options}>
          <picture>
            <source srcSet="https://files.getquicker.net/_sitefiles/_guides/52593d69-c99a-4367-8b98-08d9a65be47e/2021/12/04/205023_202824_s.jpg" alt="缩" />
            <img className='my_img_one' src="https://files.getquicker.net/_sitefiles/_guides/52593d69-c99a-4367-8b98-08d9a65be47e/2021/12/04/205133_202824_b.jpg" alt="原" />
          </picture>
        </RcViewer>
        <RcViewer options={options}>
          <picture>
            <source srcSet="https://files.getquicker.net/_sitefiles/_guides/52593d69-c99a-4367-8b98-08d9a65be47e/2021/12/04/205316_202824_s.jpg" alt="缩" />
            <img className='my_img_one' src="https://files.getquicker.net/_sitefiles/_guides/52593d69-c99a-4367-8b98-08d9a65be47e/2021/12/04/205327_202824_b.jpg" alt="原" />
          </picture>
        </RcViewer>
        <RcViewer options={options}>
          <img className='my_img_one' src="https://assets.madewith.cn/storage/0/images/react/react-helmet-react-helmet.jpg" alt="原" />
        </RcViewer>
        <iframe src="./UpDown.html" frameBorder="0" scrolling="no"></iframe>

        {/*XXX 扑克正反面 */}
        <div className="w-30" >
          <div className="transform hover:rotate-y-180 relative preserve-3d transition-all duration-500 cursor-pointer">
            <img src="https://cn.windicss.org/assets/card-front.jpg" alt="Card Front" className="rounded-lg w-34 h-47 absolute backface-hidden z-1" />
            <img src="https://cn.windicss.org/assets/card-back.jpg" alt="Card Back" className="rounded-lg w-34 h-47 absolute backface-hidden z-2 transform rotate-y-180" />
          </div>
        </div>
      </div>
    </>
  )
}

function Welcome() {
  const { pathname } = useLocation()
  console.log('当前路由：', pathname);
  return (
    <>
      <Layout>

        {/* 侧边栏 */}
        <Sider
          theme="light"
          width="230"
          style={{
            overflow: 'hidden',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            padding: 10,
            backgroundColor: pathname === '/makeIdeas' && '#282C34'
          }}
        >
          <div className="sidebar" style={{ height: '100vh', width: '230px', overflow: 'scroll' }}>
            {
              RouterList.map((item) =>
                <div
                  className={pathname === '/' + item ? 'activeBtn' : 'infoBtn'}
                  key={item}>
                  <Link to={item}
                    className={pathname === '/' + item ? 'activeColor' : 'infoColor'}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      lineHeight: '30px',
                    }}
                  >
                    {item}测试
                  </Link>
                </div>
              )
            }
          </div>
        </Sider>

        {/* 内容区 */}
        <Layout>
          <Content
            className="containerWel"
            style={{
              marginLeft: 230,
              height: '100vh',
              padding: 10,
              backgroundColor: pathname === '/makeIdeas' && '#282C34'
            }}
          >
            <Card
              style={{
                height: '100%',
                backgroundColor: pathname === '/makeIdeas' && '#282C34'
              }}
              className={(pathname === '/hocWaterMarkCom') && 'rounded-2xl bg-[#000000]'}>
              {pathname === '/' && <InfoPage />}
              <Outlet></Outlet>
            </Card>
          </Content>
        </Layout>

      </Layout>
    </>
  );
}

export default Welcome;

