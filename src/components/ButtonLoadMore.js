import { Button } from '@chakra-ui/react';

const ButtonLoadMore = ({
  isDisabled,
  isLoading = true,
  isLoadPrevious,
  isSearchPage,
  onClick,
  text,
}) => {
  return (
    <Button
      colorScheme='whiteAlpha'
      marginTop={isSearchPage ? 12 : 4}
      marginBottom={isLoadPrevious ? 2 : 0}
      textTransform='capitalize'
      isDisabled={isDisabled}
      isLoading={isLoading}
      loadingText='Loading'
      width={!isSearchPage ? '100%' : 'auto'}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default ButtonLoadMore;
