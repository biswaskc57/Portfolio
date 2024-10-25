import "./menu.scss";
import React from "react";

// Define the props interface for the Menu component
interface MenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Convert the function to use the defined props type
const Menu: React.FC<MenuProps> = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "active" : ""}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#skills">Skills</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;