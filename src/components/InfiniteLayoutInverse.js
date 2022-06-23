import { Flex } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { spacing } from '../utils';
import CardGroup from './CardGroup';
import CardGroupLayout from './CardGroupLayout';

const InfiniteLayoutInverse = ({
  category,
  getResults,
  hasMore,
  isLoadPrevious,
  results,
}) => {
  return (
    <Flex
      textAlign='center'
      flexDirection='column-reverse'
      marginBottom={isLoadPrevious ? spacing.vertical : 0}
    >
      <InfiniteScroll
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        dataLength={results.length}
        hasMore={hasMore}
        inverse={true}
        next={getResults} // optional
      >
        <CardGroupLayout>
          <CardGroup category={category} data={results} />
        </CardGroupLayout>
      </InfiniteScroll>
    </Flex>
  );
};

export default InfiniteLayoutInverse;
