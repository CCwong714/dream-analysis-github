import { Flex, Image, Text } from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loader from '../assets/loading.gif';
import CardNumber from './CardNumber';
import CategoryLabel from './CategoryLabel';

const CardCategory = ({ category, isSearchResult, number, src, title }) => {
  return (
    <Flex
      alignItems='center'
      border='1px solid'
      borderColor='brandYellow'
      borderRadius='md'
      flexDirection='column'
      height='auto'
      textAlign='center'
    >
      <CardNumber number={number} />
      <Image
        borderRadius='md'
        color='white'
        fit={true}
        marginTop={4}
        htmlHeight='125'
        htmlWidth='125'
        width='60%'
        alt={title}
        fallbackSrc={Loader}
        src={src}
      />
      {isSearchResult ? <CategoryLabel category={category} /> : null}
      <Text
        color='brandText'
        fontSize={['md', 'lg', 'xl']}
        paddingX={[1, 2]}
        paddingY={2}
        size='sm'
        textTransform='lowercase'
        width='fit-content'
        wordBreak='break-word'
      >
        {title === '' ? 'N/A' : title}
      </Text>
    </Flex>
  );
};

export default CardCategory;
