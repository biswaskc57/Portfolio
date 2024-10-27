// Define a TypeScript interface for each navigation link
export interface NavItem {
    id: string;
    label: string;
    icon: string;
  }
  
// Apply the NavLink[] type to ensure each item in the array matches the interface
export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: "fa-home" },
  { id: "about", label: "About", icon: "fa-user" },
  { id: "projects", label: "Projects", icon: "fa-diagram-project" },
  { id: "experience", label: "Experience", icon: "fa-briefcase" },
  { id: "contact", label: "Contact", icon: "fa-address-card" },
];

import { PortfolioItem } from "./components/portfolio/Portfolio";

export const featuredPortfolio: PortfolioItem [] = [
  {
    id: 1,
    title: "Personal Trainer Web-App",
    img: "assets/Trainer.png",
    url: "https://biswas-personal-trainer.herokuapp.com/",
  },
  {
    id: 2,
    title: "ExerciseBuddy",
    img: "assets/exerciseBuddy.png",
    url: "https://biswas-exercise-buddy.herokuapp.com/",
  },
  {
    id: 3,
    title: "Phonebook",
    img: "assets/Phonebook.png",
    url: "https://biswas-phonebook.herokuapp.com/",
  },
  {
    id: 4,
    title: "Blog App",
    img:
      "assets/BlogApp.png",
    url: "https://bloglist-biswas.herokuapp.com/",
  },
  {
    id: 5,
    title: "Shoppinglist WebApp",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
  {
    id: 6,
    title: "Note Webapp",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
];

export const MernPortfolio = [
  {
    id: 1,
    title: "Boglist Web-App",
    img:
      "assets/BlogApp.png",
    url: "https://bloglist-biswas.herokuapp.com/",
  },
  {
    id: 2,
    title: "Note",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
  {
    id: 3,
    title: "CountryList",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
  {
    id: 4,
    title: "Anecdote",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
];

export const ReactPortfolio = [
  {
    id: 1,
    title: "Personal Trainer Apps",
    img: "assets/Trainer.png",
    url: "https://biswas-personal-trainer.herokuapp.com/",
  },
  {
    id: 2,
    title: "Phonebook",
    img: "assets/Phonebook.png",
    url: "https://biswas-phonebook.herokuapp.com/",
  },
  {
    id: 3,
    title: "Shoppinglist",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
  {
    id: 4,
    title: "Weather Web App",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
];

export const javaPortfolio = [
  {
    id: 1,
    title: "ExerciseBuddy",
    img: "assets/exerciseBuddy.png",
    url: "https://biswas-exercise-buddy.herokuapp.com/",
  },
  {
    id: 2,
    title: "3 UAS Chatbot",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
];

export const designPortfolio = [
  {
    id: 1,
    title: "Haaga-helia Mobile App",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
  {
    id: 2,
    title: "3 UAS Chatbot",
    img:
      "https://media.istockphoto.com/vectors/coming-soon-neon-banner-vector-template-glowing-night-bright-sign-vector-id1144514162",
    url: "",
  },
];
