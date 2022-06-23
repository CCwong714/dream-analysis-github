import { Grid } from '@chakra-ui/react';
import { spacing } from '../utils';

const CardGroupLayout = ({
  children,
  isRangeContentPage = false,
  isSearchPage,
}) => {
  return (
    <>
      {!isSearchPage ? (
        <Grid
          gap={spacing.vertical}
          justifyContent='center'
          marginTop={isRangeContentPage ? 0 : 4}
          templateColumns={[
            'repeat(auto-fit, minmax(120px, 1fr))',
            'repeat(auto-fit, minmax(150px, 1fr))',
            'repeat(auto-fit, minmax(150px, 1fr))',
            'repeat(auto-fit, minmax(200px, 1fr))',
          ]}
          textAlign='center'
          wrap='wrap'
        >
          {children}
        </Grid>
      ) : (
        <Grid
          gap={spacing.vertical}
          justifyContent='center'
          marginTop={isRangeContentPage ? 0 : 4}
          templateColumns={[
            'repeat(auto-fill, minmax(120px, 1fr))',
            'repeat(auto-fill, minmax(150px, 1fr))',
            'repeat(auto-fill, minmax(150px, 1fr))',
            'repeat(auto-fill, minmax(200px, 1fr))',
          ]}
          textAlign='center'
          wrap='wrap'
        >
          {children}
        </Grid>
      )}
    </>
  );
};

export default CardGroupLayout;
