import React from "react";
import { Link } from "react-router-dom";
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

const Ciel = () => {
  return (
    <div className={styles.CielPage}>
      <div className={styles.BandeRose}>
        <div className={styles.Titolo}>
          <h1>PROGETTO CIEL'IN CITTÀ</h1>
        </div>
        <div className={styles.LogoCIC}></div>
        <div className={styles.SottoTitolo}>
          <p> Un idea, anzi una necessità di Irma Alonzo </p>
        </div>
      </div>{" "}
      <div className={styles.CICvideo}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/At4tr6_RdtA?si=OgjDo8rNJajlyc07"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          alt="Video dell'inaugurazione di Ciel in Ciità sulle mura di Grosseto"
        />
      </div>
      <div className={styles.Stampa}>
        <Link to="/Stampa">
          {" "}
          <button>Rassegna stampa</button>
        </Link>
      </div>
      <div className={styles.InauguraMuraTexte}>
        <h2>UN NUOVO PARCO D'ARTE PER I BAMBINI</h2>
        <h3>AL BASTIONE DELLA CAVALLERIZZA SULLE MURA MEDICEE DI GROSSETO</h3>
        <h4>28 SETTEMBRE 2024</h4>
        <p>Inaugurazione delle sculture gioco</p>
      </div>
      <div className={styles.ImagesContainer}>
        <img src={image13} alt="Inaugurazione sulle Mura 1" />
        <img src={image14} alt="Inaugurazione sulle Mura 2" />
        <img src={image15} alt="Inaugurazione sulle Mura 3" />
      </div>
      <div className={styles.SalaEden}>
        <h3>SALA EDEN 8 maggio 2024</h3>
        <p>
          Dopo Prato. Inaugurazione con le autorità, del progetto a Grosseto. In
          questa foto la sala Eden dove, in una mostra itinerante che toccherà
          anche la città di Massa, ci sono i giocchi che facevano i nonni o i
          genitori delle bambine e dei bambini che li hanno interpretati.
        </p>
        <img src={image18} alt="Laboratorio Sala Eden" />
      </div>
      <div className={styles.MuseoPecci}>
        <h3>MUSEO PECCI 5 aprile 2024</h3>
        <p>
          Inaugurazione al museo Pecci di Prato dell'area playground realizzata
          a seguito del progetto Ciel'in Città.
        </p>
        <div className={styles.Pecci}>
          <Link to="/Pecci">
            {" "}
            <button>Museo Pecci</button>
          </Link>
        </div>
        <img src={image19} alt="Inaugurazione al Museo Pecci" />
      </div>
      <div className={styles.Boschetto}>
        <h2>IL BOSCHETTO</h2>
        <p>
          Nel 1995 quando l'associazione Ciel'in Città ancora non esisteva, Irma
          Alonzo ha proposto al comune di Grosseto un parco giochi creato da
          artisti e destinato ai bambini/e, nacque un parco bellissimo che si
          chiamava il Boschetto.
        </p>

        <img src={image16} alt="Muro sonoro parco del boschetto" />
        <img src={image17} alt="Muro sonoro con i bambini" />
        <div className={styles.CatalogoBoschetto}>
          <Link to="/catalogo">
            {" "}
            <button>Catalogo</button>
          </Link>
        </div>
      </div>
      <div className={styles.BoschettoCopertina}>
        <img src={image20} alt="Copertina del catalogo Il Boschetto" />
      </div>
      <div className={styles.Boschetto2}>
        <p>
          L'incuria ed il vandalismo hanno ridotto le opere ad un ammasso di
          oggetti degradati. Irma Alonzo, tramite l'associazione Ciel'in Città a
          deciso di ripresentare il progetto per la riqualificazione al Comune
          di Grosseto dopo che molta stampa locale si interrogava del perchè
          dell'abbandono di un luogo cosi caro ai cittadini. È nato Ciel'in
          città dall'unione della sua idea e la disponibilità dell'Assessore
          Ginanneschi che però ha voluto spostare il parco sopra le Mura
          Medicee.
        </p>
        <div className={styles.Tirreno}>
          <Link to="/Tirreno">
            {" "}
            <button>Articolo Il Tirreno</button>
          </Link>
        </div>
        <ScrollToTop />
        <BackButton />
      </div>
    </div>
  );
};

export default Ciel;
