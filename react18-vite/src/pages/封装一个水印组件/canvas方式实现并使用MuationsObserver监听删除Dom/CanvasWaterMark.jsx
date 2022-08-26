import * as React from 'react';
import { watermark } from './waterMark'

export default class CanvasWaterMark extends React.Component {
  constructor(props) {
    super(props);

    this.container = null;
  }

  componentDidMount() {
    const { style, ...options } = this.props;
    watermark({
      container: this.container,
      ...options,
    });
  }

  render() {
    const style = {
      position: 'relative',
      ...this.props.style,
    };
    return (
      <div ref={(el) => this.container = el} id="watermark" style={style}>
        {this.props.children}
      </div>
    );
  }
}