import React from "react";
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
  return (
    <div>
      <div className={styles.NuvolaPage}>
        <div className={styles.CICbody}>
          <div className={styles.NuvolaContentContainer}>
            <div className={styles.NuvolaLocandina}>
              <img src={image7} alt="Locandina Nuvola Bianca" />
            </div>
            <div className={styles.NuvolaTextcontainer}>
              <p className={styles.p1}>
                {" "}
                CON "NUVOLA BIANCA" SI INTENDE VALORIZZARE IL FUMETTO CON
                ESPRESSIONE ARTISTICA E FAVORIRNE LA DIFFUSIONE ATTRAVERSO LE
                SCUOLE, LE ISTITUZIONI CULTURALI, E LE BIBLIOTECHE AL FINE DI
                SVILUPPARE RETI E SISTEMI DI PROMOZIONE E DIFFUSIONE IN ITALIA E
                ALL'ESTERO.
              </p>
              <p className={styles.p2}>
                SI INTENDE INOLTRE CONTINUARE A FAR SI CHE LA CREATIVITÀ DIVENTI
                POTENTE MEZZO PER CONTRASTARE L'ABBANDONO SCOLASTICO.
              </p>
              <p className={styles.p3}>
                QUESTO PROGETTO INTENDE CONTRASTARE L'ABBANDONO SCOLASTICO CHE
                COLPISCE QUEI GIOVANI CHE LASCIANO GLI STUDI CON LA SOLA LICENZA
                MEDIA, SENZA CONSEGUIRE ULTERIORI TITOLI DI STUDIO O QUALIFICHE
                PROFESSIONALI.
              </p>
              <div className={styles.Bvideo}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/k0cREgVlrDg?si=0Da-AFTDtF8Vfu2-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className={styles.Part2}>
            <h1>GLI ARTISTI DELL'ANNO SCOLASTICO 2022/2023</h1>
            <div className={styles.Fumetti}>
              <div className={styles.ArtistPackage}>
                <img src={image8} alt="Joker de Batman" />
                <div>
                  <h3 className={styles.Nome}>Giancarlo Caracuzzo</h3>
                  <p className={styles.Paragraphe}>
                    Giancarlo Caracuzzo inizia la sua carriera di illustratore e
                    disegnatore di fumetti circa 40 anni fa, collaborando con i
                    più importanti editori italiani, europei, americani e non
                    solo. Ha designato storie per Sergio Bonelli Editore,
                    Mondadori, Marvel, DC Comics, Delcourt, Dupuis, Soleil ed
                    editori australiani. Ha illustrato libri, collaborato come
                    storyboard artist per il cinema e la pubblicità. È fra i
                    soci fondatori nonché insegnante della Scuola Romana dei
                    Fumetti.
                  </p>
                </div>
              </div>
              <div className={styles.ArtistPackage}>
                <img src={image9} alt="Ragazza Volante Manga" />
                <div>
                  <h3 className={styles.Nome}>Lorenza Ricci</h3>
                  <p className={styles.Paragraphe}>
                    Lorenza Ricci è una illustratrice romana da sempre
                    appassionata di fumetti. Ama fondere diversi stili grafici
                    sperimentando l'utilizzo di differenti materiali. È
                    riconoscibile per i suoi bellissimi manga.
                  </p>
                </div>
              </div>
              <div className={styles.ArtistPackage}>
                <img src={image11} alt="Corto Maltese" />
                <div>
                  <h3 className={styles.Nome}>Federico Mele</h3>
                  <p className={styles.Paragraphe}>
                    Federico Mele scrive e racconta storie con i disegni da
                    quando ha cominciato a parlare e tenere una matita in mano.
                    Lavora come fumettista, illustratore, storyboardista ed
                    insegnante.
                  </p>
                </div>
              </div>
              <div className={styles.ArtistPackage}>
                <img src={image10} alt="Don Chisciotte" />
                <div>
                  <h3 className={styles.Nome}>Riccardo Colosimo</h3>
                  <p className={styles.Paragraphe}>
                    Riccardo Colosimo, illustratore e disegnatore di fumetti,
                    dopo aver frequentato la Scuola Romana dei Fumetti dove ora
                    insegna, ha pubblicato in Italia e Francia; attualmente sta
                    disegnando una graphic novel per il mercato americano.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
        <BackButton />;
      </div>
    </div>
  );
};

export default Nuvola;
