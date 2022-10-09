import React from 'react';

import './index.css';

const isMobile = 
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i) ? true : false;


class Workflow extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section id="workflow">
        <h5>Как я работаю?</h5>
        <h2>Рабочий процесс</h2>
        
        { this.renderStep() }
        { this.renderStep() }

      </section>
    );
  }

  renderStep() {
    return(
      <article className="workflow__step">
        <div className="workflow__card-wrapper">
          <WorkflowCard />
        </div>

        <div className="workflow__step-aside">
          <div className="workflow__step-number">1</div>
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
    return (
      <div 
        onClick={this.mouseClick}
        onMouseEnter={this.mouseEnter} 
        onMouseLeave={this.mouseLeave} 
        className={ `workflow__card ${ hover ? "workflow__card-flip" : "" }` }
      >
        <div className="workflow__card-front">
          <div className="workflow__card-title">
            Обсуждение
          </div>
        </div>
        <div className="workflow__card-back">
          Обсуждаем ваш проект. Устно или письменно. При необходимости используем Teamviewer или другую программу для демонстрации экрана. Я делаю делаю для себя пометки.
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
    if (isMobile) return;
    this.setState({
      hover: true
    });
  }
  
  mouseLeave() {
    if (isMobile) return;
    this.setState({
      hover: false
    });
  }
}

export default Workflow;
