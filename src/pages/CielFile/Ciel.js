import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../Global.css";
import styles from "./Ciel.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import image13 from "../../assets/img/inaugmura1.jpg";
import image14 from "../../assets/img/inaugmura2.jpg";
import image15 from "../../assets/img/inaugmura3.jpg";
import image16 from "../../assets/img/Murosonoro1.jpg";
import image17 from "../../assets/img/Murosonoro2.jpg";
import image18 from "../../assets/img/salaEden.jpg";
import image19 from "../../assets/img/museoPECCI.jpg";
import image20 from "../../assets/img/Boschetto.jpg";
import image21 from "../../assets/img/Alvaro13.png";
import image22 from "../../assets/img/Tana.png";
import image23 from "../../assets/img/Fargo.png";

const ProjectCiel = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("projectCiel.title")} | Parco di sculture-gioco</title>
        <meta name="description" content={t("projectCiel.subtitle")} />
        <meta
          name="keywords"
          content="Ciel'in Città, Arte, Éducazione, Parco di sculture-gioco, Mura Medicee, Grosseto"
        />
        <meta name="author" content="Associazione Ciel'in Città" />
        <meta property="og:title" content={t("projectCiel.title")} />
        <meta
          property="og:description"
          content={t("projectCiel.section1.subtitle")}
        />
        <meta
          property="og:image"
          content="https://cielincitta.org/assets/img/inaugmura1.jpg"
        />
        <meta property="og:url" content="https://cielincitta.org/ciel" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("projectCiel.title")} />
      </Helmet>
      <link rel="canonical" href="https://cielincitta.org/ciel" />

      <div className={styles.CielPage}>
        <div className={styles.BandeRose}>
          <div className={styles.Titolo}>
            <h1>{t("projectCiel.title")}</h1>
          </div>
          <div className={styles.LogoCIC}></div>
          <div className={styles.SottoTitolo}>
            <p>{t("projectCiel.subtitle")}</p>
          </div>
        </div>

        <div className={styles.CICvideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/At4tr6_RdtA?si=OgjDo8rNJajlyc07"
            title={t("projectCiel.videoAlt")}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className={styles.Stampa}>
          <Link to="/Stampa">
            <button>{t("projectCiel.pressButton")}</button>
          </Link>
        </div>

        <div className={styles.InauguraMuraTexte}>
          <h2>{t("projectCiel.section1.title")}</h2>
          <h3>{t("projectCiel.section1.subtitle")}</h3>
          <h4>{t("projectCiel.section1.date")}</h4>
          <p>{t("projectCiel.section1.description")}</p>
        </div>

        <div className={styles.ImagesContainer}>
          <img src={image13} alt="Inaugurazione sulle Mura 1" />
          <img src={image14} alt="Inaugurazione sulle Mura 2" />
          <img src={image15} alt="Inaugurazione sulle Mura 3" />
        </div>

        <div className={styles.Scultures}>
          <img src={image21} alt="Sculture gioco Alvaro13  " />
          <img src={image22} alt="Sculture gioco Tana  " />
          <img src={image23} alt="Sculture gioco Vorrei giocare con voi  " />
        </div>

        <div className={styles.SalaEden}>
          <h3>{t("projectCiel.salaEden.title")}</h3>
          <p>{t("projectCiel.salaEden.description")}</p>
          <img src={image18} alt="Laboratorio Sala Eden" />
        </div>

        <div className={styles.MuseoPecci}>
          <h3>{t("projectCiel.museoPecci.title")}</h3>
          <p>{t("projectCiel.museoPecci.description")}</p>
          <div className={styles.Pecci}>
            <Link to="/Pecci">
              <button>{t("projectCiel.museoPecci.button")}</button>
            </Link>
          </div>
          <img src={image19} alt="Inaugurazione al Museo Pecci" />
        </div>

        <div className={styles.Boschetto}>
          <h2>{t("projectCiel.boschetto.title")}</h2>
          <p>{t("projectCiel.boschetto.description1")}</p>
          <img src={image16} alt="Muro sonoro parco del boschetto" />
          <img src={image17} alt="Muro sonoro con i bambini" />
          <div className={styles.CatalogoBoschetto}>
            <Link to="/catalogo">
              <button>{t("projectCiel.boschetto.catalogButton")}</button>
            </Link>
          </div>
        </div>

        <div className={styles.BoschettoCopertina}>
          <img src={image20} alt="Copertina del catalogo Il Boschetto" />
        </div>

        <div className={styles.Boschetto2}>
          <p>{t("projectCiel.boschetto.description2")}</p>
          <div className={styles.Tirreno}>
            <Link to="/Tirreno">
              <button>{t("projectCiel.boschetto.tirrenoButton")}</button>
            </Link>
          </div>
          <ScrollToTop />
          <BackButton />
        </div>
      </div>
    </div>
  );
};

export default ProjectCiel;
