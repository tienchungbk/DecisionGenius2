import React, { useState, useEffect } from 'react';
import { Box, Button, FormControl, FormLabel, Heading, Input, useToast } from '@chakra-ui/react';
import { URL } from '../constant';
const Profile = () => {
  const [profileData, setProfileData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    address: '',
    phoneNumber: '',
  });
  const toast = useToast();

  useEffect(() => {
    // Fetch user profile information from the API
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${URL}/users/profile`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            //Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token if authentication is required
          },
          body: JSON.stringify({
            token: localStorage.getItem('token'),
          }),
        });
        const data = await response.json();
        setProfileData({
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          country: data.country,
          city: data.city,
          address: data.address,
          phoneNumber: data.phone,
        });
      } catch (error) {
        toast({
          title: 'Error fetching profile data.',
          description: 'There was an error fetching your profile information. Please try again later.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };

    fetchProfile();
  }, [toast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Update user profile information
//     try {
//       const response = await fetch('http://localhost:8000/users/profile', {
//         method: 'POST', // or 'POST' depending on your API
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token if authentication is required
//         },
//         body: JSON.stringify(profileData),
//       });
//       if (response.ok) {
//         toast({
//           title: 'Profile updated.',
//           description: 'Your profile information has been updated successfully.',
//           status: 'success',
//           duration: 5000,
//           isClosable: true,
//         });
//       } else {
//         throw new Error('Failed to update profile');
//       }
//     } catch (error) {
//       toast({
//         title: 'Error updating profile.',
//         description: 'There was an error updating your profile information. Please try again later.',
//         status: 'error',
//         duration: 5000,
//         isClosable: true,
//       });
//     }
  };

  return (
    <Box maxW="sm" mx="auto" mt={10} p={5} shadow="md" borderWidth="1px" bg="gray.50" borderRadius="md">
      <Heading mb={6} color="teal.500">Profile</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={profileData.email} readOnly bg="gray.200" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Họ</FormLabel>
          <Input
            type="text"
            name="firstName"
            value={profileData.firstName}
            onChange={handleChange}
            bg="white"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Tên</FormLabel>
          <Input
            type="text"
            name="lastName"
            value={profileData.lastName}
            onChange={handleChange}
            bg="white"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Quốc gia</FormLabel>
          <Input
            type="text"
            name="country"
            value={profileData.country}
            onChange={handleChange}
            bg="white"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Thành phố</FormLabel>
          <Input
            type="text"
            name="city"
            value={profileData.city}
            onChange={handleChange}
            bg="white"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Địa chỉ</FormLabel>
          <Input
            type="text"
            name="address"
            value={profileData.address}
            onChange={handleChange}
            bg="white"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Số điện thoại</FormLabel>
          <Input
            type="tel"
            name="phoneNumber"
            value={profileData.phoneNumber}
            onChange={handleChange}
            bg="white"
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" width="full" mt={4}>Lưu</Button>
      </form>
    </Box>
  );
};

export default Profile;
