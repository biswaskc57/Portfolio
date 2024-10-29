
import express from "./assets/express.png";
import js from "./assets/js.png";
import mysql from "./assets/mysql.png";
import postgres from "./assets/postgers.png";
import python from "./assets/python.png";
import react from "./assets/react-native.png";
import node from "./assets/node-js.png";
import redux from "./assets/redux.png";
import tailwind from "./assets/tailwind.png";
import ts from "./assets/ts.png";
import kotlin from "./assets/kotlin.jpg";
import java from "./assets/java.jpg";
import cPlus from "./assets/c-plus.png";

// Define a TypeScript interface for each navigation link
export interface NavItem {
    id: string;
    label: string;
    icon: string;
  }

export interface Project {
    name: string;
    url: string;
    description: string;
    link: string;
    stacks: string[];
  }
  
  
// Apply the NavLink[] type to ensure each item in the array matches the interface
export const navItems: NavItem[] = [
  { id: "intro", label: "Home", icon: "fa-home" },
  { id: "about", label: "About", icon: "fa-user" },
  { id: "projects", label: "Projects", icon: "fa-diagram-project" },
  { id: "experience", label: "Experience", icon: "fa-briefcase" },
  { id: "contact", label: "Contact", icon: "fa-address-card" },
];

export const skills = [
  { name: "TypeScript", url: ts },
  { name: "Node.js", url: node },
  { name: "Tailwind CSS", url: tailwind },
  { name: "Redux", url: redux },
  { name: "React Native", url: react },
  { name: "Postgres", url: postgres },
  { name: "JavaScript", url: js },
  { name: "Kotlin", url: kotlin },
  { name: "Express", url: express },
  { name: "MySQL", url: mysql },
  { name: "Python", url: python },
  { name: "Java", url: java },
  { name: "C++", url: cPlus },
  // { name: "Robot Framework", url: robot },
];



export const projects: Project [] = [
  {
    name: "Personal Trainer Web-App",
    url: "../../assets/exerciseBuddy.png",
    description: "A web application for personal trainers to manage clients and workouts.",
    link: "https://biswas-personal-trainer.herokuapp.com/",
    stacks: ["Java", "Springboot"],
  },
  {
    name: "Phonebook",
    url: "assets/Phonebook.png",
    description: "A phonebook application to save and manage contacts.",
    link: "https://biswas-phonebook.herokuapp.com/",
    stacks: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "Blog App",
    url: "assets/BlogApp.png",
    description: "A blogging platform where users can post and share blogs.",
    link: "https://bloglist-biswas.herokuapp.com/",
    stacks: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    name: "CountryList",
    url: "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    description: "An app that provides information about different countries.",
    link: "",
    stacks: ["React", "API Integration"],
  },
  {
    name: "Weather Web App",
    url: "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    description: "An application that shows weather information for cities.",
    link: "",
    stacks: ["React", "JavaScript", "API Integration"],
  },
  {
    name: "3 UAS Chatbot",
    url: "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    description: "A chatbot designed for educational institutions.",
    link: "",
    stacks: ["Java", "AI/ML", "NLP"],
  },
  {
    name: "Haaga-helia Mobile App",
    url: "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    description: "A mobile app designed for Haaga-helia university.",
    link: "",
    stacks: ["Design", "UI/UX"],
  }
];

