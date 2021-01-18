import React, { useContext } from "react";
import styles from "./Footer.module.css";

const Footer = ({ login }) => {
  return (
    <footer className={login ? styles.footer_login : styles.footer}>
      <p className={styles.title}>Code Your Dream</p>
    </footer>
  );
};

export default Footer;
