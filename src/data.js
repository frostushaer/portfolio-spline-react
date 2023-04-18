import { IoCodeWorking, IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from "react-icons/io5";
import img1 from "./images/img1.png"
import img2 from "./images/img2.png";

export const Experience = [
  {
    id: 1,
    date: "2020 - present",
    iconsSrc: <IoCodeWorking />,
    title: "Bachelor's in Computer Application",
    location: "TACT, Bhubaneshwar, Odisha",
    description:
      "Currently studying in Trident Academy of Creative technology, Bhubaneshwar",
  },
  {
    id: 2,
    date: "2018 - 20",
    iconsSrc: <IoCodeWorking />,
    title: "Secondary Studies",
    location: "St. Goethals, Pirpainti, Bhagalpur, Bihar",
    description:
      "Completed +2 studies at St. goethals",
  },
  {
    id: 3,
    date: "2008 - 18",
    iconsSrc: <IoCodeWorking />,
    title: "Matriculation",
    location: "DAV, Mathurapur, Bhagalpur",
    description:
      "Completed my boards from DAV",
  },
  {
    id: 4,
    date: "2001 ",
    iconsSrc: <IoCodeWorking />,
    title: "Born",
    location: "Shivnarayanpur, Bhagalpur",
    description:
      "Arrived to this world",
  },
];

export const Projects = [
  {
    id: 1,
    name: "Flutter chat-app",
    imageSrc: img1,
    techs: "Flutter, Firebase",
    github: "#",
  },
  {
    id: 2,
    name: "Flutter ecomm-app",
    imageSrc: img2,
    techs: "Flutter, Firebase",
    github: "#",
  },
  {
    id: 3,
    name: "Virtual tour of Trident Academy Of Technology",
    imageSrc: img1,
    techs: "React, Spline",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconsSrc: (
      <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
    ),
    name: "Github",
    link: "#",
  },
  {
    id: 2,
    iconsSrc: (
      <IoLogoLinkedin className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "#",
  },
  {
    id: 3,
    iconsSrc: (
      <IoLogoGoogle className="text-textBase text-3xl cursor-pointer" />
    ),
    name: "Gmail",
    link: "#",
  },
];