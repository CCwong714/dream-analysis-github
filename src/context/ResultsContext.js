import { createContext, useState } from 'react';

export const ResultsContext = createContext();

const ResultsContextProvider = ({ children }) => {
  const [commonResults, setCommonResults] = useState([]);

  const updateCommonResults = (data) => {
    setCommonResults([...data]);
  };

  return (
    <ResultsContext.Provider
      value={{
        commonResults,
        updateCommonResults,
      }}
    >
      {children}
    </ResultsContext.Provider>
  );
};

export default ResultsContextProvider;
