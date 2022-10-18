import React from 'react';

import './index.css';

import device from 'fn/device-info';



import data from './data';

class Workflow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="workflow">
        <h5>Как я работаю?</h5>
        <h2>Рабочий процесс</h2>

        <div className="container container__workflow">
          { data.map((step, i) => this.renderStep(step, i)) }
        </div>
        

      </section>
    );
  }

  renderStep(step, i) {
    return(
      <article key={i} className="workflow__step">
        <div className="workflow__card-wrapper">
          <WorkflowCard img={step.img} description={step.description} />
        </div>

        <div className="workflow__step-aside">
          <div className="workflow__step-number">{ i+1 }</div>
          <div className="workflow__step-title">{ step.title }</div>
        </div>


        {/*
        <div className="workflow__step-txt">
          <div className="workflow__step-header">
            <div className="workflow__step-number">1</div>
            <div className="workflow__step-title">Обсуждение проекта</div>
          </div>
          <div className="workflow__step-description">
            Ipsum esse fugit maxime harum minus praesentium Culpa quos dolor ipsa ex in Doloribus quas amet repudiandae aut eos quis. Iste repellat consectetur neque harum sunt nesciunt? Repellat exercitationem reiciendis necessitatibus 
          </div>
        </div>
        */}
      </article>
    );
  }
}

class WorkflowCard extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      hover: false,
    };
    this.mouseClick = this.mouseClick.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  // onMouseEnter={this.mouseEnter}
  // onMouseLeave={this.mouseLeave} 

  render() {
    const { hover } = this.state;
    const { description, img } = this.props;
    const styles = {
      backgroundImage: `url(${ img })`,
    }
    return (
      <div 
        onClick={this.mouseClick}
        onMouseEnter={this.mouseEnter} 
        onMouseLeave={this.mouseLeave} 
        className={ `workflow__card ${ hover ? "workflow__card-flip" : "" }` }
      >
        <div styles={styles} className="workflow__card-front">
          {
            img && <img className="workflow__card-img" src={img} alt="" />
          }
          {/*
          <div className="workflow__card-title">
            Обсуждение
          </div>
          */}
        </div>
        <div className="workflow__card-back">
          { description }
        </div>
      </div>
    );
  }

  mouseClick() {
    const { hover } = this.state;
    this.setState({ 
      hover: !hover 
    });
  }

  mouseEnter() {
    if (device.isMobile) return;
    this.setState({
      hover: true
    });
  }
  
  mouseLeave() {
    if (device.isMobile) return;
    this.setState({
      hover: false
    });
  }
}

export default Workflow;
