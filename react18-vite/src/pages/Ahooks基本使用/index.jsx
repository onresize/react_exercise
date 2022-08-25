import React, { Fragment } from 'react'
import GetRandName from './useReauestHook'
import ChangeName from './changeName'


export default () => {
  return (
    <Fragment>
      <h2> <b>ahooks基本使用: npm install --save ahooks</b> </h2>
      <h3 className="bg-yellow-500/50 p-1 text-[#fff]"><b>useRequest</b></h3>
      <div className="border-4 border-dashed border-yellow-500 rounded-xl mt-4 p-3">
        <GetRandName></GetRandName>
        <hr className="mt-3 mb-3" />
        <ChangeName></ChangeName>
      </div>
    </Fragment>
  )
}