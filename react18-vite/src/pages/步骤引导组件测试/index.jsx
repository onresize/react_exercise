import React from 'react'
import { Button } from 'antd'
import { useTour } from '@reactour/tour'
// import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import steps from "./steps";

// 演示： 
// https://reactour.js.org/
// https://reactour.vercel.app/#popover
export default function MyTour() {
  const { setIsOpen } = useTour()

  return (
    <>
      <h2 className="first-step">
        FIXEME: 待实现
      </h2>
      <Button onClick={() => setIsOpen(true)}>Open Tour</Button>
    </>
  )
}