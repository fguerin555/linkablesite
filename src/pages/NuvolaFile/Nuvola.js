import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import "../../Global.css";
import styles from "./Nuvola.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import image7 from "../../assets/img/LOCANDINA-Seminari.jpg";
import image8 from "../../assets/img/Joker.jpg";
import image9 from "../../assets/img/Lorenza.jpg";
import image10 from "../../assets/img/Dona.jpg";
import image11 from "../../assets/img/cortoMaltese.jpg";

const Nuvola = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t("nuvola.pageTitle")}</title>
        <link rel="canonical" href="https://cielincitta.org/nuvola" />
        <meta name="description" content={t("nuvola.metaDescription")} />
        <meta name="keywords" content={t("nuvola.metaKeywords")} />
        <meta name="author" content="Associazione Ciel'in Città" />
        <meta property="og:title" content={t("nuvola.pageTitle")} />
        <meta property="og:description" content={t("nuvola.ogDescription")} />
        <meta
          property="og:image"
          content="https://cielincitta.org/assets/img/LOCANDINA-Seminari.jpg"
        />
        <meta property="og:url" content="https://cielincitta.org/nuvola" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("nuvola.pageTitle")} />
        <meta
          name="twitter:description"
          content={t("nuvola.twitterDescription")}
        />
      </Helmet>

      <div className={styles.NuvolaPage}>
        <div className={styles.CICbody}>
          <div className={styles.NuvolaContentContainer}>
            <div className={styles.NuvolaLocandina}>
              <img src={image7} alt={t("nuvola.locandinaAlt")} />
            </div>
            <div className={styles.NuvolaTextcontainer}>
              <p className={styles.p1}>{t("nuvola.text1")}</p>
              <p className={styles.p2}>{t("nuvola.text2")}</p>
              <p className={styles.p3}>{t("nuvola.text3")}</p>
              <div className={styles.Bvideo}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/k0cREgVlrDg?si=0Da-AFTDtF8Vfu2-"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className={styles.Part2}>
            <h1>{t("nuvola.artistsTitle")}</h1>
            <div className={styles.Fumetti}>
              <div className={styles.ArtistPackage}>
                <img src={image8} alt={t("nuvola.artist1.alt")} />
                <div>
                  <h3 className={styles.Nome}>{t("nuvola.artist1.name")}</h3>
                  <p className={styles.Paragraphe}>{t("nuvola.artist1.bio")}</p>
                </div>
              </div>
              <div className={styles.ArtistPackage}>
                <img src={image9} alt={t("nuvola.artist2.alt")} />
                <div>
                  <h3 className={styles.Nome}>{t("nuvola.artist2.name")}</h3>
                  <p className={styles.Paragraphe}>{t("nuvola.artist2.bio")}</p>
                </div>
              </div>
              <div className={styles.ArtistPackage}>
                <img src={image11} alt={t("nuvola.artist3.alt")} />
                <div>
                  <h3 className={styles.Nome}>{t("nuvola.artist3.name")}</h3>
                  <p className={styles.Paragraphe}>{t("nuvola.artist3.bio")}</p>
                </div>
              </div>
              <div className={styles.ArtistPackage}>
                <img src={image10} alt={t("nuvola.artist4.alt")} />
                <div>
                  <h3 className={styles.Nome}>{t("nuvola.artist4.name")}</h3>
                  <p className={styles.Paragraphe}>{t("nuvola.artist4.bio")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Nuvola;
