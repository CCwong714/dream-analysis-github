import { SmallCloseIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import ButtonLoadMore from '../components/ButtonLoadMore';
import CardGroup from '../components/CardGroup';
import CardGroupLayout from '../components/CardGroupLayout';
import { LanguageContext } from '../context/LanguageContext';
import { API_BASE_URL } from '../utils';

const SearchResultsPage = () => {
  const { languageCode } = useContext(LanguageContext);
  const [numberOfResults, setNumberOfResults] = useState(0);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');

  const { t } = useTranslation();

  useEffect(() => {
    fetchResults();
  }, [searchQuery]);

  const fetchResults = async () => {
    const url = `${API_BASE_URL}/search/${languageCode}?search=${searchQuery}`;
    setLoading(true);
    const { data } = await axios.get(url);
    setResults([...data.data]);
    setNumberOfResults(data.total);
    setLoading(false);
  };

  const clearSearchResults = () => {
    navigate(-1);
  };

  return (
    <>
      <Breadcrumb
        isSearchPage
        path={`${pathname}${search}`}
        pathName={t('searchResults')}
      />
      {loading && (
        <ButtonLoadMore
          isSearchPage={true}
          isLoading={loading}
          text='Loading'
        />
      )}
      {!loading && (
        <>
          <Heading
            alignItems='center'
            color='brandText'
            display='flex'
            marginTop={4}
            fontWeight='normal'
            size='md'
          >
            {t('notifyResults', {
              numberOfResults: numberOfResults,
              query: searchQuery,
            })}
            {/* <Text
              as='span'
              fontWeight='bold'
              marginLeft={2}
              textDecoration='underline'
            >
              {searchQuery}
            </Text> */}
            <SmallCloseIcon
              border='1px'
              borderRadius='full'
              color='white'
              cursor='pointer'
              marginLeft={2}
              onClick={clearSearchResults}
            />
          </Heading>
          <CardGroupLayout isSearchPage={true}>
            <LazyLoadComponent>
              <CardGroup isSearchResult={true} data={results} />
            </LazyLoadComponent>
          </CardGroupLayout>
        </>
      )}
    </>
  );
};

export default SearchResultsPage;
