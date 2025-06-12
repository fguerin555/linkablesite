import React from "react";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import Styles from "./Curic.module.css";
import image103 from "../../assets/img/CuricFred/CuricFred-images-0.jpg";
import image104 from "../../assets/img/CuricFred/CuricFred-images-1.jpg";
import image105 from "../../assets/img/CuricFred/CuricFred-images-2.jpg";
import image106 from "../../assets/img/CuricFred/CuricFred-images-3.jpg";
import image107 from "../../assets/img/CuricFred/CuricFred-images-4.jpg";

const CuricFred = () => {
  return (
    <div>
      <div className={Styles.CuricFred}>
        <img src={image103} alt="Page 1 curriculum Frederic Guerin" />
        <img src={image104} alt="Page 2 curriculum Frederic Guerin" />
        <img src={image105} alt="Page 3 curriculum Frederic Guerin" />
        <img src={image106} alt="Page 4 curriculum Frederic Guerin" />
        <img src={image107} alt="Page 5 curriculum Frederic Guerin" />
        {/* <div className={Styles.LinksFred}>
          <a
            href="https://fguerin555.github.io/music-guerin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>site Musiques</p>
          </a>
          <a
            href="https://fguerin555.github.io/fguerin-painting/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>site Peinture</p>
          </a>
        </div> */}
      </div>
      <ScrollToTop />
      <BackButton />
    </div>
  );
};
export default CuricFred;
