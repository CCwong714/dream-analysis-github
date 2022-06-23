import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { spacing } from '../utils';

const Breadcrumb = ({ isSearchPage, path, pathName }) => {
  const { t } = useTranslation();

  return (
    <ChakraBreadcrumb
      id='breadCrumb'
      color='brandText'pathName
      fontSize={['md', 'md', 'xl']}
      marginBottom={[2, 0]}
      marginTop={isSearchPage ? spacing.vertical : 0}
      textAlign={isSearchPage ? 'left' : ['center', 'left']}
      width='100%'
      separator={<ChevronRightIcon color='brandText' />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink as={Link} to='/'>
          {t('home')}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem
        isCurrentPage
        fontWeight='bold'
        textTransform='capitalize'
      >
        <BreadcrumbLink as={Link} to={path}>
          {pathName}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </ChakraBreadcrumb>
  );
};

export default Breadcrumb;
