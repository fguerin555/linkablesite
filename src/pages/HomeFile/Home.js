import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

import "../../Global.css";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/img/Irma.png";
import image2 from "../../assets/img/Vanessa.png";
import image3 from "../../assets/img/Fred.png";

const Home = () => {
  const { t } = useTranslation(); // 👈 Hook pour traduire

  return (
    <div>
      <Helmet>
        <title>
          Ciel'in Città | Associazione culturale e progetti educativi
        </title>
        <link rel="canonical" href="https://cielincitta.org/home" />
        <meta
          name="description"
          content="Ciel'in Città è un'associazione culturale che propone progetti innovativi di arte ed educazione per contrastare l'abbandono scolastico e riqualificare spazi urbani."
        />
        <meta
          name="keywords"
          content="Ciel'in Città, Associazione culturale, Arte, Educazione, Inclusione, Grosseto, Scultura, Laboratori artistici, Progetti sociali"
        />
        <meta name="author" content="Associazione Ciel'in Città" />
        <meta
          property="og:title"
          content="Ciel'in Città | Arte e Educazione per tutti"
        />
        <meta
          property="og:description"
          content="Scopri Ciel'in Città, un'associazione che usa l'arte per educare e trasformare gli spazi urbani. Un progetto innovativo a Grosseto."
        />
        <meta
          property="og:image"
          content="https://cielincitta.org/assets/img/Logo2.png"
        />
        <meta property="og:url" content="https://cielincitta.org/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ciel'in Città | Arte ed Educazione"
        />
        <meta
          name="twitter:description"
          content="Progetti artistici e sociali per l'inclusione e la cultura, promossi dall'associazione Ciel'in Città."
        />
      </Helmet>

      <div className={styles.HomePage}>
        <div className={styles.Arte}>
          <h1>{t("home.title")}</h1>
        </div>

        <p className={styles.ParagOne}>{t("home.paragraph1")}</p>

        <div className={styles.BandeCouleur}>
          <div className={styles.Logo}></div>
          <p className={styles.ParagTwo}>{t("home.description")}</p>
        </div>

        <div className={styles.ImageContainer}>
          <div className={styles.ImageWrapper}>
            <img src={image1} alt="Irma Alonzo" />
            <p className={styles.ImageCaption}>Irma Alonzo</p>
            <p className={styles.ImageTitle}>{t("home.person1")}</p>
            <div className={styles.CuricIrma}>
              <Link to="/curicIrma">
                <button>Curriculum</button>
              </Link>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <img src={image2} alt="Vanessa Roghi" />
            <p className={styles.ImageCaption}>Vanessa Roghi</p>
            <p className={styles.ImageTitle}>{t("home.person2")}</p>
            <div className={styles.CuricVanessa}>
              <Link to="/curicVanessa">
                <button>Curriculum</button>
              </Link>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <img src={image3} alt="Frédéric Guérin" />
            <p className={styles.ImageCaption}>Frédéric Guérin</p>
            <p className={styles.ImageTitle}>{t("home.person3")}</p>
            <div className={styles.CuricFred}>
              <Link to="/curicFred">
                <button>Curriculum</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
