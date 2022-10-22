import React from 'react';
import './index.css';

import lc from './locales.js';

class ToolTip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      display: "none",
      // По задумке указывает, с какой стороны находится сноска
      // Не реализованно
      arrow: "bottom",
      x: 0,
      y: 0,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    document.addEventListener('mouseEnter', this.show);
    document.addEventListener('mouseLeave', this.hide);
  }

  render() {
    const { content, display, x, y } = this.state;
    const style = {
      left: x,
      top: y,
      display: display,
    }
    return (
      <div className="tooltip" style={ style } >
        <div className="tooltip__box">
          { content }
        </div>
        <div className="tooltip__arrow"></div>
      </div>
    );
  }

  componentWillUnmount() {
    document.removeEventListener('mouseEnter', this.show);
    document.removeEventListener('mouseLeave', this.hide);
  }

  show(e) {
    const { x, y, width, height, content } = e.detail;
    this.setState({
      content, 
      // x: x + Math.round(width/2), 
      x: x +15, 
      y: y - height,
      display: "block"

    });
  }

  hide() {
    this.setState({
      display: "none"
    });
  }
}

export default ToolTip;
