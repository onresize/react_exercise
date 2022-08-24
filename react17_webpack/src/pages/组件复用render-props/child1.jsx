import React from 'react'
import Mousemove from './mouse'

export default function child1() {
  return (
    <>
      <Mousemove show={(x, y) => {
        return (
          <div>
            <h3>
              <mark>x: {x}---y: {y}</mark>
            </h3>
          </div>
        )
      }} />
    </>
  )
}
