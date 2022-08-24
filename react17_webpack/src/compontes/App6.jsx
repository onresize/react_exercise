import React from 'react'
import { connect } from 'react-redux'

function App6(props) {
  return (
    <>
      <h2>redux拿到state中的数字：{props.num}</h2>
      <button onClick={() => props.leijia()}>累加2</button>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    num: state.num
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    leijia() {
      const action = { type: 'addNum', val: 2 }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App6)

