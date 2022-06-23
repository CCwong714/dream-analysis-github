import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ContentPage from './routes/ContentPage';
import HomePage from './routes/HomePage';
import RangeContentPage from './routes/RangeContentPage';
import SearchResultsPage from './routes/SearchResultsPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/:cat/:lang' element={<ContentPage />} />
          <Route
            path='/:cat/:lang/:startIndex'
            element={<RangeContentPage />}
          />
          <Route path='/search/:lang' element={<SearchResultsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
