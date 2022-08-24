// 创建初始状态
const defaultSate = {
  num: 111
}

// 默认导出允许使用箭头函数会有警告、要么加上下面这行注释、要么导出用function方式
// eslint-disable-next-line
export default (state = defaultSate, action) => {
  // 这里不能直接修改 state中的值、所以用深拷贝
  let newNum = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'addNum':
      newNum.num += action.val
      break;
    default:
      break;
  }
  return newNum
}