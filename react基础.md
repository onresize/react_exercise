```js
vscode安装 Es7 + React 插件后
// 输入rcc 直接出 类组件 代码结构
// 输入rfc 直接出 函数式组件 代码结构

#（父组件更新状态、子组件不会重新渲染、只有子组件更新状态才会重新渲染、节约性能）可以用rmc代替rfc
// 输入rmc 使用memo包裹函数式组件优化性能

好用的简写：
imrs    Import React / useState
imrse    Import React / useState useEffect
uss 	useState
cwm    componentWillMount
cwrp    componentWillReceiveProps
gds    getDerivedStateFromProps
scu    shouldComponentUpdate
cwu    componentWillUpdate
cdu    componentDidUpdate
cwu    componentWillUpdate
cdc    componentDidCatch
ss    setState
```

### 	React 脚手架初始化项目：

```shell
npx create-react-app my-app // 临时下载脚手架并创建项目后删除脚手架
yarn start 或 npm start 启动
```

脚手架使用react

1.导入react 和 react-dom两个包

```js
import React from 'react'
import ReactDom from 'react-dom'
```

2. 调用 React.createEmlement() 方法创建react元素
3. 调用 ReactDOM.render() 方法渲染 react 元素到页面中

**JSX  在js中写html**

```jsx
const title = <h1>hello React</h1>
```

jsx注意点

```jsx
1.React元素的属性名使用驼峰命名法
2.特殊属性名： class -> className、for -> htmlFor、tabindex -> tableIndex
3.没有子节点的 React标签元素可以用 /> 结束
4.建议使用（）包裹jsx语法、防止插入；形成的错误 
	例: const title = (<h1>hello React</h1>)
5.jsx中嵌入js表达式用 单{}包裹、这里注意区别vue的插值表达式
6.jsx遍历：
	let list = [
        {name: 1},{name: 2}
    ]
	const obj = (
    	<div>{list.map((item, i) => (<h1 key={i}>{item.name}</h1>))}</div>
	)
 7.组件中可以使用<></>空标签包裹(无法获取ref)、也可以用引入react的<Fragment></Fragment>包裹
 improt { Fragment } from 'react'

jsx就是通过React.createElement()这个api生成dom、返回的是虚拟dom、通过ReactDOM.render渲染成真实dom
```

### React组件创建两种方式

```jsx
#一、函数声明组件方式
为区分普通函数 
1.函数名首字母必须大写
2.函数结构必须return
3.没有同步更新视图和逻辑的方法、使用自定义HOOK的 useState更行视图和逻辑
# PS: HOOK只能用在函数式组件的最顶层 
// 创建组件
function Hello() {
    return (<h1>我创建的第一个组件</h1>)
}
// 使用组件(将虚拟dom渲染成真实dom)
ReactDOM.render(<Hello />, root)



# 二、类创建组件方式
1.类名称必须大写字母开头
2.类应该继承React.Component父类、从而可以使用它的方法和属性
3.类组件必须render()方法
4.render() 方法必须有返回值
5.用setSatet{}更新视图和逻辑数据
class Hello extends React.Component {
    render() {
        return <div>Hello 类创建组件</div>
    }
}
ReactDOM.render(<Hello />, root)
```

**绑定事件的三种方法** (这里例举类组件方式)

```jsx
class AAA extends React.Component {
    // 这里是state的完整写法相当于直接写 state = { msg: 112 }
    constructor(props) {
        super(props)
        this.state = {
            msg: '方法一立即执行',
            msg1: '方法二正常点击执行',
        }
    }
    clog = (i, v) => {
    	console.log('绑定事件传参', i, v)
  	}
    render() {
       // PS:组件写jsx外层必须有一对标签包裹、这里用的 <></>
    	return (
    	  <>
    	    {/* 1.这种方法会直接执行绑定事件的方法 */}
    	    <button onClick={this.clog(this.state.msg, 1)}>
    	      方法一点击无效默认立即执行
    	    </button>
    	    {/* 2.这种方法属于正常传参 */}
    	    <button onClick={this.clog.bind(this, this.state.msg1, 2)}>
    	      点击方法二
    	    </button>
    	    {/* 3.箭头函数也是正常传参 */}
    	    <button onClick={() => this.clog(32, 42)
    	    }>
    	      点击箭头函数传参方法二
    	    </button>
    	  </>
    	)
    }
}
```

![](https://img-blog.csdnimg.cn/d2689efa28ab478b9d7c1ecf75e2ee1d.png)

![image-20220123223928681](https://img-blog.csdnimg.cn/087da0149321454793d3cb042df75632.png)

### 组件中的 state 和 setState

```jsx
class Hello extends React.Component {
    // 初始化state
	state = {
        count: 10
    }
	render() {
        // 使用state
    	return (<div>{ this.state.count }</div>)
	}
}
```

![image-20220123225100105](https://img-blog.csdnimg.cn/087da0149321454793d3cb042df75632.png)

### 组件传值三种方式：

1.父子组件通过父组件中为子组件标签添加属性名实现、子传父、父传值

2.兄弟组件传值、将两个AB兄弟组件都放在一个公共类下，实现相互传值

Context解决组件多层嵌套之间的通信

![image-20220204115434178](https://img-blog.csdnimg.cn/98ae6ab78c1e4fddbdf5a709feb2450b.png)

![image-20220204120022401](https://img-blog.csdnimg.cn/ca19327e19324523adece1dcaef9ecb9.png)

![image-20220204212656484](https://img-blog.csdnimg.cn/9cf1b93c1f1a465ca1c896cd905bfe9f.png)

![image-20220204213540978](https://img-blog.csdnimg.cn/eab06b9d26cb4c4a94ed83e09e91fed1.png)

![image-20220204214058557](https://img-blog.csdnimg.cn/c21241c851ba473baf5875b70dad151d.png)

 

### 类组件中生命周期

![](https://img-blog.csdnimg.cn/75e6c4bf990f4349a6b20faeeae80f20.jpeg)

路由 v6 和 v5 占位符分别写法

```js
安装： yarn add react-router-dom@6
// PS: router v5版本没有像v6版本的 outlet路由占位符、所有使用嵌套switch方式实现子路由加载
在页面展示的时候使用 <div>{this.props.children}</div> 显示子路由、相当于v6版本的 outlet
// 下面是v5版本配置好嵌套路由
<Switch>
    <Route path="/" component=(() => {
        return (
        	<App>
            	<Switch>
            		<Route exact path="/list" component={List}></Route>
                     <Route exact path="/detail" component={Detail}></Route>
            	</Switch>
            </App>
        )
    })></Route>
</Switch>
```

```js
// React v17类组件生命周期
https://zhuanlan.zhihu.com/p/370198189
```

### useEffect

```js
# 函数式组件 模拟 类组件中的生命周期
useEffect(callback, arr): 第一个参数为回调、第二个参数为数组、可省略

let num = 10

useEffect(() => {}, []) // 模拟mounted、componentDidMount

useEffect(() => {}) // 每次更新都会执行这个回调

useEffect(() => {
    reeturn () => {
        // 模拟beforeDestory、componentWillUnmount
    }
})

useEffect(() => {
    console.log('当num变化就会触发这个回调') // 模拟updated、componentDidUpdate
}, [num])
```

### useRef

```js
1. 导入 useRef 函数
2. 执行 useRef 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
3. 通过ref 绑定 要获取的元素或者组件

const refContainer= useRef()
<input ref={refContainer} type="text" />
ref对象的.current属性为相应的 Dom节点
```

### useContext

```js
父组件、子组件、孙组件之间相互通信、
import {createContext, useContext} from 'react'
const Context = createContext()
const data = useContext(Context)
// 具体演示看react-exercise脚手架
```

### useReducer	

```js
类似redux的一个管理状态的hook
```

###  useMemo、useCallback、memo

```js
// 三个都是优化性能的、做缓存
useMemo 缓存的是函数的返回值
useCallback 缓存的是函数、和 useMemo使用方法一样 
useMemo(() => () => {}, [])
useCallback(() => {}, [])

# memo使用场景：
包裹当缓存的子组件不需要操作父组件的数据的情况、静态的、（父组件更新自己的数据不会重复渲染子组件）

# useCallback使用场景：
搭配memo包裹子组件、子组件触发的回调函数、父组件用useCallback对函数进行缓存、防止子组件的重复渲染（子组件更新父组件的数据不会重复渲染子组件）

# useMemo使用场景：
和useCallback用法一致、搭配memo使用、useMemo缓存的是函数的返回值、防止子组件的重复渲染
```



### React  Redux状态管理

```js
npm  i redux react-redux -S
```

### windiCss 和 unoCss

```js
1.windiCss： 一个css库

// windi.config.ts
> 1.1 通过以下配置启用
export default {
  attributify: true, // 属性模式
}

> 1.2 然后标签上就能直接写原子化css
<button 
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>

@apply指令参考： https://cn.windicss.org/features/directives.html

2.unoCss：
解决标签上样式堆积、安装@unocss/transformer-directives插件后允许使用@apply指令在style中写原子化css
<template>
  <div class="container">container</div>
</template>

<style lang="less">
.container {
  @apply p-5 bg-pink c-white;
}
</style>
```

```js
// 使用classnames进行样式处理
安装： npm i classnames -S
import './xx.css'
state = {
    isShow: false
}
import classnames from 'classnames'
<div className={classnames(['title', 'size'])}></div> 
<div className={classnames(['title',{ size:  this.state.isShow }])}></div> 
```

