import React from 'react';
import Global from 'Global';
import './index.css';
import lc from './locales';

import links from 'links';
import lcLinks from '../Nav/locales';

class Footer extends React.Component {
  static contextType = Global;
  
  render() {
    const { ln } = this.context;
    lc.setLanguage(ln);
    return (
      <div id="footer">
        <a className="footer__logo" href="#">
          {lc.fullName}
        </a>

        <ul className="footer__permalinks">
          { links.section.map(this.renderPermalink) }
        </ul>

        <div className="footer__socials">
          { links.social.map(this.renderSocial) }
        </div>
        <div className="footer__copyright">
          <small>&copy; {lc.fullName}. {lc.copyright}</small>
        </div>

      </div>

    );
  }

  renderPermalink(link, i) {
    return (
      <a key={i} href={"#" + link.id} >{ lcLinks[link.id] }</a>
    );
  }

  renderSocial(item, i) {
    const { id, display, icon, url } = item;
    if (!display) return null;
    return (
      <a key={i} href={url} target="_blank">{ icon.footer }</a>
    );
  }
}

export default Footer;
