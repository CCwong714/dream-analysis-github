import { Text } from '@chakra-ui/react';

function CardNumber({ number }) {
  return (
    <Text
      backgroundColor='brandYellow'
      borderTopLeftRadius='md'
      borderTopRightRadius='md'
      fontSize={['lg', 'xl']}
      fontWeight='bold'
      paddingX={2}
      paddingY={1}
      size='lg'
      width='100%'
    >
      {number}
    </Text>
  );
}

export default CardNumber;
