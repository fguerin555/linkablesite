import React from "react";
import { Link } from "react-router-dom";
import "../../Global.css";
import styles from "./About.module.css";
import logo from "../../assets/img/Logo2.png";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import image1 from "../../assets/img/IRMA.jpeg";
import image2 from "../../assets/img/VANESSA.jpg";
import image3 from "../../assets/img/FREDERIC.jpeg";

const About = () => {
  return (
    <div>
      <div className={styles.AboutPage}>
        <div className={styles.Logo2}>
          <img src={logo} alt="Logo Ciel'in Città" />{" "}
        </div>

        <div className={styles.Presentazione}>
          <p>
            L'Ente nasce nel 2018 con il progetto Ciel'in città, sculture-gioco
            in aree da riqualificare, ideato dall'artista Irma Alonzo nato a sua
            volta, dal progetto "Il Boschetto" del 1995, "Da giardino
            abbandonato a parco di sculture-gioco: tesi Accademia Belle Arti di
            Carrara- Irma Alonzo", ideato dalla stessa, per la formazione
            culturale di bambine e bambini della scuola primaria e secondaria .
            Il Parco di Collodi ed il Museo Pecci furono tra i sostenitori. Nel
            progetto Ciel'in città, creato per contrastare l'abbandono
            scolastico, l'Ente omonimo risulta partner tra gli altri con i
            Comuni di Grosseto, Massa, Prato ed il Museo Pecci, il bando “Un
            passo avanti” emesso da "Con i bambini" richiedeva una onlus. Lo
            scopo dell'associazione Ciel'in Città è divulgare l'arte nelle sue
            molteplici discipline proponendo laboratori per contrastare la
            povertà educativa e interventii artistico-educativi per
            riqualificare aree urbane degradate. L’attività principale svolta
            dall’Associazione, la cui attività appena nata é stata interrotta
            dal Covid, è l’ideazione e realizzazione di progetti ed eventi
            fruibili sia in luoghi istituzionalmente deputati della cultura,
            scuole e centri culturali, sia in sedi tradizionalmente non deputate
            a tale scopo, parchi e giardini. Un impegno rivolto alla creazione
            di “nuove piazze” di libero confronto e partecipazione alla vita
            culturale che favoriscano la partecipazione di tutti cittadini.
          </p>

          <p>
            2018 - 2024 Ideazione e realizzazione per la città di Grosseto del
            progetto CIEL'IN CITTA' a cui l'associazione ha dato il nome, che si
            sta realizzando sulle Mura Medicee al fine di contrastare la
            dispersione scolastica con l'arte in gioco.
          </p>

          <p>
            Creazione di un partenariato dove partecipano oltre all'associazione
            Ciel'in Città tre capoluoghi di Provincia della Toscana : Grosseto,
            Massa, Prato. Altri partners sono: Fondazione per le Arti
            Contemporanee L. Pecci, Fondazione Grosseto Cultura, Fondazione Le
            Mura, l Cooperativa sociale “Uscita di Sicurezza” , Istituto
            Artemisia Gentileschi di Massa, Argon iniziative, Associazione
            Spin8, Le Macchine Celibi soc.
            <span></span>
            Il Progetto è selezionato dall'Impresa sociale “Con i bambini” a
            seguito del bando “Un passo avanti”. Il progetto termina a dicembre
            del 2024 a seguito di proroghe concesse da “Con i bambini”
          </p>
          <p>
            2022/2023 - Ideazione e realizzazione del progetto NUVOLA BIANCA:
            contrasto alla povertà educativa attraverso il fumetto. Hanno
            partecipato le prime e seconde classi di tre iiIstituti Scolastici:
            Istituto Tecnico e Grafico e della Comunicazioe, il Liceo Artistico,
            l'Istituto Comprensivo n. 2 Giovanni Pascoli ed il Centro Culturale
            delle Clarisse dove sono stati realizzati da artisti di fama
            internazionale 4 laboratori di 16 ore per ogni Istituto a seguito
            del “ bando attività artistiche e culturali – bando ordinario 2022”
            della Fondazione CR Firenze
          </p>

          <p>
            2023-2024 L'ideazione dei progetti “STELLE SPLENDENTI” e “NUVOLA
            BIANCA FESTIVAL DIDATTICO” per la citta di Grosseto, hanno permesso
            di allargare la rete dei partners ed hanno altresì creato esperienze
            come capofila. E' iniziata una proficua collaborazione con tre
            assessori del Comune di Grosseto (Istruzione, Cultura e Lavori
            pubblici) e con quattro Istituti scolastici di Roma e tre di
            Grosseto.
          </p>
          <p>
            2024 Ideazione del progetto “ATENA” ( durata tre anni) in
            partenariato con il Polo Universitario Grossetano, il Polo Luciano
            Bianciardi, il Comune di Grosseto, l'associazione Ccibo Maremma per
            la creazione di laboratori nelle scuole e creazione di una nuova
            scuola con corsi gratuiti per il recupero delle materie scolastiche,
            laboratori di scultura, propedeutica al digitale.
          </p>
          <p>
            2024 Ideazione del progetto NUOVE PIAZZE in sinergia con il Comune
            di Grosseto. Esso consiste nella riqualificazione di un giardino
            pubblico e di quattro eventi in cui tutte le associazioni partner
            faranno iniziative per la cittadinanza Per questo progetto il Comune
            ha deciso di partecipare concretamente con risorse economiche sotto
            forma di lavori edili. Oltre al COMUNE DI GROSSETO gli altri partner
            sono: COESO; AUSER; UISP; cCIBO MAREMMA; Ass. INSIEME. Il progetto è
            in attesa di un bando per poter essere finanziato.
          </p>
          <p>
            2024-2025 Ideazione ed ora in fase di attuazione del progetto “GLI
            OCCHI NELLE MANI” finanziato dal Comune di Grosseto settore servizi
            per il cittadino e la famiglia - servizi sociali in collaborazione
            con il Museo Archeologico e d'Arte della Maremma ed in partenariato
            con Unione Italiana dei Ciechi con Unione Italiana dei Ciechi e
            degli Ipovedenti, con Auser e con il Polo Culturale Le Clarisse.
          </p>
        </div>
        <div className={styles.ImageContainer}>
          <div className={styles.ImageWrapper}>
            <img src={image1} alt="Irma Alonzo" />
            <p className={styles.ImageCaption}>Irma Alonzo </p>
            <p className={styles.ImageTitle}>Presidente</p>
            <div className={styles.CuricIrma}>
              <Link to="/curicIrma">
                {" "}
                <button>Curriculum</button>
              </Link>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <img src={image2} alt="Vanessa Roghi" />
            <p className={styles.ImageCaption}>Vanessa Roghi</p>
            <p className={styles.ImageTitle}>Vicepresidente</p>
            <div className={styles.CuricVanessa}>
              <Link to="/curicVanessa">
                {" "}
                <button>Curriculum</button>
              </Link>
            </div>
          </div>

          <div className={styles.ImageWrapper}>
            <img src={image3} alt="Frédéric Guérin" />
            <p className={styles.ImageCaption}>Frédéric Guérin</p>
            <p className={styles.ImageTitle}>Tesoriere</p>
            <div className={styles.CuricFred}>
              <Link to="/curicFred">
                {" "}
                <button>Curriculum</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Dati}>
          <h2>ASSOCIAZIONE CULTURALE</h2>
          <h2> CIEL'IN CITTA' ets</h2>
          <h4>Sede legale</h4>
          <h4>Viale Luigi Einaudi, 2 - 58100 GROSSETO</h4>
          <h4>Sede operativa</h4>
          <h4>Viale Luigi Einaudi, 2 - 58100 GROSSETO</h4>
          <h3>C.F. 97994670582</h3>
          <h3>Data costituzione 23.11.2018</h3>
          <h3>
            contatto : &nbsp; <a href="tel:+393896391150"> 389 639 1150</a>
          </h3>
          <h3>cielincitta@gmail.com </h3>
          <h3>irma.alonzo@pec.it</h3>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default About;
