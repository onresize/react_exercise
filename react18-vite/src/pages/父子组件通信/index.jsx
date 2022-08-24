import React from 'react';
import Child from './child';
import GrandSon from './GrandSon';

function FatherCom() {
  const getChildState = (a, b) => {
    console.log('获取到子组件传递的参数：', a, b);
  }
  return (
    <>
      <h2>父子组件通信基础</h2>
      <Child name="小明" age={18} ddd={getChildState}>
        {/* 这里可以传（文本、react元素、组件、函数）子组件通过props.children可以获取到 */}
        <GrandSon hobby="玩游戏啊"></GrandSon>
      </Child>
    </>
  );
}

export default FatherCom;
