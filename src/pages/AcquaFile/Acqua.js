import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import pointingRight from "../../assets/img/pointingRight.png";
import "../../Global.css";
import styles from "./Acqua.module.css";
import LogoOndaBlue2 from "../../assets/img/LogoOndaBlue2.png";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Acqua = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("acqua.pageTitle")}</title>
        <link rel="canonical" href="https://ilraccontodellacqua.com" />
        <meta name="description" content={t("acqua.metaDescription")} />
        <meta name="keywords" content={t("acqua.metaKeywords")} />
        <meta name="author" content="Associazione Ciel'in Città" />

        <meta property="og:title" content={t("acqua.ogTitle")} />
        <meta property="og:description" content={t("acqua.ogDescription")} />
        <meta property="og:image" content="https://ilraccontodellacqua.com" />
        <meta property="og:url" content="https://ilraccontodellacqua.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("acqua.ogTitle")} />
        <meta name="twitter:description" content={t("acqua.metaDescription")} />
      </Helmet>

      <div className={styles.AcquaPage}>
        <div className={styles.Presentation}>
          <h1>{t("acqua.title")}</h1>
          <h2>{t("acqua.city")}</h2>
          <h2>{t("acqua.dates")}</h2>
          <p>{t("acqua.paragraph1")}</p>
          <p>{t("acqua.paragraph2")}</p>
          <p>{t("acqua.paragraph3")}</p>
          <p>{t("acqua.paragraph4")}</p>
        </div>
      </div>

      <div className={styles.Links}>
        <div>
          <span>
            <img
              src={pointingRight}
              alt={t("acqua.iconAlt")}
              className={styles.iconImage}
            />
            {t("acqua.clickText")}
            <a href="https://ilraccontodellacqua.com" rel="noopener noreferrer">
              <div className={styles.logo}>
                <img src={LogoOndaBlue2} alt={t("acqua.logoAlt")} />
              </div>
            </a>
          </span>
        </div>
      </div>

      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Acqua;
