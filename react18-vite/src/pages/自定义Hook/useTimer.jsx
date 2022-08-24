import React, { useState, useEffect, useRef } from 'react';

export function useTimer(start) {
  const [count, setCount] = useState(start)
  const timerRef = useRef()

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((c) => c - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    count === 0 && clearInterval(timerRef.current)
  }, [count])

  useEffect(() => {
    // 相当于挂载生命生命周期
    return () => {
      // 相当于类组件的销毁生命周期
      clearInterval(timerRef.current)
    }
  }, [])

  return [count]
}

