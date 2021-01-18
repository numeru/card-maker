import React, { useEffect } from "react";
import styles from "./Login.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMain = (userId) => {
    history.push({
      pathname: "/Main",
      state: { id: userId },
    });
  };
  const onLogin = (e) => {
    authService //
      .login(e.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  useEffect(() => {
    authService //
      .onAuthChange((user) => {
        user && goToMain(user.uid);
      });
  });

  return (
    <div className={styles.login}>
      <Header />
      <section className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <button className={styles.button} onClick={onLogin}>
          Google
        </button>
        <button className={styles.button} onClick={onLogin}>
          Github
        </button>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
