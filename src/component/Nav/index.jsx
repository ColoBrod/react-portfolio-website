import React from 'react';
import './index.css';

// Icons
import { 
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai';
import {
  BiBook,
  BiMessageSquareDetail
} from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';

import lc from './locales.js';


class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: "#header"
    };
    // Explicitly binding this
    this.setScreen = this.setScreen.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  render() {
    const { ln } = this.props;
    lc.setLanguage(ln);
    const { activeNav } = this.state;
    const element = [
      { id: "#header", icon: <AiOutlineHome />, name: lc.header },
      { id: "#about", icon: <AiOutlineUser />, name: lc.about },
      { id: "#experience", icon: <BiBook />, name: lc.experience },
      { id: "#portfolio", icon: <CgWebsite />, name: lc.portfolio },
      { id: "#services", icon: <RiServiceLine />, name: lc.services },
      { id: "#contacts", icon: <BiMessageSquareDetail />, name: lc.contacts },
    ];
    return (
      <nav>
        {
          element.map((el, i) => {
            return(
              <NavElement 
                id={el.id} 
                icon={el.icon} 
                name={el.name}
                key={i} 
                isActive={ activeNav == el.id ? "active" : "" }
              />
            );
          })
        }
      </nav>
    );
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      this.handleScroll, 
      { 
        root: null,
        rootMargin: '0px',
        threshold: 0.75
      }
    );
    const section = [
      "header", 
      "about", 
      "experience", 
      "portfolio",
      "services",
      "testimonials",
      "contacts",
      "footer",
    ];
    section.forEach((id) => {
      const element = document.getElementById(id);
      observer.observe(element);
    });
  }

  setScreen(id) {
    this.setState({
      activeNav: id
    });
  }

  handleScroll(entry, observer) {
    const { intersectionRatio, target } = entry[0];
    const { id } = target;
    if (entry[0].intersectionRatio >= 0.75) {
      this.setState({
        activeNav: `#${id}`
      });
    }
  }
}

class NavElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  render() {
    const { id, isActive, icon } = this.props;
    return(
      <a 
        ref="a"
        href={ id } 
        className={ isActive }
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        { icon }
      </a>
    );
  }


  handleMouseEnter() {
    const element = this.refs.a;
    const rect = element.getBoundingClientRect();
    let { x, y, width, height } = rect;
    const { name } = this.props;
    x = Math.round(x);
    y = Math.round(y);
    width = Math.round(width);
    height = Math.round(height);
    const eventMouseEnter = new CustomEvent('mouseEnter', { detail: { x, y, width, height, content: name } });
    document.dispatchEvent(eventMouseEnter);
  }

  handleMouseLeave() {
    const eventMouseLeave = new Event('mouseLeave');
    document.dispatchEvent(eventMouseLeave);
  }
}

export default Nav;
