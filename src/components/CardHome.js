import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Loader from '../assets/loading.gif';

const CardHome = ({ alt, src, title, to }) => {
  const { t } = useTranslation();

  return (
    <Flex
      as={Link}
      to={to}
      alignItems={'center'}
      border='1px'
      borderColor='brandYellow'
      borderRadius='md'
      cursor='pointer'
      flexBasis={['none', 'none', 300]}
      flexDirection={['row', 'row', 'column']}
      justifyContent={'space-between'}
      height='auto'
      width={['100%', '90%', '80%']}
    >
      <Image
        borderBottom={['0', '0', '1px']}
        borderBottomColor='brandYellow'
        borderTopLeftRadius='md'
        borderTopRightRadius='md'
        height={['150', '200', '300', '400']}
        width={['50%', '50%', '100%']}
        htmlHeight={['150', '200', '300', '400']}
        htmlWidth='300'
        objectFit={['contain', 'contain', 'cover', 'cover']}
        padding={[2, 2, 0]}
        alt={alt}
        fallbackSrc={Loader}
        // loading='lazy'
        src={src}
      />
      <Flex
        flexDirection='column'
        gap={2}
        justifyContent={['center', 'center', 'space-between']}
        padding={[2, 2, 0]}
        height={['100%', '100%', 'auto']}
        width={['50%', '50%', '100%']}
      >
        <Heading
          as='h2'
          color='brandText'
          fontSize={['md', 'lg', 'xl', '3xl']}
          padding={[2, 4]}
          textAlign='center'
          textTransform='capitalize'
        >
          {title}
        </Heading>
        <Button
          backgroundColor='brandYellow'
          borderRadius='md'
          borderTopLeftRadius={['md', 'md', 'none']}
          borderTopRightRadius={['md', 'md', 'none']}
          // colorScheme='yellow'
          fontSize={['md', 'lg']}
          marginX='auto'
          size='md'
          variant='unstyled'
          width={['90%', '60%', '100%']}
          _hover={{ backgroundColor: 'yellow.400' }}
        >
          {t('enter')}
        </Button>
      </Flex>
    </Flex>
  );
};

export default CardHome;
