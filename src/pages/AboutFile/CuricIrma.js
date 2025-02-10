import React from "react";
import Styles from "./Curic.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import image101 from "../../assets/img/curicIrma/CuricIrma-images-0.jpg";
import image102 from "../../assets/img/curicIrma/CuricIrma-images-1.jpg";

const CuricIrma = () => {
  return (
    <div>
      <div className={Styles.CuricIrma}>
        <img src={image101} alt="Page 1 curriculum Irma Alonzo" />
        <img src={image102} alt="Page 2 curriculum Irma Alonzo" />
      </div>
      <BackButton />
      <ScrollToTop />
    </div>
  );
};
export default CuricIrma;
