import { Flex, Select } from '@chakra-ui/react';
import { FiFilter } from 'react-icons/fi';

const RangeSelection = ({ changeRange, defaultValue = 0, options }) => {
  return (
    <Flex alignItems='center' width={['100%', '300px']}>
      <FiFilter style={{ color: 'white', fontSize: '18px' }} />
      <Select
        backgroundColor='black'
        border='none'
        color='white'
        colorScheme='yellow'
        fontSize={['sm', 'md']}
        marginLeft={[2, 1]}
        paddingLeft={[0, 2]}
        size='md'
        defaultValue={defaultValue}
        onChange={changeRange}
      >
        {options.map((o) => (
          <option
            key={o.value}
            style={{ backgroundColor: 'black' }}
            value={o.value}
          >
            {o.label}
          </option>
        ))}
      </Select>
    </Flex>
  );
};

export default RangeSelection;
