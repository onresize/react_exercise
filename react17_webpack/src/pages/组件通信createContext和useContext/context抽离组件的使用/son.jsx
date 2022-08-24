import React from 'react';
import { firstContext } from './context'
import { secondContext } from './context'

function Son() {
  return (
    <div>
      <firstContext.Consumer>
        {
          data => {
            return (<mark>{data}</mark>)
          }
        }
      </firstContext.Consumer>
      <secondContext.Consumer>
        {
          data => {
            return (<mark>{data}</mark>)
          }
        }
      </secondContext.Consumer>
    </div>
  );
}

export default Son;
