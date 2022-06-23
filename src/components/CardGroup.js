import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CardCategory from './CardCategory';

const CardGroup = ({ data, isSearchResult }) => {
  return (
    <>
      {data.map((result) => (
        <Fragment key={uuidv4()}>
          <CardCategory
            isSearchResult={isSearchResult}
            category={result.cat}
            number={result.number}
            src={result.image}
            title={result.content}
          />
        </Fragment>
      ))}
    </>
  );
};

export default CardGroup;
