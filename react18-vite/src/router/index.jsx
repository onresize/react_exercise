// react-router-dom中两种模式：BrowserRouter(History模式)  HashRouter(Hash模式)
import { lazy, Suspense } from 'react'
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom'

// 按需导入组件
const Error = lazy(() => import('../pages/Error'))
const App = lazy(() => import('../compontes/App7'))
const Welcome = lazy(() => import('../Welcome'))
const Home = lazy(() => import('../pages/Home'))
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
const MakeIdeas = lazy(() => import('../pages/奇思妙想/index'))
const RenderSvg = lazy(() => import('../pages/渲染svg/index'))
const MyTour = lazy(() => import('../pages/步骤引导组件测试/index'))
const UseReducerCom = lazy(() => import('../pages/useReducer基本使用/index'))
const UseCallbackCom = lazy(() => import('../pages/useCallback和useMemo和meno基本使用/index'))
const FullPageUse = lazy(() => import('../pages/fullpageJS使用/index'))
const AhooksUse = lazy(() => import('../pages/Ahooks基本使用/index'))
const HocWaterMarkCom = lazy(() => import('../pages/封装一个水印组件/index'))
const CanvasWaterMarkCom = lazy(() => import('../pages/封装一个水印组件/canvas方式实现并使用MuationsObserver监听删除Dom/index'))

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              textAlign: 'center',
              marginTop: 200
            }}
          >
            <h2>
              LOADING.....
            </h2>
          </div>
        }
      >
        {/*TODO: 组件首字母必须大写 */}
        <Routes>
          <Route path="/fullPageUse" element={<FullPageUse />}></Route>
          <Route path="/" element={<Welcome />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/list/:id" element={<List />}></Route>
            <Route path="/detail" element={<Detail />}></Route>
            <Route path="/myLife" element={<MyLife />}></Route>
            <Route path="/customHook" element={<CustomHook />}></Route>
            <Route path="/hooksUse" element={<HooksUse />}></Route>
            <Route path="/reduxUse" element={<ReduxUse />}></Route>
            <Route path="/asyncStateUse" element={<AsyncStateUse />}></Route>
            <Route path="/refCom" element={<RefCom />}></Route>
            <Route path="/fatherCom" element={<FatherCom />}></Route>
            <Route path="/comContext" element={<ComContext />}></Route>
            <Route path="/contextLeave" element={<ContextLeave />}></Route>
            <Route path="/renderProps" element={<RenderProps />}></Route>
            <Route path="/highOrderCom" element={<HighOrderCom />}></Route>
            <Route path="/makeIdeas" element={<MakeIdeas />}></Route>
            <Route path="/renderSvg" element={<RenderSvg />}></Route>
            <Route path="/myTour" element={<MyTour />}></Route>
            <Route path="/useReducerCom" element={<UseReducerCom />}></Route>
            <Route path="/useCallbackCom" element={<UseCallbackCom />}></Route>
            <Route path="/fullPageUse" element={<FullPageUse />}></Route>
            <Route path="/ahooksUse" element={<AhooksUse />}></Route>
            <Route path="/hocWaterMarkCom" element={<HocWaterMarkCom />}></Route>
            <Route path="/canvasWaterMarkCom" element={<CanvasWaterMarkCom />}></Route>
          </Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter >
  )
}

export default BaseRouter