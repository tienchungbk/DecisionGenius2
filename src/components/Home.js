import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Home = () => (
  <Box as="section" id="home" bg="gray.100" py={20} textAlign="center">
    <Heading>Decision Genius</Heading>
    <Text fontSize="xl" mt={4}>Công cụ quyết định vượt trội cho thời trang</Text>
    <Button mt={8} colorScheme="teal" as="a" href="top-rating">Khám phá</Button>
  </Box>
);

export default Home;