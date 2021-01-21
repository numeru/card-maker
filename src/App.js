import Login from "./components/Login";
import styles from "./App.module.css";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";

function App({ authService, FileInput, cardRepository }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Route exact path={["/", "/Login"]}>
          <Login authService={authService} />
        </Route>
        <Route path="/Main">
          <Main
            authService={authService}
            FileInput={FileInput}
            cardRepository={cardRepository}
          />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
