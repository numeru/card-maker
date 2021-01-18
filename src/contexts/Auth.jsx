import React, { createContext, useState } from "react";

const AuthContext = createContext({
  state: { login: false },
  actions: {
    setLogin: () => {},
  },
});

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const value = {
    state: { login },
    actions: { setLogin },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const { Consumer: AuthConsumer } = AuthContext;
export { AuthProvider, AuthConsumer };

export default AuthContext;
