import React from 'react';
import MediaQuery from 'react-responsive'

import styles from './index.css';

import lc from './locales.js';
import device from 'fn/device-info';

import elements from 'links';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: "#header",
      offsets: null,
    };
    // Explicitly binding this
    this.setOffsets = this.setOffsets.bind(this);
    this.setScreen = this.setScreen.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  render() {
    const { ln } = this.props;
    lc.setLanguage(ln);
    const { activeNav } = this.state;
    return (
      <nav>
        {
          elements.section.map((el, i) => {
            return(
              <NavElement 
                id={el.id} 
                icon={el.icon} 
                media={el.media}
                key={i} 
                isActive={ activeNav == `#${el.id}` ? "active" : "" } 
              />
            );
          })
        }
      </nav>
    );
  }

  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
    document.addEventListener("dom-offsets", this.setOffsets);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
    document.removeEventListener("dom-offsets", this.setOffsets);
  }

  setOffsets(e) {
    this.setState({
      offsets: e.detail,
    });
  }

  setScreen(id) {
    this.setState({
      activeNav: id
    });
  }

  handleScroll(event) {
    const { offsets } = this.state;
    const { scrollY } = window;
    if (!offsets) return;

    for (let i = 0; i < offsets.length; i++) {
      const curSection = offsets[i];
      const nextSection = offsets[i+1];
      const gap = 200;
      let activeNav;
      if (
        !nextSection ||
        (scrollY >= curSection.offset - gap && scrollY < nextSection.offset - gap)
      ) {
        activeNav = `#${curSection.id}`;
        if (this.state.activeNav != activeNav) this.setState({ activeNav });
        break;
      }
    }
  }
}

class NavElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  render() {
    const { id, isActive, icon, media } = this.props;
    return(
      <MediaQuery minWidth={media}>
        <a 
          ref="a"
          href={ `#${id}` } 
          className={ isActive }
          onClick={this.handleMouseClick}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          { icon }
        </a>
      </MediaQuery>
    );
  }

  handleMouseClick() {
  }

  handleMouseEnter() {
    if (device.isMobile) return;
    const element = this.refs.a;
    const rect = element.getBoundingClientRect();
    let { x, y, width, height } = rect;
    const { id } = this.props;
    const name = lc[id];
    x = Math.round(x);
    y = Math.round(y);
    width = Math.round(width);
    height = Math.round(height);
    const eventMouseEnter = new CustomEvent('mouseEnter', { detail: { x, y, width, height, content: name } });
    document.dispatchEvent(eventMouseEnter);
  }

  handleMouseLeave() {
    if (device.isMobile) return;
    const eventMouseLeave = new Event('mouseLeave');
    document.dispatchEvent(eventMouseLeave);
  }
}

export default Nav;
