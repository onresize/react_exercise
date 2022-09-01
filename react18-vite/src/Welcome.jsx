import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom'
import { Layout, Menu, Card, Switch } from 'antd';
import Icon from '@ant-design/icons';


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
  'canvasWaterMarkCom',
  'bangleIcon',
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
  const [mode, setMode] = useState('light')
  console.log('当前路由：', pathname);

  const LightSvg = () => (
    <svg t="1662001713688" class="icon" viewBox="0 0 1044 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2006" width="16" height="16"><path d="M565.5552 860.16v163.84h-81.92v-163.84h81.92zM249.4464 729.23136l57.93792 57.91744-115.85536 115.85536-57.93792-57.93792 115.85536-115.83488z m550.2976 0l115.85536 115.83488-57.91744 57.93792-115.85536-115.85536 57.91744-57.91744zM524.5952 245.76c147.0464 0 266.24 119.1936 266.24 266.24s-119.1936 266.24-266.24 266.24-266.24-119.1936-266.24-266.24 119.1936-266.24 266.24-266.24z m0 81.92a184.32 184.32 0 1 0 0 368.64 184.32 184.32 0 0 0 0-368.64z m512 143.36v81.92h-163.84v-81.92h163.84z m-860.16 0v81.92h-163.84v-81.92h163.84zM860.7744 117.90336l57.93792 57.93792-115.85536 115.85536-57.91744-57.93792 115.83488-115.85536z m-672.31744 0l115.85536 115.85536-57.93792 57.93792-115.83488-115.85536L188.416 117.90336zM565.5552 0v163.84h-81.92V0h81.92z" p-id="2007" fill="#e6e6e6"></path></svg>
  )

  const DarkSvg = () => (
    <svg t="1662001915111" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2309" width="16" height="16"><path d="M593.054 120.217C483.656 148.739 402.91 248.212 402.91 366.546c0 140.582 113.962 254.544 254.544 254.544 118.334 0 217.808-80.746 246.328-190.144C909.17 457.12 912 484.23 912 512c0 220.914-179.086 400-400 400S112 732.914 112 512s179.086-400 400-400c27.77 0 54.88 2.83 81.054 8.217z" fill="#2c2c2c" fill-opacity=".65" p-id="2310"></path></svg>
  )

  const LightIcon = (props) => (
    <Icon component={LightSvg} {...props} style={{ fontSize: '29px' }}></Icon>
  )
  const DarkIcon = (props) => (
    <Icon component={DarkSvg} {...props} style={{ fontSize: '29px' }}></Icon>
  )


  return (
    <>
      <Layout>

        {/* 侧边栏 */}
        <Sider
          color-mode={mode}
          className="App"
          width="230"
          style={{
            overflow: 'hidden',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            padding: '10px 10px 40px 10px',
          }}
        >
          <div className="sidebar" style={{ height: '101vh', width: '240px', overflow: 'scroll', padding: '0 0 40px 3px' }}>
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
          <div style={{ position: 'absolute', bottom: '0', zIndex: 999, paddingLeft: '50px', width: '100%', height: '30px', lineHeight: '30px', boxSizing: 'border-box', color: 'var(--surface2)', backgroundColor: 'var(--surface1)', transition: '1s' }}>
            主题切换:  <Switch
              onClick={() => setMode((e) => e == 'dark' ? 'light' : 'dark')}
              checkedChildren={<LightIcon style={{}} />}
              unCheckedChildren={<DarkIcon style={{}} />}
              defaultChecked
            />
          </div>
        </Sider>

        {/* 内容区 */}
        <Layout>
          <Content
            color-mode={mode}
            className="App"
            style={{
              marginLeft: 230,
              height: '100vh',
              padding: 10,
            }}
          >
            <Card
              color-mode={mode}
              style={{
                height: '100%',
                borderColor: 'var(--surface3)'
              }}
              className={(pathname === '/hocWaterMarkCom') ? 'rounded-2xl bg-[#000000]' : 'App'}>
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

