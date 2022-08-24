import { useRequest } from 'ahooks'
import Mock from 'mockjs';

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'))
    }, 1000)
  })
}


export default () => {
  const { data, error, loading } = useRequest(getName)
  let rDom = null

  if (error) {
    rDom = <h2>加载失败...</h2>
  }
  if (loading) {
    rDom = <h2>loading...</h2>
  }
  if (data) {
    rDom = <h2>姓名： {data}</h2>
  }
  return (
    <>
      <h3><u>实现：MockJs随机获取一个异步的函数返回的姓名</u></h3>
      {rDom}
    </>
  )
}