// Icons
import { AiOutlineHome, AiOutlineUser, AiOutlineDollar, AiOutlineStar } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { CgWebsite } from 'react-icons/cg';
import { BsCode } from 'react-icons/bs';

// Socials - Header
import { FaFacebookF, FaTelegram, FaTelegramPlane } from 'react-icons/fa';
import { AiFillGithub, AiOutlineWhatsApp } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
// Socials - Footer

const link = {
  social: [
    {
      id: "telegram",
      display: true,
      // name: "Telegram",
      icon: {
        header: <FaTelegram />,
        footer: <FaTelegramPlane />,
      },
      url: "https://t.me/colobrod",
    },
    {
      id: "whatsapp",
      display: true,
      // name: "Telegram",
      icon: {
        header: <AiOutlineWhatsApp />,
        footer: <AiOutlineWhatsApp />,
      },
      url: "https://api.whatsapp.com/send?phone=89201922392",
    },
    {
      id: "github",
      display: true,
      icon: {
        header: <AiFillGithub />,
        footer: <FiGithub />,
      },
      url: "https://github.com/ColoBrod",
    },
  ],
  section: [
    { id: "header", icon: <AiOutlineHome />, media: 350 },
    { id: "about", icon: <AiOutlineUser />, media: 300 },
    { id: "portfolio", icon: <CgWebsite />, media: 300 },
    { id: "experience", icon: <BiBook />, media: 300 },
    { id: "workflow", icon: <BsCode />, media: 470 },
    // { id: "services", icon: <RiServiceLine />, media: 700 },
    { id: "testimonials", icon: <AiOutlineStar />, media: 410 },
    { id: "contacts", icon: <BiMessageSquareDetail />, media: 300 },
    // { id: "payment-details", icon: <AiOutlineDollar />, media: 1024 },
  ],
};

export default link;
