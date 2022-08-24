import { useState, useEffect } from 'react';

export function useWindowScroll() {
  const [y, setY] = useState(0)

  function getH() {
    const h = document.documentElement.scrollTop
    setY(h)
  }

  // 在滚动发生的时候 不断获取滚动值 然后交给y
  window.addEventListener('scroll', () => {
    getH()
  })

  useEffect(() => {
    return () => {
      // 销毁时 重写getH方法
      getH = () => {
        return false
      }
    }
  })

  return [y]
}
