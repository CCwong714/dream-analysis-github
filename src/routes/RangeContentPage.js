import { Box } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonLoadMore from '../components/ButtonLoadMore';
import InfiniteLayout from '../components/InfiniteLayout';
import InfiniteLayoutInverse from '../components/InfiniteLayoutInverse';
import PageTopBar from '../components/PageTopBar';
import { LanguageContext } from '../context/LanguageContext';
import { ResultsContext } from '../context/ResultsContext';
import {
  API_BASE_URL,
  FIRST_ITEM_GZT,
  FIRST_ITEM_QZT,
  FIRST_ITEM_WZT,
  ITEMS_PER_PAGE,
} from '../utils';
import changeResultContent from '../utils/changeResultContent';
import createOptions from '../utils/createOptions';
import getResultItem from '../utils/getResultItem';

const RangeContentPage = () => {
  const { languageCode } = useContext(LanguageContext);
  const { commonResults } = useContext(ResultsContext);

  const navigate = useNavigate();
  const { cat, lang, startIndex } = useParams();

  const [results, setResults] = useState([]);
  const [index, setIndex] = useState(Number(startIndex));
  const [hasMore, setHasMore] = useState(true);
  const [firstLoadedLanguage] = useState(lang);
  const [currentLanguage, setCurrentLanguage] = useState(lang);

  const [prevResults, setPrevResults] = useState([]);
  const [prevIndex, setPrevIndex] = useState(
    Number(startIndex) - ITEMS_PER_PAGE
  );
  const [prevHasMore, setPrevHasMore] = useState(true);
  const [loadingPrevious, setLoadingPrevious] = useState(false);
  const [isPreviousLoaded, setIsPreviousLoaded] = useState(false);

  const { t } = useTranslation();
  const total = getResultItem(commonResults, cat)?.total;
  const options = createOptions(total);

  useEffect(() => {
    setCurrentLanguage(languageCode);
    setResults([]);
    setPrevResults([]);
    setIndex(Number(startIndex));
    setIsPreviousLoaded(false);

    changeResultContent(
      languageCode,
      firstLoadedLanguage,
      navigate,
      cat,
      Number(startIndex)
    );
    fetchNextResults();
    resetPreviousLoading();
  }, [currentLanguage, lang, languageCode, startIndex]);

  const resetPreviousLoading = () => {
    if (Number(startIndex) === 0) {
      setLoadingPrevious(false);
      setPrevHasMore(false);
      setIsPreviousLoaded(false);
    } else {
      setPrevHasMore(true);
    }
  };

  const fetchNextResults = () => {
    const url = `${API_BASE_URL}/content/${cat}/${lang}/${index}`;

    axios.get(url).then((res) => {
      setResults([...results, ...res.data]);
      setIndex(index + ITEMS_PER_PAGE);
    });

    if (
      results.length > 0 &&
      Number(results[results.length - 1].number) >= total - 1
    ) {
      setHasMore(false);
      return;
    }
  };

  const fetchPreviousResults = () => {
    setLoadingPrevious(true);
    setPrevHasMore(true);
    setIsPreviousLoaded(true);

    const url = `${API_BASE_URL}/content/${cat}/${lang}/${prevIndex}`;

    axios.get(url).then((res) => {
      setPrevResults([...res.data, ...prevResults]);
      setPrevIndex(prevIndex - ITEMS_PER_PAGE);
      setLoadingPrevious(false);
    });

    if (
      prevResults.length > 0 &&
      (prevResults[0].number === FIRST_ITEM_GZT ||
        prevResults[0].number === FIRST_ITEM_QZT ||
        prevResults[0].number === FIRST_ITEM_WZT)
    ) {
      setLoadingPrevious(false);
      setPrevHasMore(false);
      return;
    }
  };

  const changeRangeHandler = (selectedRange) => {
    const { value } = selectedRange.target;
    const valueInt = Number(value);

    resetPreviousLoading();

    setIndex(valueInt);
    navigate(`/${cat}/${lang}/${valueInt}`);
    setResults([]);
    setPrevResults([]);
    setPrevIndex(valueInt - ITEMS_PER_PAGE);
    setHasMore(true);
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
      <Box textAlign='center'>
        <ButtonLoadMore
          isLoadPrevious={true}
          isLoading={loadingPrevious}
          text={prevHasMore ? 'Load Previous' : 'The Beginning'}
          onClick={fetchPreviousResults}
          isDisabled={prevHasMore ? false : true}
        />
      </Box>
      <InfiniteLayoutInverse
        category={cat}
        getResults={fetchPreviousResults}
        hasMore={prevHasMore}
        isLoadPrevious={isPreviousLoaded}
        results={prevResults}
      />
      <InfiniteLayout
        isRangeContentPage={true}
        category={cat}
        getResults={fetchNextResults}
        hasMore={hasMore}
        results={results}
      />
    </>
  );
};

export default RangeContentPage;
