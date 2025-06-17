import React from "react";
import { Helmet } from "react-helmet-async";
import "../../Global.css";
import styles from "./Occhi.module.css";
import image6 from "../../assets/img/LocandinaONM.jpg";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Occhi = () => {
  return (
    <div>
      <Helmet>
        <title>Gli Occhi nelle Mani | Arte e Inclusione Sociale</title>
        <link rel="canonical" href="https://cielincitta.org/occhi" />
        <meta
          name="description"
          content="Scopri il progetto Gli Occhi nelle Mani: laboratori di scultura e percorsi sensoriali per persone non vedenti e ipovedenti, in collaborazione con il Museo Archeologico di Grosseto."
        />
        <meta
          name="keywords"
          content="Gli Occhi nelle Mani, arte inclusiva, scultura, tatto, accessibilità, Grosseto, Museo Archeologico, Auser, Unione Ciechi, cultura"
        />
        <meta name="author" content="Associazione Ciel'in Città" />

        {/* Open Graph per Facebook e social media */}
        <meta
          property="og:title"
          content="Gli Occhi nelle Mani | Arte e Inclusione Sociale"
        />
        <meta
          property="og:description"
          content="Laboratori artistici e percorsi sensoriali per favorire l’inclusione delle persone non vedenti. Un progetto di Ciel'in Città con il Museo Archeologico di Grosseto."
        />
        <meta
          property="og:image"
          content="https://cielincitta.org/assets/img/LocandinaONM.jpg"
        />
        <meta property="og:url" content="https://cielincitta.org/occhi" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gli Occhi nelle Mani | Arte e Inclusione Sociale"
        />
        <meta
          name="twitter:description"
          content="Scopri il progetto artistico e sensoriale per la comunità non vedente e ipovedente, promosso da Ciel'in Città."
        />
      </Helmet>

      <div className={styles.OcchiPage}>
        <div className={styles.Corsi}>
          <h1> GLI OCCHI NELLE MANI</h1>
          <h2>Inizio Laboratori di Scultura</h2>
          <h3>Insegnante: Irma Alonzo</h3>
          <p>Tutti i Martedi dal 11/02/2025 al 24/06/2025</p>
          <p> Dalle ore 15.30 alle 17.30</p>
          <p>Via Francesco Ferrucci, 5</p>
          <p>Grosseto</p>
        </div>
        <div className={styles.OcchiContentContainer}>
          <div className={styles.OcchiImageContainer}>
            <img src={image6} alt="Locandina Occhi nelle Mani" />
          </div>
          <div className={styles.OcchiTextContainer}>
            <div className={styles.Paragraphes}>
              <p>
                Con questo progetto si intende realizzare un percorso
                laboratoriale di scultura, di storia e memoria del territorio
                con due figure professionali: scultrice e tutor, e la creazione
                di percorsi sensoriali.
              </p>
              <span></span>
              <p>
                Il progetto è rivolto a soggetti in prevalenza non vedenti e
                ipovedenti di ogni età che, quando necessario, saranno
                accompagnati da personale Auser e aperto alla cittadinanza al
                fine di creare un gruppo integrato inclusivo per favorire lo
                scambio, la socializzazione, la reciproca conoscenza e le
                tematiche dell'universo non vedente.
              </p>
              <span></span>
              <p>
                Inoltre il progetto si avvale della collaborazione sinergica
                dell'Unione Italiana dei Cieci e degli Ipovedenti di Grosseto,
                del Museo Archeologico e d'Arte della Maremma, di Auser Grosseto
                e del Polo culturale Le Clarisse. La manipolazione dell'argilla,
                che di per se suscita emozioni primarie, durante i laboratori di
                scultura offre ai partecipanti la possibilità di esprimersi in
                modo creativo attraverso il tatto e di collegarsi con il nostro
                patrimonio archeologico.{" "}
              </p>

              <span></span>
              <p>
                Si prevede, con la supervisione e collaborazione scientifica del
                Museo, la creazione, da parte della scultrice Irma Alonzo, di
                copie di manufatti etruschi, ex-voto, da poter essere usati come
                modelli tattili dentro un persorso di storia culturale e
                antropologica del territorio. Inoltre , in occasione dell'evento
                finale, durante la Notte Visibile, anche per sensibilizzare il
                pubblico vedente, sono previsti percorsi sensoriali al buio,
                esposizione dei materiali e dei relativi manufatti.
              </p>
            </div>
            <div className={styles.Bvideo}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/jd80lJqmoOA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                alt="Video del laboratorio di scultura"
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
