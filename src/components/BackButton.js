import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import styles from "./BackButton.module.css";

const BackButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const toogleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toogleVisibility);
    return () => window.removeEventListener("scroll", toogleVisibility);
  }, []);

  const closeWindow = () => {
    navigate(-1);
  };

  return (
    <button
      className={`${styles["close-button"]} ${isVisible ? styles.show : ""}`}
      onClick={closeWindow}
    >
      <FaTimes />
    </button>
  );
};

export default BackButton;
