import { Alert } from '@chakra-ui/react';

const EndMessage = ({ message }) => {
  return (
    <Alert
      display='flex'
      justifyContent='center'
      marginTop={12}
      variant='top-accent'
      status='warning'
    >
      {message}
    </Alert>
  );
};

export default EndMessage;
