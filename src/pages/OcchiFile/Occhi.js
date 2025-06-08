import React from "react";
import "../../Global.css";
import styles from "./Occhi.module.css";
import image6 from "../../assets/img/LocandinaONM.jpg";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";

const Occhi = () => {
  return (
    <div>
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
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullScreen
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
