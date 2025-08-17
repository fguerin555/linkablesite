import React from "react";
import Styles from "./Curic.module.css";
import ScrollToTop from "../../components/ScrollToTop";
import BackButton from "../../components/BackButton";
import { useTranslation, Trans } from "react-i18next";
import { FaExternalLinkAlt } from "react-icons/fa"; // Ajouté pour l'icône

const CuricFred = () => {
  const { t } = useTranslation();
  const renderWithLineBreaks = (text) =>
    text.split(/<br\s*\/?>/).map((line, i) => (
      <React.Fragment key={i}>
        {line}
        <br />
      </React.Fragment>
    ));
  // Récupération des données traduites
  const paragraphs = t("about.person3.currictxt", { returnObjects: true });
  const email = t("about.person3.email");
  const site1 = t("about.person3.site1");
  const site2 = t("about.person3.site2");

  return (
    <div className={Styles.CuricFred}>
      {Array.isArray(paragraphs) &&
        paragraphs.map((para, index) => {
          // Vérifie si le paragraphe contient un lien dynamique
          const hasEmail = para.includes("<emailLink />");
          const hasSite1 = para.includes("<siteLink1 />");
          const hasSite2 = para.includes("<siteLink2 />");

          if (hasEmail || hasSite1 || hasSite2) {
            return (
              <p key={index}>
                <Trans
                  i18nKey={`about.person3.currictxt.${index}`}
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
                    siteLink2: (
                      <a
                        href={site2}
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

export default CuricFred;
