import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  // {
  //   title: "Frontend Developer",
  //   icon: <FrontendIcon />,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: <BackendIcon />,
  // },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },

  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: "/assets/tech/html5.svg",
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: "/assets/tech/css3.svg",
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: "/assets/tech/javascript.svg",
      link: "https://262.ecma-international.org/",
    },
  
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
   
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: "/assets/tech/nextjs.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: "/assets/tech/tailwindcss.svg",
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: "/assets/tech/expressjs.png",
      link: "https://expressjs.com/",
    },
    
  ],
  libraries: [
    // {
    //   name: "React",
    //   icon: "/assets/tech/react.svg",
    //   link: "https://react.dev/",
    // },
    
    // {
    //   name: "Styled-Components",
    //   icon: "/assets/tech/styled-components.png",
    //   link: "https://styled-components.com/",
    // },
    // {
    //   name: "Framer-motion",
    //   icon: "/assets/tech/framer.svg",
    //   link: "https://www.framer.com/motion/",
    // },
    // {
    //   name: "Zustand",
    //   icon: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
    //   link: "https://zustand-demo.pmnd.rs",
    // },
    // {
    //   name: "Redux/Redux-toolkit",
    //   icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    //   link: "https://redux.js.org",
    // },
    // {
    //   name: "NextAuth.js",
    //   icon: "/assets/tech/nextauthjs.png",
    //   link: "https://next-auth.js.org/",
    // },
    // {
    //   name: "Prisma",
    //   icon: "/assets/tech/prisma.svg",
    //   link: "https://www.prisma.io/",
    // },



    {
  name: "React",
  icon: "/assets/tech/react.svg",
  link: "https://react.dev/",
},
{
  name: "Redux Toolkit",
  icon: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
  link: "https://redux-toolkit.js.org/",
},
{
  name: "Framer Motion",
  icon: "/assets/tech/framer.svg",
  link: "https://www.framer.com/motion/",
},

  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    // {
    //   name: "Figma",
    //   icon: "/assets/tech/figma.svg",
    //   link: "https://www.figma.com/",
    // },
    // {
    //   name: "Docker",
    //   icon: "/assets/tech/docker.svg",
    //   link: "https://www.docker.com/",
    // },
  ],
  environments: [
    {
      name: "Node.js",
      icon: "/assets/tech/nodejs.svg",
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    {
      name: "PostgreSQL",
      icon: "/assets/tech/postgresql.png",
      link: "https://www.postgresql.org",
    },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },

  ],
};

const experiences = [
  {
  title: "Full Stack Developer Intern",
  company_name: "iNeuron Intelligence Pvt. Ltd.",
icon: "/assets/company/ineuron.png",
  iconBg: "#E6DEDD",
  date: "May 2025 – July 2025",
  points: [
    "Designed and developed full-stack web application features using React.js and Node.js with Express.js.",
    "Implemented secure RESTful APIs for authentication, data management, and business logic.",
    "Integrated MongoDB-based CRUD operations and optimized backend performance.",
    "Collaborated in an agile environment using Git, GitHub, and Postman.",
  ],
},
{
  title: "Full Stack Development Trainee",
  company_name: "PS Softech Pvt. Ltd.",
  icon: "/assets/company/pssoftech.png",
  iconBg: "#E6DEDD",
  date: "2024",
  points: [
    "Completed hands-on training in full-stack web development using React.js and Next.js.",
    "Built responsive frontend interfaces and integrated backend services with Node.js and Express.js.",
    "Worked with MySQL and MongoDB databases for data-driven applications.",
  ],
},
];
//////////????????????

 const testimonials = [ 
  { testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.", name: "Sara Lee", designation: "CFO", company: "Acme Co", image: "https://randomuser.me/api/portraits/women/4.jpg", }, 
  { testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.", name: "Chris Brown", designation: "COO", company: "DEF Corp", image: "https://randomuser.me/api/portraits/men/5.jpg", }, 
  { testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!", name: "Lisa Wang", designation: "CTO", company: "456 Enterprises", image: "https://randomuser.me/api/portraits/women/6.jpg", }, ];

const projects = [
{
  name: "Mini Loan Application – Loan Management System",
  description:
    "Mini Loan Application is a full-stack loan management web application that supports role-based access (User/Admin) with JWT authentication. It enables users to apply for loans, admins to approve or reject requests, and tracks repayments with secure database persistence.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "node.js",
      color: "green-text-gradient",
    },
    {
      name: "express.js",
      color: "pink-text-gradient",
    },
    {
      name: "mongodb",
      color: "orange-text-gradient",
    },
    {
      name: "jwt",
      color: "yellow-text-gradient",
    },
    {
      name: "TailwindCSS, Scss",
      color: "white-text-gradient",
    },
  ],
  // image: "",
  source_code_link: "https://github.com/ishika61/Mini-Loan-App.git",
  deployed_link: " https://mini-loan-webapp.vercel.app",
},

{
  name: "AI Code Reviewer",
  description:
    "AI Code Reviewer is an AI-powered web application that analyzes source code and provides real-time feedback, best-practice suggestions, and syntax improvements using the Gemini Generative AI API.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "node.js",
      color: "green-text-gradient",
    },
    {
      name: "express.js",
      color: "pink-text-gradient",
    },
    {
      name: "gemini-api",
      color: "orange-text-gradient",
    },
  ],
  // image: "/assets/projects/code-reviewer.png",
  source_code_link: "https://github.com/ishika61/code_review",
},


];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/ishika61",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/ishika-savita-603293293/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "",
  },
  {
    id: "instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/_ishikaaa__10/",
  },
];

const heroTexts = [
  "Full Stack Developer",
  500,
  "MERN Stack Developer",
  500,
  "React & Node.js Developer",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
