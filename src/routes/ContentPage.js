import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import InfiniteLayout from '../components/InfiniteLayout';
import PageTopBar from '../components/PageTopBar';
import { LanguageContext } from '../context/LanguageContext';
import { ResultsContext } from '../context/ResultsContext';
import { API_BASE_URL, ITEMS_PER_PAGE } from '../utils';
import changePageContent from '../utils/changePageContent';
import createOptions from '../utils/createOptions';
import getResultItem from '../utils/getResultItem';

const ContentPage = () => {
  const { languageCode } = useContext(LanguageContext);
  const { commonResults } = useContext(ResultsContext);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { cat, lang } = useParams();

  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [firstLoadedLanguage] = useState(lang);
  const [currentLanguage, setCurrentLanguage] = useState(lang);

  const { t } = useTranslation();
  const language = pathname.slice(5);
  const total = getResultItem(commonResults, cat)?.total;
  const options = createOptions(total);

  useEffect(() => {
    setCurrentLanguage(languageCode);
    setResults([]);
    setIndex(0);

    changePageContent(currentLanguage, firstLoadedLanguage, navigate, cat);
    fetchNextResults();
  }, [currentLanguage, lang, languageCode]);

  const fetchNextResults = () => {
    const url = `${API_BASE_URL}/content/${cat}/${languageCode}/${index}`;

    axios.get(url).then((res) => {
      setResults([...results, ...res.data]);
      setIndex(index + ITEMS_PER_PAGE);
    });

    if (results.length >= total) {
      setHasMore(false);
      return;
    }
  };

  const changeRangeHandler = (selectedRange) => {
    const { value } = selectedRange.target;
    const valueInt = Number(value);

    setIndex(valueInt);
    navigate(`/${cat}/${language}/${valueInt}`);
  };

  return (
    <>
      <PageTopBar
        category={cat}
        translation={t}
        changeRangeHandler={changeRangeHandler}
        defaultValue={index}
        options={options}
      />
      <InfiniteLayout
        category={cat}
        getResults={fetchNextResults}
        hasMore={hasMore}
        results={results}
      />
      <Outlet />
    </>
  );
};

export default ContentPage;
