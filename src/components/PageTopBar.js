import { Flex } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { spacing } from '../utils';
import getPageTitle from '../utils/getPageTitle';
import Breadcrumb from './Breadcrumb';
import RangeSelection from './RangeSelection';

const PageTopBar = ({
  category,
  translation,
  changeRangeHandler,
  defaultValue,
  options,
}) => {
  const { cat, lang } = useParams();

  return (
    <Flex
      alignItems='center'
      flexDirection={['column', 'row']}
      justifyContent='space-between'
      marginTop={spacing.vertical}
    >
      <Breadcrumb
        path={`/${cat}/${lang}`}
        pathName={getPageTitle(category, translation)}
      />
      <RangeSelection
        changeRange={changeRangeHandler}
        defaultValue={defaultValue}
        options={options}
      />
    </Flex>
  );
};

export default PageTopBar;
