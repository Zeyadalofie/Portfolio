import { MeshPhongMaterial } from 'three';
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    Python,
    tailwind,
    nodejs,
    sql,
    git,
    r,
    c,
    SWM,
    threejs,
    uni_logo,
    my_self,
    java,
    php
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Science",
      icon: web,
    },
    {
      title: "Nerual network",
      icon: mobile,
    },
    {
      title: "machine learing",
      icon: backend,
    },
    {
      title: "AI",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "C++",
      icon: c,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Python",
      icon: Python,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "R",
      icon: r,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "PHP",
      icon: php
    }
  ];
  
  const experiences = [
    {
      title: "Graduation Project (SWM)",
      company_name: "Taibahu",
      icon: uni_logo,
      iconBg: "#383E56",
      date: "October 2023 - June 2024",
      points: [
        "Working on the connection between the database and the website.",
        "Working on the database.",
        "Working on the backends.",
      ],
    },
    {
      title: "This Portfolio",
      company_name: "My self",
      icon: my_self,
      iconBg: "#E6DEDD",
      date: "October 2024 - October 2024",
      points: [
        "Developing and maintaining This portfolio using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Design the 3D model and load it into the site",
      ],
    },
  ];
  
  const testimonials = [
    {
    testimonial: "keep going Zeyad Alofie",
    name: "Yazedd",
    designation: "Business Analyst at Intelligent Business",
    company: "IB Tech"
    }
  ];
  
  const projects = [
    {
      name: "Study with me (SWM)",
      description:
        "Web-based platform that allows Teacher react to the student and test them and uplaod there marks on the site.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "PHP",
          color: "pink-text-gradient",
        },
        {
          name: "mySQL",
          color: "blue-text-gradient"
        },
      ],
      image: SWM,
      source_code_link: "https://github.com/Zeyadalofie/Graduation-project",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };