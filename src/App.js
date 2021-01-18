import Login from "./components/Login";
import styles from "./App.module.css";
import { AuthProvider } from "./contexts/Auth";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";

function App({ authService }) {
  return (
    <AuthProvider>
      <div className={styles.app}>
        <BrowserRouter>
          <Route exact path={["/", "/Login"]}>
            <Login authService={authService} />
          </Route>
          <Route path="/Main">
            <Main authService={authService} />
          </Route>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
