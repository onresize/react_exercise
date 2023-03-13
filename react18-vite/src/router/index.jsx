// react-router-dom中两种模式：BrowserRouter(History模式)  HashRouter(Hash模式)
import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'

// 控制路由访问权限
import Access from './Access'

// 按需导入组件
const Error = lazy(() => import('../pages/Error'))
const Login = lazy(() => import('../pages/Login'))
const Welcome = lazy(() => import('../Welcome'))
const Home = lazy(() => import('../pages/Home'))
const RouterParams = lazy(() => import('../pages/路由参数的获取/index'))
const Detail = lazy(() => import('../pages/Detail'))
const List = lazy(() => import('../pages/List'))
const MyLife = lazy(() => import('../pages/MyLife'))
const CustomHook = lazy(() => import('../pages/自定义Hook/index'))
const HooksUse = lazy(() => import('../pages/hooks使用/index'))
const ReduxUse = lazy(() => import('../pages/redux使用/index'))
const AsyncStateUse = lazy(() => import('../pages/useSate是否异步/index'))
const RefCom = lazy(() => import('../pages/非受控组件/index'))
const FatherCom = lazy(() => import('../pages/父子组件通信/index'))
const ComContext = lazy(() => import('../pages/组件通信createContext和useContext/index'))
const ContextLeave = lazy(() => import('../pages/组件通信createContext和useContext/context抽离组件的使用/index'))
const RenderProps = lazy(() => import('../pages/组件复用render-props/index'))
const HighOrderCom = lazy(() => import('../pages/组件复用之高阶组件方式(HOC)/index'))
const HookComRender = lazy(() => import('../pages/组件复用Hook方案/index'))
const MakeIdeas = lazy(() => import('../pages/奇思妙想/index'))
const RenderSvg = lazy(() => import('../pages/渲染svg/index'))
const MyTour = lazy(() => import('../pages/步骤引导组件测试/index'))
const UseReducerCom = lazy(() => import('../pages/useReducer基本使用/index'))
const UseCallbackCom = lazy(() => import('../pages/useCallback和useMemo和meno基本使用/index'))
const FullPageUse = lazy(() => import('../pages/fullpageJS使用/index'))
const AhooksUse = lazy(() => import('../pages/Ahooks基本使用/index'))
const HocWaterMarkCom = lazy(() => import('../pages/封装一个水印组件/index'))
const CanvasWaterMarkCom = lazy(() => import('../pages/封装一个水印组件/canvas方式实现并使用MuationsObserver监听删除Dom/index'))
const BangleIcon = lazy(() => import('../pages/实现角标/index'))
const ImmerJs = lazy(() => import('../pages/immerJs使用/index'))

// 解决路由切换闪屏
const lazyLoad = (children) => {
  return <Suspense fallback={<div
    style={{
      textAlign: 'center',
      marginTop: 200
    }}
  >
    <h2>
      LOADING.....
    </h2>
  </div>}>
    {children}
  </Suspense>
}


const RouterList = () => {
  const navigateTo = useNavigate()
  const { pathname } = useLocation()
  // 控制路由访问权限、应用场景：当没有登入的情况、canAccess为false、只允许访问login页面
  const [canAccess, setAccess] = useState(false)
  //XXX 模仿vue的路由全局钩子（前置、后置）
  useEffect(() => {
    console.log('进入路由：', pathname);
    return () => {
      console.log('离开路由：', pathname)
    }
  }, [canAccess, pathname])

  // 封装一个统一方法
  const publicElement = (canAccess, childrenCom) => {
    return (
      // 控制页面访问权限
      <Access {...{ canAccess, children: lazyLoad(childrenCom) }} />
    )
  }

  useEffect(() => {
    console.log('拿到localStorage:', JSON.parse(window.localStorage.getItem('login')))
    let loginForm = JSON.parse(window.localStorage.getItem('login'))
    // 登入成功将允许所有页面能够访问、否则重定向login页
    if (loginForm?.password == 123 && loginForm?.username == 'admin') {
      setAccess(true)
    } else {
      navigateTo('/login')
    }
  }, [])

  return (
    // TODO: 组件首字母必须大写 
    <Routes>
      <Route path="/" element={lazyLoad(<Welcome />)}>
        <Route path="/routerParams" element={publicElement(canAccess, <RouterParams />)}></Route>
        <Route path="/home" element={publicElement(canAccess, <Home />)}></Route>
        <Route path="/list/:id" element={publicElement(canAccess, <List />)}></Route>
        <Route path="/detail" element={publicElement(canAccess, <Detail />)}></Route>
        <Route path="/myLife" element={publicElement(canAccess, <MyLife />)}></Route>
        <Route path="/customHook" element={publicElement(canAccess, <CustomHook />)}></Route>
        <Route path="/hooksUse" element={publicElement(canAccess, <HooksUse />)}></Route>
        <Route path="/reduxUse" element={publicElement(canAccess, <ReduxUse />)}></Route>
        <Route path="/asyncStateUse" element={publicElement(canAccess, <AsyncStateUse />)}></Route>
        <Route path="/refCom" element={publicElement(canAccess, <RefCom />)}></Route>
        <Route path="/fatherCom" element={publicElement(canAccess, <FatherCom />)}></Route>
        <Route path="/comContext" element={publicElement(canAccess, <ComContext />)}></Route>
        <Route path="/contextLeave" element={publicElement(canAccess, <ContextLeave />)}></Route>
        <Route path="/renderProps" element={publicElement(canAccess, <RenderProps />)}></Route>
        <Route path="/highOrderCom" element={publicElement(canAccess, <HighOrderCom />)}></Route>
        <Route path="/hookComRender" element={publicElement(canAccess, <HookComRender />)}></Route>
        <Route path="/makeIdeas" element={publicElement(canAccess, <MakeIdeas />)}></Route>
        <Route path="/renderSvg" element={publicElement(canAccess, <RenderSvg />)}></Route>
        <Route path="/myTour" element={publicElement(canAccess, <MyTour />)}></Route>
        <Route path="/useReducerCom" element={publicElement(canAccess, <UseReducerCom />)}></Route>
        <Route path="/useCallbackCom" element={publicElement(canAccess, <UseCallbackCom />)}></Route>
        <Route path="/ahooksUse" element={publicElement(canAccess, <AhooksUse />)}></Route>
        <Route path="/hocWaterMarkCom" element={publicElement(canAccess, <HocWaterMarkCom />)}></Route>
        <Route path="/canvasWaterMarkCom" element={publicElement(canAccess, <CanvasWaterMarkCom />)}></Route>
        <Route path="/bangleIcon" element={publicElement(canAccess, <BangleIcon />)}></Route>
        <Route path="/immerJs" element={publicElement(canAccess, <ImmerJs />)}></Route>
      </Route>
      <Route path="*" element={lazyLoad(<Error />)}></Route>
      <Route path="/fullPageUse" element={publicElement(canAccess, <FullPageUse />)}></Route>
      <Route path="/login" element={lazyLoad(<Login />)}></Route>
    </Routes>
  )
}


export default () => {
  return (
    <BrowserRouter>
      <RouterList /> 
    </BrowserRouter >
  )
}