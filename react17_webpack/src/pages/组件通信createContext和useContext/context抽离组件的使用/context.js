import { createContext } from 'react'
// const { Provider, Consumer } = createContext()

// 演示 Context在抽离组件中 多个参数的传递
const firstContext = createContext()
const secondContext = createContext()

export { firstContext, secondContext }  