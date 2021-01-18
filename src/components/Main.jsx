import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Main.module.css";
import { useHistory } from "react-router-dom";
import Maker from "./Maker";
import Card from "./Card";

const Main = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        if (!user) {
          history.push("/");
        }
      });
  });

  return (
    <div className={styles.main}>
      <Header onLogout={onLogout} />
      <section className={styles.page}>
        <Maker />
        <Card />
      </section>
      <Footer login={true} />
    </div>
  );
};

export default Main;
