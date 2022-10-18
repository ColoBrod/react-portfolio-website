import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faVk,
  faTelegram,
  faGithub,
  faFacebook,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

import links from 'links';
const { social } = links;

// const items = [
//   { name: "Telegram", icon: faTelegram, href: "https://t.me/colobrod" },
//   { name: "GitHub", icon: faGithub, href: "https://github.com/ColoBrod" },
// ]

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {
        social.map(
          (item, index) => <HeaderSocialsItem key={index} item={item} />
        )
      }
    </div>
  );
}

class HeaderSocialsItem extends React.Component {
  render() {
    const { item } = this.props;
    const { display, icon, url } = item;
    if (!item || !display) return null;
    return (
      <a href={ url } target="_blank">
        { icon.header }
      </a>
    );
  }
}

// const HeaderSocialsItem = () => {
//   const { href, icon } = this.props;
//   return (
//     <a href={ href } target="_blank">
//       <FontAwesomeIcon icon={ icon } />
//     </a>
//   );
// }

export default HeaderSocials;
