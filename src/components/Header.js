import { Flex } from '@chakra-ui/react';
import { headerBg, maxWidth, spacing } from '../utils';
import ButtonHome from './ButtonHome';
import LanguageSwitcher from './LanguageSwitcher';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <Flex
      id='header'
      alignItems='center'
      backgroundColor={headerBg}
      gap={4}
      justifyContent='space-between'
      marginX='auto'
      maxWidth={maxWidth}
      paddingX={spacing.horizontal}
      paddingY={spacing.headerVertical}
    >
      <ButtonHome />
      <SearchBar />
      <LanguageSwitcher />
    </Flex>
  );
};

export default Header;
