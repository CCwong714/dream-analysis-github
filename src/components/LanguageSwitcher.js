import { Box, Flex, Icon, Select as ChakraSelect } from '@chakra-ui/react';
import 'flag-icons/css/flag-icons.min.css';
import i18next from 'i18next';
import { useContext, useState } from 'react';
import { BsGlobe2 } from 'react-icons/bs';
import { LanguageContext } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const options = [
    {
      value: 'cn',
      label: '中文',
      icon: <Box as='span' className='fi fi-cn'></Box>,
    },
    {
      value: 'en',
      label: 'English',
      icon: <Box as='span' className='fi fi-gb'></Box>,
    },
    {
      value: 'my',
      label: 'Malay',
      icon: <Box as='span' className='fi fi-my'></Box>,
    },
    {
      value: 'th',
      label: 'แบบไทย',
      icon: <Box as='span' className='fi fi-th'></Box>,
    },
  ];

  const { languageCode, updateLanguage } = useContext(LanguageContext);
  const currentLanguage = options.find((l) => l.value === languageCode);
  const [selectedOption, setSelectedOption] = useState(currentLanguage);

  // When using ReactSelect
  // const handleChange = (selectedOption) => {
  //   const { value } = selectedOption;
  //   setSelectedOption(selectedOption);
  //   i18next.changeLanguage(value);
  //   updateLanguage(value);
  // };

  // When using ChakraSelect
  const handleChange = (selectedOption) => {
    const { value } = selectedOption.target;
    setSelectedOption(value);
    i18next.changeLanguage(value);
    updateLanguage(value);
  };

  return (
    <Flex alignItems='center' backgroundColor='black'>
      {/* When using ReactSelect */}
      {/* <Select
        classNamePrefix='rs'
        defaultValue={selectedOption}
        getOptionLabel={(e) => (
          <Flex alignItems='center' border='none' outline='none'>
            <Box>{e.icon}</Box>
            <Box
              as='span'
              color='white'
              display={['none', 'none', 'block']}
              fontSize='sm'
              fontWeight='bold'
              marginLeft={2}
            >
              {e.label}
            </Box>
          </Flex>
        )}
        isSearchable={false}
        options={options}
        onChange={handleChange}
      /> */}
      <Icon display={['none','block','block','block']} as={BsGlobe2} color='white' fontSize='lg' />
      <ChakraSelect
        backgroundColor='brandLightBg'
        border='none'
        color='white'
        fontSize={['xs', 'sm']}
        fontWeight='bold'
        marginLeft={[2, 1]}
        size='md'
        variant='filled '
        width={['100%']}
        defaultValue={selectedOption.value}
        onChange={handleChange}
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
      </ChakraSelect>
    </Flex>
  );
};

export default LanguageSwitcher;
