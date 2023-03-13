import {FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const social = [

  { id: 1,
    name: "LinkedIn",
    "icon": <FaLinkedin size={30} />,
    "url": "https://linkedin.com"
  },
  { id: 2,
    name: "Github",
    "icon": <FaGithub size={30} />,
    "url": "https://github.com/sophie-senge"
  },
  { id: 3,
    name: "email",
    "icon": <HiOutlineMail size={30} />,
   "url": "mailto:sophieperks@gmail.com"
  },
 

];

export default social;