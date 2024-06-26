import React, { useContext, useState } from 'react';
import { Box, Button, Flex, Heading, IconButton, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import { SiChatbot } from 'react-icons/si';
import { FaGithub, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from 'react-router-dom';
import Home from './components/Home';
import TopRating from './components/TopRating';
import Statistics from './components/Statistics';
import ProductListPage from './components/ProductListPage';
import Chat from './components/Chat';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import { AuthContext } from './components/AuthContext';

function App() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <Router>
      <Box>
        <Box as="nav" bg="gray.800" color="white" p={7} position="fixed" top="0" width="100%" zIndex="1000">
          <Flex justify="space-between" align="center">
            <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">DecisionGenius</Link>
            <Box display={{ base: 'block', md: 'none' }} id="mobile-menu">
              <Box as="span" className="bar"></Box>
              <Box as="span" className="bar"></Box>
              <Box as="span" className="bar"></Box>
            </Box>
            <Flex as="ul" listStyleType="none" display={{ base: 'none', md: 'flex' }} align="center">
              <Box as="li" mx={2}>
                <Link as={RouterLink} to="/">Trang chủ</Link>
              </Box>
              <Box as="li" mx={2}>
                <Link as={RouterLink} to="/top-rating">Top Rating</Link>
              </Box>
              <Box as="li" mx={2}>
                <Link as={RouterLink} to="/statistics">Thống kê</Link>
              </Box>
              <Box as="li" mx={2}>
                <Link as={RouterLink} to="/product-list">Sản phẩm</Link>
              </Box>
              <Box as="li" mx={2}>
                {isLoggedIn ? (
                  <Menu>
                    <MenuButton
                      as={IconButton}
                      aria-label="Profile"
                      icon={<FaUserCircle />}
                      variant="ghost"
                      color="white"
                    />
                    <MenuList>
                      <MenuItem as={RouterLink} textColor={'black'} to="/profile">Hồ sơ</MenuItem>
                      <MenuItem onClick={logout} textColor={'black'}>Đăng xuất</MenuItem>
                    </MenuList>
                  </Menu>
                ) : (
                  <Button as={RouterLink} to="/login" colorScheme="teal">Đăng nhập</Button>
                )}
              </Box>
            </Flex>
          </Flex>
        </Box>

        <Box pt={20}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/top-rating" element={<TopRating />} />
            <Route path="/statistics" element={<PrivateRoute element={<Statistics />} />} />
            <Route path="/product-list" element={<ProductListPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          </Routes>
        </Box>

        {isLoggedIn && (
          <>
            {/* Chat Plugin */}
            <Box
              position="fixed"
              bottom="20px"
              right="20px"
              display={showChat ? 'block' : 'none'}
              boxShadow="0 2px 5px rgba(0, 0, 0, 0.2)"
              zIndex="1000"
            >
              <Box
                bg="gray.400"
                color="black"
                p={4}
                borderRadius="md"
              >
                <Flex justify="space-between" align="center">
                  <Heading size="sm" color="black">Chatbot</Heading>
                  <IconButton
                    aria-label="Close"
                    icon={<SiChatbot />}
                    color="black"
                    variant="ghost"
                    onClick={toggleChat}
                  />
                </Flex>
                <Flex mt={2}>
                  <Chat />
                </Flex>
              </Box>
            </Box>

            {/* Chat Plugin Button */}
            <Box
              position="fixed"
              bottom="20px"
              right="20px"
              zIndex="1000"
            >
              <IconButton
                aria-label="Open chat"
                icon={<SiChatbot />}
                colorScheme="teal"
                onClick={toggleChat}
              />
            </Box>
          </>
        )}

        <Box as="footer" bg="gray.800" color="white" py={0} position="fixed" bottom={0} w={"100%"}>
          <Box maxW="container.xl" mx="auto" textAlign="center">
            <Box mb={4}>
              <Text>Tiến Chung</Text>
              <Flex justify="center" mt={2}>
                <Link href="https://www.linkedin.com/in/chung-h%C3%A0-7531032a3/" isExternal mx={2}>
                  <FaLinkedin size="24" />
                </Link>
                <Link href="https://github.com/tienchungbk" isExternal mx={2}>
                  <FaGithub size="24" />
                </Link>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
