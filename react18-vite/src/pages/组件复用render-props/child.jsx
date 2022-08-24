import React from 'react';
import Mousemove from './mouse'

function Child() {
  return (
    <div>
      <b>Child组件上使用复用组件(共用一个组件实现另外一种业务场景)</b>
      <div>
        <Mousemove show={(x, y) => {
          return (
            <img style={{
              position: 'absolute',
              left: (x / 2) + 'px',
              top: (y / 2) + 'px',
            }}
              src="https://files.getquicker.net/_sitefiles/_guides/52593d69-c99a-4367-8b98-08d9a65be47e/2021/11/19/150712_202824_330.gif"
              alt="" />
          )
        }
        } ></Mousemove>
      </div>
    </div>
  );
}

export default Child;
