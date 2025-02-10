import React from "react";
import "../../Global.css";
import styles from "./Home.module.css";
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
          L'associazione si dedica a ideare ed organizzare progetti innovatvi di
          arte in tutte le sue discipline e da integrare nel curriculum
          scolastico; propone iniziative di apprendimento attraverso progetti
          culturali al fine di aumentare l'offerta formativa anche a quelle
          fasce di persone alle quali, per motivi diversi spesso è negato
          l'accesso alla cultura. Si occupa inoltre di riqualificare, attaverso
          l'arte, luoghi degradati della città.
        </p>
        <div className={styles.BandeCouleur}>
          <p className={styles.ParagTwo}>
            {" "}
            l'associazione nasce nel 2018 durante l'ideazione del progetto
            Ciel'in Città a cui ha dato il nome.
          </p>
          <div className={styles.Logo}></div>
        </div>
        <div className={styles.ImageContainer}>
          <div className={styles.ImageWrapper}>
            <img src={image1} alt="Irma Alonzo" />
            <p className={styles.ImageCaption}>Irma Alonzo </p>
            <p className={styles.ImageTitle}>Presidente</p>
          </div>
          <div className={styles.ImageWrapper}>
            <img src={image2} alt="Vanessa Roghi" />
            <p className={styles.ImageCaption}>Vanessa Roghi</p>
            <p className={styles.ImageTitle}>Vicepresidente</p>
          </div>
          <div className={styles.ImageWrapper}>
            <img src={image3} alt="Frédéric Guérin" />
            <p className={styles.ImageCaption}>Frédéric Guérin</p>
            <p className={styles.ImageTitle}>Segretario</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; // Default export
