import React from "react";
import "../../Global.css";
import BackButton from "../../components/BackButton";
import Styles from "./Stampa.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import image401 from "../../assets/img/Maremma/Maremma-1.png";
import image402 from "../../assets/img/Maremma/Maremma-2.png";
import image403 from "../../assets/img/Maremma/Maremma-3.png";
import image404 from "../../assets/img/Maremma/Maremma-4.png";
import image405 from "../../assets/img/Maremma/Maremma-5.png";
import image406 from "../../assets/img/Maremma/Maremma-6.png";
import image407 from "../../assets/img/Maremma/Maremma-7.png";
import image408 from "../../assets/img/Maremma/Maremma-8.png";

import image409 from "../../assets/img/Nazione/Nazione-1.png";
import image410 from "../../assets/img/Nazione/Nazione-2.png";
import image411 from "../../assets/img/Nazione/Nazione-3.png";
import image412 from "../../assets/img/Nazione/Nazione-4.png";
import image413 from "../../assets/img/Nazione/Nazione-5.png";
import image414 from "../../assets/img/Nazione/Nazione-6.png";

import image415 from "../../assets/img/Oggi/Oggi-1.png";
import image416 from "../../assets/img/Oggi/Oggi-2.png";
import image417 from "../../assets/img/Oggi/Oggi-3.png";
import image418 from "../../assets/img/Oggi/Oggi-4.png";
import image419 from "../../assets/img/Oggi/Oggi-5.png";
import image420 from "../../assets/img/Oggi/Oggi-6.png";
import image421 from "../../assets/img/Oggi/Oggi-7.png";
import image422 from "../../assets/img/Oggi/Oggi-8.png";

const Stampa = () => {
  return (
    <div>
      <div className={Styles.Stampa}>
        <img src={image401} alt="Articolo Giornale della Maremma pagina 1" />
        <img src={image402} alt="Articolo Giornale della Maremma pagina 2" />
        <img src={image403} alt="Articolo Giornale della Maremma pagina 3" />
        <img src={image404} alt="Articolo Giornale della Maremma pagina 4" />
        <img src={image405} alt="Articolo Giornale della Maremma pagina 5" />
        <img src={image406} alt="Articolo Giornale della Maremma pagina 6" />
        <img src={image407} alt="Articolo Giornale della Maremma pagina 7" />
        <img src={image408} alt="Articolo Giornale della Maremma pagina 8" />
        <span>
          <p></p>
        </span>
        <img src={image409} alt="Articolo Giornale La Nazione pagina 1" />
        <img src={image410} alt="Articolo Giornale La Nazione pagina 2" />
        <img src={image411} alt="Articolo Giornale La Nazione pagina 3" />
        <img src={image412} alt="Articolo Giornale La Nazione pagina 4" />
        <img src={image413} alt="Articolo Giornale La Nazione pagina 5" />
        <img src={image414} alt="Articolo Giornale La Nazione pagina 6" />
        <span>
          <p></p>
        </span>
        <img src={image415} alt="Articolo Giornale Maremma Oggi pagina 1" />
        <img src={image416} alt="Articolo Giornale Maremma Oggi pagina 2" />
        <img src={image417} alt="Articolo Giornale Maremma Oggi pagina 3" />
        <img src={image418} alt="Articolo Giornale Maremma Oggi pagina 4" />
        <img src={image419} alt="Articolo Giornale Maremma Oggi pagina 5" />
        <img src={image420} alt="Articolo Giornale Maremma Oggi pagina 6" />
        <img src={image421} alt="Articolo Giornale Maremma Oggi pagina 7" />
        <img src={image422} alt="Articolo Giornale Maremma Oggi pagina 8" />
      </div>
      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Stampa;
