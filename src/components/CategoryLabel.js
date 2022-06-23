import { Badge } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

const Label = ({ category }) => {
  const { lang } = useParams();

  return (
    <Link to={`/${category.toLowerCase()}/${lang}`}>
      <Badge
        colorScheme='yellow'
        fontSize={['xs', 'sm', 'md']}
        marginTop={4}
        textTransform='uppercase'
      >
        {category}
      </Badge>
    </Link>
  );
};

export default Label;
