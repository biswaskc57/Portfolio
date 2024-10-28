import React, { useState } from "react";

import { navItems } from "../../data";

import styles from "./menu.module.scss";

// Define the type for the nav items
type NavLink = {
  id: string;
  label: string;
  icon: string;
};

const HamburgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.hamburgerIcon} onClick={toggleMenu}>
        {!isOpen && (
          <>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </>
        )}
      </div>
      <nav className={`${styles.navMenu} ${isOpen ? styles.show : styles.hidden}`}>
        <ul>
          {navItems.map((link: NavLink) => (
            <li key={link.id} className={link.label === "Home" ? styles.homeItem : ""}>
              <a href={`#${link.id}`} onClick={() => setIsOpen(false)}>
                <i className={`fas ${link.icon}`}></i>
                {link.label}
              </a>
              {link.label === "Home" && (
                <div className={styles.closeIcon} onClick={toggleMenu}>
                  <i className="fa-solid fa-xmark" style={{ fontSize: '24px', color: 'red' }}></i>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
