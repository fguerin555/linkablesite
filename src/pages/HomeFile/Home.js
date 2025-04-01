import React from "react";
import "../../Global.css";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/img/IRMA.jpeg";
import image2 from "../../assets/img/VANESSA.jpg";
import image3 from "../../assets/img/FREDERIC.jpeg";

const Home = () => {
  return (
    <div>
      <div className={styles.HomePage}>
        <div className={styles.Arte}>
          <h1>L'ARTE È NECESSARIA</h1>
        </div>
        <p className={styles.ParagOne}>
          L'associazione si rivolge in prevalenza a giovani a rischio di
          abbandono scolastico. Propone ed organizza progetti innovativi di arte
          in tutte le sue discipline dentro e fuori le scuole; offre iniziative
          di apprendimento attraverso progetti culturali al fine di aumentare
          l'offerta formativa anche a quelle fasce di persone alle quali, per
          motivi di carattere sociale, economici o di disabilità spesso è negato
          l'accesso alla cultura. Si occupa inoltre di riqualificare, attaverso
          l'arte, luoghi degradati della città.
        </p>
        <div className={styles.BandeCouleur}>
          <div className={styles.Logo}></div>
          <p className={styles.ParagTwo}>
            L'associazione nasce nel 2018 durante l'ideazione del progetto
            Ciel'in Città a cui ha dato il nome.
          </p>
        </div>
        <div className={styles.ImageContainer}>
          <div className={styles.ImageWrapper}>
            <img src={image1} alt="Irma Alonzo" />
            <p className={styles.ImageCaption}>Irma Alonzo </p>
            <p className={styles.ImageTitle}>Presidente</p>
            <div className={styles.CuricIrma}>
              <Link to="/curicIrma">
                {" "}
                <button>Curriculum</button>
              </Link>
            </div>
          </div>
          <div className={styles.ImageWrapper}>
            <img src={image2} alt="Vanessa Roghi" />
            <p className={styles.ImageCaption}>Vanessa Roghi</p>
            <p className={styles.ImageTitle}>Vicepresidente</p>
            <div className={styles.CuricVanessa}>
              <Link to="/curicVanessa">
                {" "}
                <button>Curriculum</button>
              </Link>
            </div>
          </div>
          <div className={styles.ImageWrapper}>
            <img src={image3} alt="Frédéric Guérin" />
            <p className={styles.ImageCaption}>Frédéric Guérin</p>
            <p className={styles.ImageTitle}>Segretario</p>
            <div className={styles.CuricFred}>
              <Link to="/curicFred">
                {" "}
                <button>Curriculum</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; // Default export
