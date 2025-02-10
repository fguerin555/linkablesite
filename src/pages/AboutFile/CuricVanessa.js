import React from "react";
import Styles from "./Curic.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import image108 from "../../assets/img/CuricVanessa/CuricVanessa-0.jpg";
import image109 from "../../assets/img/CuricVanessa/CuricVanessa-1.jpg";
import image110 from "../../assets/img/CuricVanessa/CuricVanessa-2.jpg";

const CuricVanessa = () => {
  return (
    <div>
      <div className={Styles.CuricVanessa}>
        <img src={image108} alt="Page 1 curriculum Vanessa Roghi" />
        <img src={image109} alt="Page 2 curriculum Vanessa Roghi" />
        <img src={image110} alt="Page 3 curriculum Vanessa Roghi" />
      </div>
      <BackButton />
      <ScrollToTop />
    </div>
  );
};
export default CuricVanessa;
