import React from "react";
import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./About.module.css";
import logo from "../../assets/img/Logo2.png";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import image1 from "../../assets/img/Irma.png";
import image2 from "../../assets/img/Vanessa.png";
import image3 from "../../assets/img/Fred.png";

const About = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Balises Meta SEO */}
      <Helmet>
        <title>À propos - Ciel'in Città | Association culturelle</title>
        <link rel="canonical" href="https://cielincitta.org/about" />
        <meta
          name="description"
          content="Découvrez l'association Ciel'in Città, ses projets artistiques et éducatifs pour lutter contre la pauvreté scolaire et urbaine."
        />
        <meta
          name="keywords"
          content="Ciel'in Città, Association, Art, Éducation, Grosseto, Projets sociaux"
        />
        <meta name="author" content="Associazione Ciel'in Città" />
        <meta property="og:title" content="À propos de Ciel'in Città" />
        <meta
          property="og:description"
          content="Ciel'in Città : une association dédiée à l'art et l'éducation pour transformer les espaces urbains."
        />
        <meta
          property="og:image"
          content="https://cielincitta.org/assets/img/Logo2.png"
        />
        <meta property="og:url" content="https://cielincitta.org/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="À propos - Ciel'in Città" />
        <title>{t("about.pageTitle")}</title>
        <meta name="description" content={t("about.metaDescription")} />
      </Helmet>

      <div className={styles.AboutPage}>
        <div className={styles.Logo2}>
          <img src={logo} alt={t("about.logoAlt")} />
        </div>

        <div className={styles.Presentazione}>
          <p>{t("about.parag.paragraph1")}</p>
          <p>{t("about.parag.paragraph2")}</p>
          <p>{t("about.parag.paragraph3")}</p>
          <p>{t("about.parag.paragraph4")}</p>
          <p>{t("about.parag.paragraph5")}</p>
          <p>{t("about.parag.paragraph6")}</p>
          <p>{t("about.parag.paragraph7")}</p>
          <p>{t("about.parag.paragraph8")}</p>
        </div>

        <div className={styles.ImageContainer}>
          <div className={styles.ImageWrapper}>
            <img src={image1} alt={t("about.person1.name")} />
            <p className={styles.ImageCaption}>{t("about.person1.name")}</p>
            <p className={styles.ImageTitle}>{t("about.person1.role")}</p>
            <div className={styles.CuricIrma}>
              <Link to="/curicIrma">
                <button>{t("about.person1.button")}</button>
              </Link>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <img src={image2} alt={t("about.person2.name")} />
            <p className={styles.ImageCaption}>{t("about.person2.name")}</p>
            <p className={styles.ImageTitle}>{t("about.person2.role")}</p>
            <div className={styles.CuricVanessa}>
              <Link to="/curicVanessa">
                <button>{t("about.person2.button")}</button>
              </Link>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <img src={image3} alt={t("about.person3.name")} />
            <p className={styles.ImageCaption}>{t("about.person3.name")}</p>
            <p className={styles.ImageTitle}>{t("about.person3.role")}</p>
            <div className={styles.CuricFred}>
              <Link to="/curicFred">
                <button>{t("about.person3.button")}</button>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.Dati}>
          <h2>{t("about.associationTitle")}</h2>
          <h2>{t("about.associationName")}</h2>
          <h4>{t("about.legalAddressTitle")}</h4>
          <h4>{t("about.legalAddress")}</h4>
          <h4>{t("about.operationalAddressTitle")}</h4>
          <h4>{t("about.operationalAddress")}</h4>
          <h3>{t("about.taxCode")}</h3>
          <h3>{t("about.creationDate")}</h3>
          <h3>
            {t("about.contactLabel")}{" "}
            <a href="tel:+393896391150">389 639 1150</a>
          </h3>
          <h3>cielincitta@gmail.com</h3>
          <h3>irma.alonzo@pec.it</h3>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default About;
