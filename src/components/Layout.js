import { Box } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';
import { ResultsContext } from '../context/ResultsContext';
import { headerBg, maxWidth, spacing } from '../utils';
import fetchCategoryData from '../utils/fetchCategoryData';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
  const { languageCode } = useContext(LanguageContext);
  const { updateCommonResults } = useContext(ResultsContext);

  useEffect(() => {
    fetchCategoryData(languageCode, updateCommonResults);
  }, [languageCode]);

  return (
    <>
      <ScrollToTop />
      <Box
        as='header'
        backgroundColor={headerBg}
        boxShadow='sm'
        position='sticky'
        top='0'
        zIndex='999'
      >
        <Header />
      </Box>
      <Box
        as='main'
        marginX='auto'
        maxWidth={maxWidth}
        paddingBottom={spacing.vertical}
        paddingX={spacing.horizontal}
      >
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
