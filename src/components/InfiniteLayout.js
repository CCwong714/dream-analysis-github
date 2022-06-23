import { Box } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ButtonLoadMore from './ButtonLoadMore';
import CardGroup from './CardGroup';
import CardGroupLayout from './CardGroupLayout';
import EndMessage from './EndMessage';

const InfiniteLayout = ({
  category,
  getResults,
  hasMore,
  results,
  isRangeContentPage,
}) => {
  return (
    <Box textAlign='center'>
      <InfiniteScroll
        dataLength={results.length}
        endMessage={<EndMessage message='The End' />}
        hasMore={hasMore}
        loader={<ButtonLoadMore text='Load More' />}
        next={getResults}
      >
        <CardGroupLayout isRangeContentPage={isRangeContentPage}>
          <CardGroup category={category} data={results} />
        </CardGroupLayout>
      </InfiniteScroll>
    </Box>
  );
};

export default InfiniteLayout;
