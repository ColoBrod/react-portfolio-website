import React from 'react' 
import './index.css';

class Blockquote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, children } = this.props;
    return (
      <div class={`blockquote blockquote-${type}`}>{children}</div>
    );
  }
}

export default Blockquote;
