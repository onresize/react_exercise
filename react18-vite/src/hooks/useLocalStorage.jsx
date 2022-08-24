import { useState, useEffect } from 'react';

function useLocalStorage(key, defaultVal) {
  const [message, setMessage] = useState(defaultVal)

  // 每次只要 message变化 就会自动同步到本地
  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])

  return [message, setMessage]
}

export { useLocalStorage } 