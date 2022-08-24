import React from 'react'
import { useTour } from '@reactour/tour'
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import steps from "./steps";

// 演示： 
// https://reactour.js.org/
// https://reactour.vercel.app/#popover
export default function MyTour() {
  const { setIsOpen } = useTour()

  return (
    <>
      <p className="first-step">
        FIXEME: 待实现
      </p>
      <button onClick={() => setIsOpen(true)}>Open Tour</button>
    </>
  )
}