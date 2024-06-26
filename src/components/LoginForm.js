import React, { useState ,useContext } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { Link ,useNavigate} from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';
import { URL } from '../constant';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const requestBody = {
      email,
      password
    };

    try {
      const response = await fetch(`${URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      const data = await response.json();

      if (data.detail_code === 400) {
        throw new Error(data['message']);
      }
      login(data.token);
      navigate('/');
      
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <Flex align="center" justify="center" height="90vh" bg="gray.100">
      <Box bg="white" p={6} rounded="md" shadow="md" width="400px">
        <Heading mb={6} textAlign="center">Đăng nhập</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="email" mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Mật khẩu</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </FormControl>
          {error && (
            <Text color="red.500" mb={4}>
              {error}
            </Text>
          )}
          <Button type="submit" colorScheme="teal" width="full" mt={4}>
            Đăng nhập
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          Chưa có tài khoản? <Link to="/signup" style={{ color: 'teal' }}>Đăng ký</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginForm;