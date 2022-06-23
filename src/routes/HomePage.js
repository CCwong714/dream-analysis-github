import { Flex } from '@chakra-ui/react';
import { Fragment, useContext } from 'react';
import CardHome from '../components/CardHome';
import { LanguageContext } from '../context/LanguageContext';
import { ResultsContext } from '../context/ResultsContext';
import { spacing } from '../utils';

const HomePage = () => {
  const { languageCode } = useContext(LanguageContext);
  const { commonResults } = useContext(ResultsContext);

  return (
    <Flex
      justifyContent='center'
      gap={spacing.vertical}
      marginY={spacing.vertical}
      wrap={['wrap', 'wrap', 'nowrap']}
    >
      {commonResults.map((item) => (
        <Fragment key={item.cat}>
          <CardHome
            alt={item.content}
            src={item.image}
            title={item.content}
            to={`${item.cat.toLowerCase()}/${languageCode}`}
          />
        </Fragment>
      ))}
    </Flex>
  );
};

export default HomePage;
