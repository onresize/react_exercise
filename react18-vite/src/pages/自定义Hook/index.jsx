import React, { useEffect } from 'react';
import { useTimer } from './useTimer'

export default function CustomHook() {
  const [count] = useTimer(10);

  return (
    <>
      <h2>自定义useTimer倒计时Hook</h2>
      <h2>{count}</h2>
    </>
  );
}

