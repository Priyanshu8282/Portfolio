
import {
    education,
    experience,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
   readybytes,
   codeclause,
   resume,
   certificate,
   food,
  threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",

    },
    {
      id: "project",
      title: "projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Experience",
      subtitle:"Full Stack Development",
      icon: experience,
    },

    {
      title: "Education",
      subtitle:"Bachelor of Technology (IT)",
      icon: education, 
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Readybytes",
      icon: readybytes,
      iconBg: "#383E56",
      date: "July 2024 - Sept 2024",
      points: [
        "Built dynamic, responsive web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js), handling both frontend and backend development.",
        "Integrated APIs and implemented full-stack features, focusing on user-friendly design, data management, and performance optimization.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Codeclause",
      icon: codeclause,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Designed and developed responsive, user-friendly interfaces using HTML, CSS, and JavaScript, with a focus on enhancing user experience.",
        "Collaborated with the backend team to integrate APIs, ensuring smooth data flow and dynamic rendering on the frontend.",
      ],
    },
    
  ];
  
 
  const projects = [
    {
      name: "Resume Maker",
      description:
        "Resume Maker is a web application that enables users to create professional resumes effortlessly using customizable templates. With real-time previews, profile picture uploads, and PDF export features, users can generate polished resumes tailored to their needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "red-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: resume,
      source_code_link: "https://github.com/Priyanshu8282/Resume-Maker.git",
      live_demo_link: "https://resume-maker-teal-zeta.vercel.app"

    },
    {
      name: "Certificate Generator",
      description:
        "Developed a tool that automates the generation of certificates by reading participant details from a CSV file and populating a predefined certificate template.Implemented logic to dynamically insert names, event details, and dates onto the certificates, which can be easily downloaded as PDFs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "red-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
       
      ],
      image: certificate,
      source_code_link: "https://github.com/Priyanshu8282/Certificate-Generator.git",
      live_demo_link: "https://certificate-generator-frontend.onrender.com"
    },
    {
      name: "Food delivery",
      description:
        "Developed a full-stack food delivery platform that allows users to browse menus, place orders, and track deliveries in real-time.Integrated features like user authentication, cart management, and payment gateway, ensuring a seamless and responsive user experience across devices.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "node.js",
          color: "red-text-gradient",
        },
        {
          name: "express.js",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/Priyanshu8282/Food-delivery.git",
      live_demo_link: "https://food-delivery-frontend-2go0.onrender.com"
    },
  ];
  
  export { services, technologies, experiences, projects };