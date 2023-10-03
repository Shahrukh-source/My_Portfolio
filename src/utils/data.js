import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "React Project",
    projects:   '10+',
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
 

];

export const WhatDoIHelp = [
  `Responsibility will be to create user-friendly and interactive web applications using React.js. This includes designing and implementing components, managing state, and ensuring a responsive and visually appealing UI.
Front-End Development: Work closely with designers and back-end developers to integrate the front-end of the application with the back-end services. This involves making API requests, handling data, and ensuring seamless data flow between the front-end and back-end.
  .`
];

export const workExp = [
 

  {
    place: "Internship",
    tenure: "oct 2022 - Sep 2023",
    Work:"E-COMMERCE WEBSITE",
    detail:
      `Developed a solid understanding of React's component-based architecture and how to create and manage components, including functional components and class components.
      State Management: Managing component state using useState and useEffect hooks, as well as understanding how props work for passing data between components.
      Routing: Experience with React Router or another routing library to handle navigation within single-page applications.
      Styling: Used CSS,Error Handling: Dealing with errors ,  Problem Solving: Developing the ability to troubleshoot issues
      State Management Libraries: Used state management libraries like Redux or Context API 
      API Integration: Experience making API requests, handling responses

      `,

  },
];


export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
