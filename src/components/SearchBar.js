import { Search2Icon } from '@chakra-ui/icons';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

const SearchBar = () => {
  const { languageCode } = useContext(LanguageContext);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();
  const { t } = useTranslation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (query.length !== 0) {
      navigate(`/search/${languageCode}?query=${query.toLowerCase()}`);
    }
    setQuery('');
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <InputGroup
      as='form'
      backgroundColor='brandLightBg'
      borderRadius='md'
      size='md'
      width={['50%', '60%', '500px']}
      onSubmit={submitHandler}
    >
      <Input
        backgroundColor='brandLightBg'
        color='white'
        isRequired
        placeholder={t('inputPlaceholder')}
        value={query}
        variant='solid'
        onChange={changeHandler}
        _placeholder={{ color: 'placeholderText' }}
      />
      <InputRightElement
        children={
          <IconButton
            color='white'
            display='flex'
            fontSize={['sm', 'md']}
            icon={<Search2Icon />}
            type='submit'
            variant='unstyled'
          />
        }
      />
    </InputGroup>
  );
};

export default SearchBar;
