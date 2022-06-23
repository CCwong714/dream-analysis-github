import { IconButton } from '@chakra-ui/react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ButtonHome = () => {
  return (
    <IconButton
      as={Link}
      to='/'
      backgroundColor='brandYellow'
      // colorScheme='yellow'
      display='flex'
      icon={<AiOutlineHome />}
      variant='unstyled'
      _hover={{ backgroundColor: 'yellow.400' }}
    />
  );
};

export default ButtonHome;
