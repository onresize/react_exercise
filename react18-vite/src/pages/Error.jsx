import React from 'react'
import errorImg from '../assets/404.webp'

export default function Error() {
  return (
    <>
      <img src={errorImg} alt="" className="errPage" style={{  width: '100%', height: '100vh' }} />
    </>
  )
}
