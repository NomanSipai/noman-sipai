import { createContext } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  return (
    <PortfolioContext.Provider value={{}}>{children}</PortfolioContext.Provider>
  );
};

export default PortfolioContext;
