import React, { useReducer } from 'react';
import { Button } from 'antd';

const defaultState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error()
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, defaultState)
  return (
    <>
      <h2>
        UseReducer基本使用
      </h2>
      <h2> Count: {state.count}</h2>
      <Button type="primary" onClick={() => dispatch({ type: 'increment' })}>加</Button>
      <Button onClick={() => dispatch({ type: 'decrement' })}>减</Button>
    </>
  );
}

export default UseReducer;
