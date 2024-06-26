import React from 'react';
import { Box } from '@chakra-ui/react';

const DecisionSupport = () => (
  <Box as="section" id="Products" py={20}>
    <Box maxW="container.xl" mx="auto">
      <iframe
        src="https://datavis-demoapp.herokuapp.com/public/dashboard/dea5d594-c6f3-40f3-9805-afc7075465f8"
        frameBorder="0"
        width="100%"
        height="800"
        allowTransparency
      ></iframe>
    </Box>
  </Box>
);

export default DecisionSupport;