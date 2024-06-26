import React from 'react';
import { Box } from '@chakra-ui/react';
import SmallMenu from './ListTopRatingByCategory';

const TopRating = () => (
  <Box as="section" id="Sales" py={20}>
    <Box maxW="container.xl" mx="auto" >
      <SmallMenu />
    </Box>
  </Box>
);

export default TopRating;