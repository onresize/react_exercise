import React from 'react';
import './index.css'
// 连接器
import { connect } from 'react-redux';

function ReduxUse(props) {
  return (
    <>
      <h2>
        Redux使用
      </h2>
      <h3>拿到redux store仓库中的num： {props.num}</h3>
      <button onClick={() => props.addNum()}>累加3</button>
      <div className="bgcPic"></div>
    </>
  )
}

const mapStateProps = (state) => ({ num: state.num })

const mapDispatchToProps = (dispatch) => {
  return {
    addNum() {
      dispatch({ type: 'addNum', val: 3 })
    }
  }
}


// export default connect(state映射, dispatch映射)(当前组件名);
export default connect(mapStateProps, mapDispatchToProps)(ReduxUse);
