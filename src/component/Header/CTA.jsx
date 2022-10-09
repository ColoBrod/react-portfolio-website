import React from 'react';
import CV from '../../assets/cv.txt';

class CTA extends React.Component {
  render() {
    return (
      <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contacts" className="btn btn-primary">Let's talk</a>
      </div>
    );
  }
}

export default CTA;
