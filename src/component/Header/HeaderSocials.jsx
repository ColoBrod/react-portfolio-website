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

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://vk.com" target="_blank">
        <FontAwesomeIcon icon={faVk} />
      </a>
      <a href="https://telegram.org" target="_blank">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="https://github.com" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://youtube.com" target="_blank">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  );
}

export default HeaderSocials;
