import React from "react";
import "../../Global.css";
import BackButton from "../../components/BackButton";
import Styles from "./Tirreno.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import image501 from "../../assets/img/Tirreno/Tirreno-1.png";
import image502 from "../../assets/img/Tirreno/Tirreno-2.png";
import image503 from "../../assets/img/Tirreno/Tirreno-3.png";
import image504 from "../../assets/img/Tirreno/Tirreno-4.png";
import image505 from "../../assets/img/Tirreno/Tirreno-5.png";
import image506 from "../../assets/img/Tirreno/Tirreno-6.png";
import image507 from "../../assets/img/Tirreno/Tirreno-7.png";
import image508 from "../../assets/img/Tirreno/Tirreno-8.png";

const Tirreno = () => {
  return (
    <div>
      <div className={Styles.Tirreno}>
        <img src={image501} alt="Articolo Giornale Il Tirreno pagina 1" />
        <img src={image502} alt="Articolo Giornale Il Tirreno pagina 2" />
        <img src={image503} alt="Articolo Giornale Il Tirreno pagina 3" />
        <img src={image504} alt="Articolo Giornale Il Tirreno pagina 4" />
        <img src={image505} alt="Articolo Giornale Il Tirreno pagina 5" />
        <img src={image506} alt="Articolo Giornale Il Tirreno pagina 6" />
        <img src={image507} alt="Articolo Giornale Il Tirreno pagina 7" />
        <img src={image508} alt="Articolo Giornale Il Tirreno pagina 8" />
      </div>
      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Tirreno;
