import { createContext } from "react";

const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const token = "rghrgh";
  return (
    <AppContext.Provider value={{ token }}>{children}</AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
