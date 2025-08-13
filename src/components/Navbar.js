import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../Global.css";
import styles from "./navbar.module.css";
import logoNavbar from "../assets/img/logoNavbar.png";

import flagIT from "../assets/img/FlagItaly.png";
import flagEN from "../assets/img/FlagEngland.png";
import flagFR from "../assets/img/FlagFrance.png";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);
  const changeLanguage = (lang) => i18n.changeLanguage(lang);

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
            {t("navbar.home")}
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={closeMenu}>
            {t("navbar.about")}
          </Link>
        </li>
        <li>
          <Link to="/Ciel" onClick={closeMenu}>
            {t("navbar.ciel")}
          </Link>
        </li>
        <li>
          <Link to="/Nuvola" onClick={closeMenu}>
            {t("navbar.nuvola")}
          </Link>
        </li>
        <li>
          <Link to="/Occhi" onClick={closeMenu}>
            {t("navbar.occhi")}
          </Link>
        </li>
        <li>
          <Link to="/Acqua" onClick={closeMenu}>
            {t("navbar.acqua")}
          </Link>
        </li>

        <li className={styles.languageSwitcher}>
          <button onClick={() => changeLanguage("it")} aria-label="Italiano">
            <img src={flagIT} alt="Italiano" className={styles.flagIcon} />
          </button>
          <button onClick={() => changeLanguage("en")} aria-label="English">
            <img src={flagEN} alt="English" className={styles.flagIcon} />
          </button>
          <button onClick={() => changeLanguage("fr")} aria-label="Français">
            <img src={flagFR} alt="Français" className={styles.flagIcon} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
