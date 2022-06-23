import { Box, IconButton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';
import { spacing } from '../utils';

const ScrollToTop = () => {
  const [showBtn, setShowBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  });

  return (
    <Box position='relative' zIndex='999'>
      {showBtn && (
        <IconButton
          aria-label='Scroll to top'
          colorScheme='gray'
          icon={<IoMdArrowRoundUp />}
          position='fixed'
          bottom={[8, 12]}
          right={spacing.horizontal}
          size='lg'
          variant='solid'
          onClick={goToTop}
        />
      )}
    </Box>
  );
};

export default ScrollToTop;
