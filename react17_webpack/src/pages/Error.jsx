import React from 'react'
import errorImg from '../assets/404.webp'
import './less/errPage.less'

export default function Error() {
  return (
    <>
      <img src={errorImg} alt="" className="errPage" />
    </>
  )
}
