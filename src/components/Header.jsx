import React from "react";
import styles from "./Header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={onLogout ? styles.header_login : styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          Logout
        </button>
      )}
      <img src="/images/logo.png" alt="logo" className={styles.logo} />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
};

export default Header;
