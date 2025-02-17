import React from "react";
import { Link } from "react-router-dom";
import "../Global.css";
import styles from "./navbar.module.css"; // Décommentez cette ligne
import logoNavbar from "../assets/img/logoNavbar.png"; // Importez l'image ici

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logoNavbar} alt="Logo" />
      </div>

      <ul className={styles.navbarLinks}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/Ciel">Progetto Ciel'in Città</Link>
        </li>
        <li>
          <Link to="/Nuvola">Progetto Nuvola Bianca</Link>
        </li>
        <li>
          <Link to="/Occhi">Progetto Gli Occhi nelle Mani</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
