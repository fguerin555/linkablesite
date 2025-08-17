import React from "react";
import Styles from "./Curic.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import { useTranslation, Trans } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa"; // Ajouté pour l'icône

const CuricIrma = () => {
  const { t } = useTranslation();
  const renderWithLineBreaks = (text) =>
    text.split(/<br\s*\/?>/).map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  // Récupération des données traduites
  const paragraphs = t("about.person1.currictxt", { returnObjects: true });
  const email = t("about.person1.email");
  const site1 = t("about.person1.site1");

  return (
    <div className={Styles.CuricIrma}>
      {Array.isArray(paragraphs) &&
        paragraphs.map((para, index) => {
          // Vérifie si le paragraphe contient un lien dynamique
          const hasEmail = para.includes("<emailLink />");
          const hasSite1 = para.includes("<siteLink1 />");

          if (hasEmail || hasSite1) {
            return (
              <p key={index}>
                <Trans
                  i18nKey={`about.person1.currictxt.${index}`}
                  components={{
                    emailLink: (
                      <a href={`mailto:${email}`} className={Styles.link}>
                        {email}
                      </a>
                    ),
                    siteLink1: (
                      <a
                        href={site1}
                        // target="_blank"
                        rel="noopener noreferrer"
                        className={Styles.link}
                      >
                        <FaExternalLinkAlt />
                      </a>
                    ),
                  }}
                />
              </p>
            );
          }
          // ✅ Paragraphe sans lien dynamique mais avec <br />
          return <p key={index}>{renderWithLineBreaks(para)}</p>;
        })}

      <BackButton />
      <ScrollToTop />
    </div>
  );
};

export default CuricIrma;
