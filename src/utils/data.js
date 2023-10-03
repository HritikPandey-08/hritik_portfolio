import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
import { imagePath } from "./paths";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 10,
    icon: HiOutlineDesktopComputer,
    path: imagePath + "website_design.png",
    bg: "#286F6C",
  },
  {
    name: "machine Learning Project",
    projects: 1,
    icon: CiMobile1,
    path: imagePath + "ml.png",
    bg: "#EEC048",
  },
  {
    name: "Mini Projects",
    projects: 12,
    icon: MdWorkspacesOutline,
    path: imagePath + "mini_projects.png",
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finding a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];
export const AboutMe = [
  "I am a proficient developer experienced in various frameworks and languages for web development and machine learning projects. I specialize in creating responsive and dynamic websites using frameworks like Bootstrap and React. On the back end, I utilize languages such as Python, Node.js and PHP along with frameworks like Django and Express.js, to build robust server-side functionalities and APIs. I am passionate about delivering high-quality solutions while staying updated with the latest technologies and industry best practices. With a strong attention to detail and a commitment to continuous improvement, my goal is to create impactful experiences that make a difference in users' lives. I am excited to bring my technical skills, passion, and collaborative spirit to every project I undertake."
]
export const workExp = [
  {
    place: "SkillVertex",
    tenure: "Feb 2023 - May 2023",
    role: "Python Developer",
    detail:
      "I gained practical experience in Python programming during my internship, where I applied my skills for text analysis, including tokenization, stemming, stop word removal, and word counting. Additionally, I developed a Tic Tac Toe game using the Django framework and worked on both static and dynamic websites, expanding my knowledge of web development.",
  },
  {
    place: "Quantiphi",
    tenure: "May 2021 - Sep 2021",
    role: "Data Intern Tagger",
    detail:
      "I effectively utilized labeling and OBS UI visualization tools to tag over 10,000 images for machine learning projects, resulting in a significant 25% improvement in model accuracy. Additionally, I implemented rigorous quality control measures, achieving a remarkable 99% acceptance rate from clients and ensuring 100% accurate data tagging for American insurance clients, contributing to a high level of customer satisfaction.",
  }
];
export const  education = [
  {
    name: "G.N Khalsa College",
    degree: "Master of Science in Computer Science",
    year: "2021-2023",
  },
  {
    name: "G.N Khalsa College",
    degree: "Bachelor of Science in Computer Science",
    year: "2018-2021",
  },
  {
    name: "R.D National College",
    degree: "HSC",
    year: "2018",
  },
  {
    name: "PEHS",
    degree: "SSC",
    year: "2016",
  }
];

export const projects = [
  {
    title: "Ecommerce Backend API",
    year:2023,
    month: "September 2023",
    technology: "Node.js, Express.js, and MongoDB",
    description:
      ` Our E-Commerce Website Backend, powered by Node.js, Express.js, and MongoDB, offers a cutting-edge foundation for your online store. Key features include user authentication, robust validation, streamlined checkout, order and inventory management, secure payment integration, product catalog organization, and more. With scalability, security, and seamless API integration, our backend empowers your e-commerce business while we handle the technical complexities, ensuring a top-notch shopping experience for your customers. Upgrade your online store or launch a new one with our feature-rich, high-performance solution.
      `,
      shortDesc:
      "Our E-Commerce Website Backend, powered by Node.js, Express.js, and MongoDB, delivers a robust foundation for your online store. With comprehensive features including user authentication, validation, seamless checkout, order management, and more, our backend solution ensures a secure, efficient, and scalable platform to drive your e-commerce business.",
      github:
      "https://github.com/HritikPandey-08/myNotes.git"
  },
  {
    title: "Audio Features Extraction",
    year:2023,
    month: "August 2023",
    technology: "Python Django And PostgreSQL",
    description:
      `Our project creates a user-friendly web interface for our audio file detection API. The interface allows the only user to easily upload single or multiple audio files with various extensions. Uploaded files are securely stored in a PostgreSQL database, along with key metadata like upload date, file size, and extension. Users can view their uploads in a clear tabular format and play them directly from the dashboard, enhancing their experience.

      We've also implemented a warning system to ensure responsible usage and system performance. If the total duration of uploaded audio files exceeds 10 minutes, a warning prompts the user to manage their content. This design emphasizes simplicity and user-friendliness, avoiding complex authentication mechanisms and focusing on providing a seamless experience for efficient audio file management.`,
      shortDesc:
      "Create a user-friendly web interface for our audio file detection API project. Users can upload multiple audio files, view their uploads in a tabular format, play the files, and receive a warning if their total duration exceeds 10 minutes. The backend uses PostgreSQL to store file metadata.",
      github:
      "https://github.com/HritikPandey-08/myNotes.git"
  },
  {
    title: "Spam Caller REST API ",
    year:2023,
    month: "August 2023",
    technology: "Python Django And PostgreSQL",
    description:
      `Our project involves developing a production-ready REST API for a mobile app similar to caller ID and contact management apps. Built on the dependable Django framework and utilizing PostgreSQL as the relational database, our API offers essential functionalities.

      Users can register with their name, phone number, and optional email, ensuring uniqueness of phone numbers. It automates importing phone contacts and allows users to manage them. Spam reporting contributes to a global database for spam number identification.
      
      Search functionality enables users to find individuals by name or phone number, with results prioritizing exact name matches. User privacy is upheld, with detailed profiles shown only for registered users in each other's contact lists.
      
      Our secure and efficient API, designed for production use, supports contact management, spam reporting, and user-friendly search capabilities, facilitating seamless integration with the mobile app's front-end.`,
      shortDesc:
      "Create a robust REST API for a mobile app that enables users to identify spam numbers and search for individuals by name or phone number. Built using Django and backed by a PostgreSQL database, this API supports user registration, contact management, and spam reporting, providing essential functionality for the mobile app's front-end.",
      github:
      "https://github.com/HritikPandey-08/myNotes.git"
  },
  {
    title: "myNotes",
    year:2023,
    month: "July 2023",
    technology: "MERN Stack",
    description:
      "Our Notes App is designed with a sleek and intuitive interface, making note-taking a breeze for users of all levels. Users can categorize their notes, set reminders, and easily search through their collections, enabling them to stay organized and focused on their tasks. With the robust MERN stack technology at its core, the app ensures reliable data storage and quick response times, even during peak usage. Whether on the go or at home, users can rely on our Notes App to keep their important information at their fingertips, streamlining their daily routines and boosting productivity.",
      shortDesc:
      "Our Notes App is a user-friendly application built with the MERN stack (MongoDB, Express, React, and Node.js). It allows secure note creation, reading, updating, and deletion. With user login and signup, notes can be managed from any device with seamless synchronization.",
      github:
      "https://github.com/HritikPandey-08/myNotes.git"
  },
  {
    title: "Climato",
    year:2023,
    month: "May 2023",
    technology: "React Js, Open Weather API",
    description:
      "",
      shortDesc:
      "The React.js OpenWeatherAPI Integration project is a dynamic web application built using React.js and powered by the OpenWeatherAPI. With a focus on providing real-time weather information, this project offers a seamless user experience and a visually appealing interface.",
      github:
      "https://github.com/HritikPandey-08/climato.git"
  },
  {
    title: "Sign Language Recognition",
    year:2023,
    month: "Feb 2023 - Mar 2023",
    technology: "Python",
    description:
      "Sign language recognition involves recognizing actions from sign languages.The ML algorithm is trained to recognize specific signs and gestures.The algorithm captures the live video of the user, identifying the signs being made and translating them into text.significantly improve communication between sign language users and non-sign language users,providing equal access to services and information for deaf or hard-of-hearing individuals.",
      shortDesc:
      "Developed an ML algorithm that translates sign language gestures into text, enhancing communication between sign language users and non-sign language users for equal accessibility.",
      github:
      "https://github.com/HritikPandey-08/sign_recognition.git"
  },
  {
    title: "Ecommerce Website",
    year:2021,
    month: "Jan 2021 - Mar 2021",
    technology:
      "Frontend (HTML5, CSS3, JavaScript, jQuery, Ajax, Bootstrap) Backend (PHP, MySQL)",
    description:
      "This e-commerce provides a great user experience to customers. The admin has control of minute details of this e-commerce platform. The use of an instamojo API and secure payment options can potentially help small businesses and entrepreneurs expand their reach and sell their products online .The admin has control of minute details of this e-commerce platform. ",
      shortDesc:
      "Built a fully functional ecommerce website that provides a great user experience to customers. Integrated Instamojo API for secure payment processing, allowing users to browse and purchase products with ease.",
      github:
      "https://github.com/HritikPandey-08/ecommerce_website.git"
  },
  {
    title: "HealthCare Website",
    year:2023,
    month: "Aug 2020 - Sept 2020",
    technology:
      "Frontend (HTML,5 CSS3, JavaScript, Bootstrap) Backend (PHP, MySQL)",
    description:
      "This Healthcare website provides online health consultation and prescription.Have a user, Doctor, and admin dashboard for their convenience.",
      shortDesc:
      "Created a comprehensive healthcare website with online appointment and consultation functionalities. Users can schedule appointments and consult with doctors virtually.",
      github:
      "https://github.com/HritikPandey-08/Updated_e_healthcare.git"
  },
];