import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
} from "react-icons/fa";
 import {BiLogoJavascript} from "react-icons/bi";
 import {SiExpress, SiMongodb, SiMysql, SiWebpack} from "react-icons/si";
 import {
    VscVscode,
    VscCommentUnresolved,  
    VscTerminalPowershell,
 } from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6"; 
import { MdGroups3 } from "react-icons/md";
// import PROJECT_IMG_1 from "../assets/ images/project-1.png"; 
// import PROJECT_IMG_2 from ". /assets/images/project-2.png"; 
// import PROJECT_IMG_3 from "../assets/images/project-3.png";
// import PROJECT_IMG_4 from ". /assets/images/project-4.png"; 
// import PROJECT_IMG_5 from ". /assets/images/project-5.png";
// import PROJECT_IMG_6 from " ../assets/images/project-6.png";

export const MENU_LINKS = [
  { id: "01", label: "Home", to: "/" },
  { id: "02", label: "Education", to: "/education" },
  { id: "03", label: "Experience", to: "/experience" },
  { id: "04", label: "Overview", to: "/overview" },
  { id: "05", label: "Skills", to: "/skills" },
  { id: "06", label: "Projects", to: "/projects" },
  { id: "07", label: "Contact", to: "/contact" },
];

export const STATS = [
{ id: "01", count: "10", label: 'Years of \nExperience'},
{ id: "02", count: "12" , label:  'Certifications \nEarned' },
{ id: "03", count: "43" , label:   'Projects \nCompleted ' },
];

export const SKILLS_TABS = [
    { id: "01", label: "All", value: "all",},
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "03", label: "Tools", value: "tools"},
    { id: "04", label: "Skills", value: "skills"},
    ];
    

export const SKILLS = [
    {
    id: "01",
    icon: FaReact, 
    skill: "React JS", 
    progress: 95, 
    type: "frontend", 
    description:
    "Experienced in building scalable, component-driven web applications using React.js"
    },

    {
    id: "02",
    icon: FaHtml5,
    skill: "HTML",
    progress: 99,
    type: "frontend",
    description:
    "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization."
    },

    {
    id: "03",
    icon: FaCss3, 
    skill: "CSS", 
    progress: 65, 
    type: "frontend",
    description:
    "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like"
    },
    {
        id: "04",
        icon: BiLogoJavascript, 
        skill: "javascript", 
        progress: 88, 
        type: "frontend", 
        description:
        "Experienced in building scalable, component-driven web applications using React.js"
        },
    
        {
        id: "05",
        icon: FaNodeJs,
        skill: "Node.js",
        progress: 95,
        type: "backend",
        description:
        "Expert in structuring web content with semantic HTML, ensuring accessibility and SEO optimization."
        },
    
        {
        id: "06",
        icon: SiExpress, 
        skill: "Express.js", 
        progress: 98, 
        type: "backend",
        description:
        "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like"
        },
        {
            id: "07",
            icon: SiMongodb, 
            skill: "MongoDB", 
            progress: 75, 
            type: "backend",
            description:
            "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like"
            },
            {
                id: "08",
                icon: SiMysql, 
                skill: "SQL", 
                progress: 90, 
                type: "backend",
                description:
                "Proficient in designing visually appealing and responsive layouts using CSS and pre-processors like"
                },
            ];

            export const ABOUT_ME = {
            content:`I'm a passionate Frontend Developer with a strong foundation in building responsive, user-friendly, and visually appealing web applications. My journey in web development started with a simple curiosity—how does the web work? That curiosity quickly turned into a deep passion for crafting seamless digital experiences.

Over time, I’ve honed my skills in modern frontend technologies, focusing on creating intuitive interfaces that enhance user engagement. I thrive on problem-solving, continuously learning, and staying up to date with the latest trends in web development. Whether it’s optimizing performance, ensuring accessibility, or implementing cutting-edge designs, I strive to deliver high-quality solutions that leave a lasting impact.`,
            socialLinks: [
            {id: "01", label: "Facebook", icon: FaFacebook, link: "#" },
            {id: "02", label: "Instagram", icon: FaInstagram, link: "#" },
            {id: "03", label: "Twitter", icon: FaXTwitter, link: "#" },
            {id: "04", label: "LinkedIn", icon: FaLinkedin, link: "#" },
            ],
            email: "d.d@sample.com", phone: "+1 (123) 456-7890",
            website: "https://ddddd.com",

            };

            export const PROJECTS = [
                {
                  id: 1,
                  title: "E-Commerce Website Using React and Firebase",
                  // image: PROJECT_IMG_1, 
                  tags: ["React", "Firebase", "Tailwind CSS"],
                },
                {
                  id: 2,
                  title: "Task Management App | Full-Stack MERN Project",
                  // image: PROJECT_IMG_2, 
                  tags: ["MongoDB", "Express", "React", "Node.js"],
                },
                {
                  id: 3,
                  title: "Weather App Using OpenWeather API & React",
                  // image: PROJECT_IMG_3, 
                  tags: ["React", "API Integration", "CSS"],
                },
                {
                  id: 4,
                  title: "Portfolio Website Using React JS and Tailwind CSS | Portfolio Website in React.Js",
                  // image: PROJECT_IMG_4, 
                  tags: ["React", "Tailwind CSS"],
                },
                {
                  id: 5,
                  title: "Real-Time Chat Application Using Socket.io & Node.js",
                  // image: PROJECT_IMG_5, 
                  tags: ["Node.js", "Socket.io", "Express"],
                },
                {
                  id: 6,
                  title: "AI-Powered Blog Generator Using Next.js & OpenAI API",
                  // image: PROJECT_IMG_6, 
                  tags: ["Next.js", "OpenAI API", "Tailwind CSS"],
                },
              ];

