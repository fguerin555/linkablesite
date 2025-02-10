import React from "react";
import "../../Global.css";
import BackButton from "../../components/BackButton";
import Styles from "./Pecci.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import image201 from "../../assets/img/Pecci/Pecci-1.png";
import image202 from "../../assets/img/Pecci/Pecci-2.png";
import image203 from "../../assets/img/Pecci/Pecci-3.png";
import image204 from "../../assets/img/Pecci/Pecci-4.png";
import image205 from "../../assets/img/Pecci/Pecci-5.png";
import image206 from "../../assets/img/Pecci/Pecci-6.png";
import image207 from "../../assets/img/Pecci/Pecci-7.png";
import image208 from "../../assets/img/Pecci/Pecci-8.png";
import image209 from "../../assets/img/Pecci/Pecci-9.png";
import image210 from "../../assets/img/Pecci/Pecci-10.png";
import image211 from "../../assets/img/Pecci/Pecci-11.png";
import image212 from "../../assets/img/Pecci/Pecci-12.png";
import image213 from "../../assets/img/Pecci/Pecci-13.png";
import image214 from "../../assets/img/Pecci/Pecci-14.png";
import image215 from "../../assets/img/Pecci/Pecci-15.png";
import image216 from "../../assets/img/Pecci/Pecci-16.png";
import image217 from "../../assets/img/Pecci/Pecci-17.png";

const Pecci = () => {
  return (
    <div>
      <div className={Styles.Pecci}>
        <img src={image201} alt="Evento Museo Pecci pagina 1" />
        <img src={image202} alt="Evento Museo Pecci pagina 2" />
        <img src={image203} alt="Evento Museo Pecci pagina 3" />
        <img src={image204} alt="Evento Museo Pecci pagina 4" />
        <img src={image205} alt="Evento Museo Pecci pagina 5" />
        <img src={image206} alt="Evento Museo Pecci pagina 6" />
        <img src={image207} alt="Evento Museo Pecci pagina 7" />
        <img src={image208} alt="Evento Museo Pecci pagina 8" />
        <img src={image209} alt="Evento Museo Pecci pagina 9" />
        <img src={image210} alt="Evento Museo Pecci pagina 10" />
        <img src={image211} alt="Evento Museo Pecci pagina 11" />
        <img src={image212} alt="Evento Museo Pecci pagina 12" />
        <img src={image213} alt="Evento Museo Pecci pagina 13" />
        <img src={image214} alt="Evento Museo Pecci pagina 14" />
        <img src={image215} alt="Evento Museo Pecci pagina 15" />
        <img src={image216} alt="Evento Museo Pecci pagina 16" />
        <img src={image217} alt="Evento Museo Pecci pagina 17" />
      </div>
      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Pecci;
