import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Global.css";
import styles from "./navbar.module.css";
import logoNavbar from "../assets/img/logoNavbar.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logoNavbar} alt="Logo" />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <ul
        className={`${styles.navbarLinks} ${
          menuOpen ? styles.active : styles.hidden
        }`}
      >
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/Ciel" onClick={closeMenu}>
            Progetto Ciel'in Città
          </Link>
        </li>
        <li>
          <Link to="/Nuvola" onClick={closeMenu}>
            Nuvola Bianca
          </Link>
        </li>
        <li>
          <Link to="/Occhi" onClick={closeMenu}>
            Gli Occhi nelle Mani
          </Link>
        </li>
        <li>
          <Link to="/Acqua" onClick={closeMenu}>
            Il Racconto dell'Acqua
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
