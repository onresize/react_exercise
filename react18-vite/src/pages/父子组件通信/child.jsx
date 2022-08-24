import React from 'react';
// 使用校验、安装: npm i prop-types
import PropTypes from 'prop-types'

function ChildCom(props) {
  console.log('props.children:', props.children);
  return (
    <>
      {/*XXX 通过props.children拿到 父组件中 child组件下嵌套的内容 */}
      接收父组件传的参数：<h2 style={{ display: 'inline-block' }}>{props.name}--{props.age}--{props.children.props.hobby}</h2>
      <mark>通过props.children拿到 父组件中 child组件下嵌套的内容</mark>
      <button onClick={() => props.ddd('1', '2')}>子组件Child传参给父组件</button>
    </>
  );
}

// 规定props类型
ChildCom.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  ddd: PropTypes.func.isRequired, // 函数、必选(没有设置默认值时会报错)
}
// 规定props默认值
ChildCom.defaultProps = {
  name: 'zs',
  age: 20,
}

export default ChildCom;
