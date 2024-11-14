
import express from "./assets/express.png";
import js from "./assets/js.png";
import mysql from "./assets/mysql.png";
import postgres from "./assets/postgers.png";
import python from "./assets/python.png";
import react from "./assets/react-native.png";
import node from "./assets/node-js.png";
import cypress from "./assets/cypress.png";
import redux from "./assets/redux.png";
import tailwind from "./assets/tailwind.png";
import carshop from "./assets/carshop.jpg";
import ts from "./assets/ts.png";
import kotlin from "./assets/kotlin.jpg";
import java from "./assets/java.jpg";
import cPlus from "./assets/c-plus.png";
import React from "./assets/React-icon.png";
import noPreview from "./assets/noPreview.jpg";
import hhApp from "./assets/hhApp.png";

// Define a TypeScript interface for each navigation link
export interface NavItem {
    id: string;
    label: string;
    icon: string;
  }

export interface Project {
    name: string;
    image: string;
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
  { name: "React", url: React },
  { name: "TypeScript", url: ts },
  { name: "JavaScript", url: js },
  { name: "Cypress", url: cypress},
  { name: "Node.js", url: node },
  { name: "Tailwind CSS", url: tailwind },
  { name: "Redux", url: redux },
  { name: "React Native", url: react },
  { name: "Postgres", url: postgres },
  { name: "Kotlin", url: kotlin },
  { name: "Express", url: express },
  { name: "MySQL", url: mysql },
  { name: "Python", url: python },
  { name: "Java", url: java },
  { name: "C++", url: cPlus },
];

export const projects: Project [] = [
  {
    name: "CarShop",
    image: carshop,
    description: "A web application for personal trainers to manage clients and workouts.",
    link: "https://biswaskc57.github.io/Casrshop/",
    stacks: ["React", "Material UI"],
  },
  {
    name: "Blog App",
    image: noPreview,
    description: "A blogging platform where users can post and share blogs.",
    link: "https://github.com/biswaskc57/Blog-application",
    stacks: ["React", "Node.js", "Express", "MongoDB", "Cypress"],
  },
  {
    name: "Weather Web App",
    image: noPreview,
    description: "An application that shows weather information for cities.",
    link: "https://github.com/biswaskc57/weather-app",
    stacks: ["React", "TypeScript"],
  },
  {
    name: "Haaga-helia Mobile App",
    image: hhApp,
    description: "A mobile app designed for Haaga-helia university.",
    link: "https://www.figma.com/proto/uKbsEmV8CqyM56cYWpKBdg/Prototyping_FinalProject?node-id=11-2&t=vYo9WJ09hXZTyVUl-1",
    stacks: ["Figma", "Design", "UI/UX"],
  }
];


export const countryCodes = [
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+30", name: "Greece", flag: "🇬🇷" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+36", name: "Hungary", flag: "🇭🇺" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+40", name: "Romania", flag: "🇷🇴" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+51", name: "Peru", flag: "🇵🇪" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+53", name: "Cuba", flag: "🇨🇺" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+95", name: "Myanmar", flag: "🇲🇲" },
  { code: "+977", name: "Nepal", flag: "🇳🇵" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+213", name: "Algeria", flag: "🇩🇿" },
  { code: "+216", name: "Tunisia", flag: "🇹🇳" },
  { code: "+218", name: "Libya", flag: "🇱🇾" },
  { code: "+220", name: "Gambia", flag: "🇬🇲" },
  { code: "+221", name: "Senegal", flag: "🇸🇳" },
  { code: "+223", name: "Mali", flag: "🇲🇱" },
  { code: "+224", name: "Guinea", flag: "🇬🇳" },
  { code: "+225", name: "Ivory Coast", flag: "🇨🇮" },
  { code: "+226", name: "Burkina Faso", flag: "🇧🇫" },
  { code: "+227", name: "Niger", flag: "🇳🇪" },
  { code: "+228", name: "Togo", flag: "🇹🇬" },
  { code: "+229", name: "Benin", flag: "🇧🇯" },
  { code: "+230", name: "Mauritius", flag: "🇲🇺" },
  { code: "+231", name: "Liberia", flag: "🇱🇷" },
  { code: "+233", name: "Ghana", flag: "🇬🇭" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+240", name: "Equatorial Guinea", flag: "🇬🇶" },
  { code: "+241", name: "Gabon", flag: "🇬🇦" },
  { code: "+250", name: "Rwanda", flag: "🇷🇼" },
  { code: "+255", name: "Tanzania", flag: "🇹🇿" },
  { code: "+256", name: "Uganda", flag: "🇺🇬" },
  { code: "+257", name: "Burundi", flag: "🇧🇮" },
  { code: "+260", name: "Zambia", flag: "🇿🇲" },
  { code: "+261", name: "Madagascar", flag: "🇲🇬" },
  { code: "+262", name: "Reunion", flag: "🇷🇪" },
  { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
  { code: "+264", name: "Namibia", flag: "🇳🇦" },
  { code: "+265", name: "Malawi", flag: "🇲🇼" },
  { code: "+266", name: "Lesotho", flag: "🇱🇸" },
  { code: "+267", name: "Botswana", flag: "🇧🇼" },
];