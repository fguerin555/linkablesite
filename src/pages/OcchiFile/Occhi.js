import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

import "../../Global.css";
import styles from "./Occhi.module.css";
import image6 from "../../assets/img/LocandinaONM.jpg";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Occhi = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("occhi.pageTitle")}</title>
        <link rel="canonical" href="https://cielincitta.org/occhi" />
        <meta name="description" content={t("occhi.metaDescription")} />
        <meta name="keywords" content={t("occhi.metaKeywords")} />
        <meta name="author" content="Associazione Ciel'in Città" />
        <meta property="og:title" content={t("occhi.pageTitle")} />
        <meta property="og:description" content={t("occhi.ogDescription")} />
        <meta
          property="og:image"
          content="https://cielincitta.org/assets/img/LocandinaONM.jpg"
        />
        <meta property="og:url" content="https://cielincitta.org/occhi" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("occhi.pageTitle")} />
        <meta
          name="twitter:description"
          content={t("occhi.twitterDescription")}
        />
      </Helmet>

      <div className={styles.OcchiPage}>
        <div className={styles.Corsi}>
          <h1>{t("occhi.title")}</h1>
          <h2>{t("occhi.subtitle")}</h2>
          <h3>{t("occhi.teacher")}</h3>
          <p>{t("occhi.schedule1")}</p>
          <p>{t("occhi.schedule2")}</p>
          <p>{t("occhi.address")}</p>
          <p>{t("occhi.city")}</p>
        </div>

        <div className={styles.OcchiContentContainer}>
          <div className={styles.OcchiImageContainer}>
            <img src={image6} alt={t("occhi.imageAlt")} />
          </div>
          <div className={styles.OcchiTextContainer}>
            <div className={styles.Paragraphes}>
              <p>
                <Trans i18nKey="occhi.paragraph1" />
              </p>
              <span></span>
              <p>
                <Trans i18nKey="occhi.paragraph2" />
              </p>
              <span></span>
              <p>
                <Trans i18nKey="occhi.paragraph3" />
              </p>
              <span></span>
              <p>
                <Trans i18nKey="occhi.paragraph4" />
              </p>
            </div>

            <div className={styles.Bvideo}>
              <iframe
                src="https://www.youtube.com/embed/jd80lJqmoOA"
                title={t("occhi.videoTitle")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Occhi;
