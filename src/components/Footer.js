import React from "react";

import "../Global.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={styles.Footer}>
        <div className={styles.FooterBandeCouleur}>
          {/* <img src={image5} alt="Logo Ciel in Città" /> */}

          <div className={styles.FooterContactInfo}>
            <span className={styles.FooterTelephone}>
              tel: &nbsp; <a href="tel:+393896391150">389 639 1150</a>
            </span>
            <span className={styles.FooterEmail}>
              mail: &nbsp;{" "}
              <a href="mailto:cielincitta@gmail.com">cielincitta@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer; //
