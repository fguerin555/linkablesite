import React from "react";
import { Helmet } from "react-helmet-async";
import "../../Global.css";
import styles from "./Acqua.module.css";
import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import LogoOndaBlue2 from "../../assets/img/LogoOndaBlue2.png";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Acqua = () => {
  return (
    <div>
      <Helmet>
        <title>Associazione Ciel'in Città</title>
        <link rel="canonical" href="https://ilraccontodellacqua.com" />
        <meta
          name="description"
          content="Scopri il progetto Il Racconto dell'Acqua"
        />
        <meta
          name="keywords"
          content="Roma, Giubileo 2025, arte, scultura, accessibilità, cultura"
        />
        <meta name="author" content="Associazione Ciel'in Città" />

        {/* Open Graph per Facebook e social media */}
        <meta
          property="og:title"
          content="Il Racconto dell'Acqua | Giubileo 2025 Roma| Arte e Cultura"
        />
        <meta
          property="og:description"
          content="Eventi Culturali ed artisitici per il Giubileo di Roma 2025"
        />
        <meta property="og:image" content="https://ilraccontodellacqua.com" />
        <meta property="og:url" content="https://ilraccontodellacqua.com" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Il Racconto dell'Acqua | Giubileo 2025 Roma| Arte e Cultura"
        />
        <meta
          name="twitter:description"
          content="Scopri il progetto Il Racconto dell'Acqua"
        />
      </Helmet>

      <div className={styles.AcquaPage}>
        <div className={styles.Presentation}>
          <h1>Il Racconto dell'Acqua</h1>
          <h2>Roma</h2>
          <h2>Settembre Ottobre Novembre 2025</h2>
          <p>
            Il racconto dell’acqua è una manifestazione vincitrice dell’Avviso
            Pubblico Artes et Iubilaeum – 2025, ideata e organizzata
            dall’Associazione Ciel’in Città a cura di Adriana Polveroni, che si
            propone di esplorare il valore simbolico, culturale e ambientale
            dell’acqua attraverso linguaggi artistici, percorsi partecipativi e
            interventi in alcuni quartieri di Roma. La rassegna si articola in
            una serie di appuntamenti, opere e attività con il coinvolgimento di
            artisti, studenti, comunità locali e pellegrini, in occasione del
            Giubileo 2025 che si terranno da settembre a novembre 2025, tutti a
            ingresso gratuito.
          </p>
          <p>
            Il tema dell’acqua costituisce il fulcro dell’intera manifestazione,
            affrontato secondo un duplice registro: come elemento fondativo
            della storia di Roma e fonte d’ispirazione per l’immaginario
            artistico; e come risorsa naturale preziosa, sempre più al centro di
            riflessioni contemporanee legate all’unione, alla condivisione e
            alla sostenibilità. A partire da questi presupposti, il progetto
            individua come luoghi d’intervento alcuni acquedotti e aree
            adiacenti – spazi verdi, siti simbolici, contesti pubblici e privati
            – nella zona sud-est della città. Sono previste, tra l’altro,
            videoproiezioni sulle pareti dell’Acquedotto Marcio Felice,
            all’interno del Parco di Tor Fiscale, e in altri luoghi del
            Municipio V e del Municipio VII.
          </p>
        </div>
      </div>
      <div className={styles.Links}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px", // espace entre le texte et le logo
            marginTop: "20px",
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Click on Logo
          </span>
          <a
            href="https://ilraccontodellacqua.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Logo Il Racconto dell'Acqua"
            title="Visitez Il Racconto dell'Acqua"
          >
            <img
              src={LogoOndaBlue2}
              alt="Logo Il Racconto dell'Acqua"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "5px",
                boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          </a>
        </div>
      </div>

      <ScrollToTop />
      <BackButton />
    </div>
  );
};

export default Acqua;
