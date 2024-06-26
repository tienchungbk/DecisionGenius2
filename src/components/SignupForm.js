import React, { useState } from 'react';
import { Box, Button, Flex, FormControl, FormLabel, Input, Heading, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { URL } from '../constant';
const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    const requestBody = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    };

    try {
      const response = await fetch(`${URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      if (data.detail_code === 400) {
        setError(data.message);
        throw new Error(data.message);
      }

      setSuccess(data.message);
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    }
  };

  return (
    <Flex align="center" justify="center" height="90vh" bg="gray.100">
      <Box bg="white" p={6} rounded="md" shadow="md" width="400px">
        <Heading mb={6} textAlign="center">Đăng ký</Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="firstName" mb={4}>
            <FormLabel>Họ</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="lastName" mb={4}>
            <FormLabel>Tên</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </FormControl>
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
          <FormControl id="confirmPassword" mb={4}>
            <FormLabel>Nhập lại mật khẩu</FormLabel>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </FormControl>
          <FormControl id="phone" mb={4}>
            <FormLabel>Điện thoại</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </FormControl>
          {error && (
            <Text color="red.500" mb={4}>
              {error}
            </Text>
          )}
          {success && (
            <Text color="green.500" mb={4}>
              {success}
            </Text>
          )}
          <Button type="submit" colorScheme="teal" width="full" mt={4}>
            Đăng ký
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          Đã có tài khoản? <Link to="/login" style={{ color: 'teal' }}>Đăng nhập</Link>
        </Text>
      </Box>
    </Flex>
  );
};

export default SignupForm;
