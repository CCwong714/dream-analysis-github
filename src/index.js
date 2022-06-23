import { ChakraProvider } from '@chakra-ui/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageContextProvider from './context/LanguageContext';
import ResultsContextProvider from './context/ResultsContext';
import './utils/i18n';
import theme from './utils/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <LanguageContextProvider>
      <ResultsContextProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </ResultsContextProvider>
    </LanguageContextProvider>
  </StrictMode>
);
