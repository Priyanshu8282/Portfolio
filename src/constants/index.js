
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
  threejs,transport,texteditor,weather
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
      title: "Projects",
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
      live_demo_link: "https://resume-maker-1-8vfd.onrender.com"

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
    {
      name: "Transporation Website",
      description:
        "Our Transportation Services Website is a comprehensive platform designed to cater to the logistics and transport needs of businesses and individuals. With a sleek and user-friendly interface, the website offers seamless access to essential information and services, ensuring smooth operations and hassle-free experiences.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "red-text-gradient",
        },
        {
          name: "emailjs",
          color: "green-text-gradient",
        },
      
      ],
      image: transport,
      source_code_link: "https://github.com/Priyanshu8282/Transportation.git",
      live_demo_link: "https://ishan-transport-services.vercel.app"
    },
    {
      name: "Text Editor",
      description:
        "The Text Editor is an intuitive and interactive tool designed for effortless text formatting and editing. It empowers users to easily apply styles such as bold, italic, underline, change text colors, and adjust text alignment. This editor is perfect for creating well-structured documents, writing notes, or drafting content with customizable formatting options.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "red-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      
      ],
      image: texteditor,
      source_code_link: "https://github.com/Priyanshu8282/Text-Editor.git",
      live_demo_link: "https://text-editor-priyanshu.vercel.app "
    },
    {
      name: "Weather Extension",
      description:
        "The Weather Extension is a lightweight and intuitive browser tool that provides users with real-time weather updates and forecasts directly in their browser. Designed for convenience, this extension allows you to quickly check weather conditions for your current location or any selected city without needing to open a separate app or website.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "manifest.json",
          color: "green-text-gradient",
        },
      
      ],
      image: weather,
      source_code_link: "https://github.com/Priyanshu8282/Weather-Extension.git",
      live_demo_link: "https://weather-extension-gilt.vercel.app"
    },
  ];
  
  export { services, technologies, experiences, projects };