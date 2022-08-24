import { Divider } from 'antd';
import React from 'react';
import Child from './child'
import Child1 from './child1'

function RenderProps() {
  return (
    <>
      <h2>
        组件复用render-Props方式基本使用 (滑动鼠标测试)
      </h2>

      {/* XXX子组件1上使用复用组件 */}
      <b>Child1上使用复用组件</b>
      <Child1 />

      {/* XXX子组件上使用复用组件 */}
      <Child />
    </>
  );
}

export default RenderProps;
