import { Box, Button, Image, Flex, Text, Badge, VStack, Select } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from 'react';
import { URL } from '../constant';
import { StarIcon } from '@chakra-ui/icons';

const SmallMenu = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${URL}/category/getList`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        console.log('Categories:', data);
        setCategories(data);
        if (data.length > 0) {
          setSelectedCategory(data[0].Category_Id);
          fetchTopRatings(data[0].Category_Id);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    
    fetchCategories();
  }, []);

  const fetchTopRatings = async (categoryId) => {
    try {
      const response = await fetch(
        `${URL}/product/getTopRating`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            category_id: categoryId,
          }),
        }
      );
      const data = await response.json();
      console.log('Products:', data);
      setProducts(data); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategory(categoryId);
    fetchTopRatings(categoryId);
  };

  return (
    <Flex direction="column" align="center" justify="center" height="50hv" maxW="container.xl" mx="auto" p={5}>
      <Flex justifyContent="center" alignItems="center" height="60px" gap={5} mb={5}>
        <Text fontSize={40} fontWeight={"bold"} color={"teal"}>Top Rating</Text>
        <StarIcon w={10} h={10} color="yellow.500" />
      </Flex>
      <Box w="200px" mb={5}>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category.Category_Id} value={category.Category_Id}>
              {category.Name}
            </option>
          ))}
        </Select>
      </Box>
      <Box w="130%">
        <Carousel>
          {products.map((product) => (
            <VStack key={product.Id} spacing="24px" alignItems={'center'} justifyContent={'center'}>
              <ProductCard product={product} />
            </VStack>
          ))}
        </Carousel>
      </Box>
    </Flex>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: "block", background: "black", position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '-25px' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: "block", background: "black", position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '-25px' }}
      onClick={onClick}
    />
  );
};

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box height="600px" mx="auto" mt="4" className="carousel-container">
      <Slider {...settings}>
        {children}
      </Slider>
    </Box>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" width="300px" height="500px" m="20px">
      <Flex justifyContent="center" alignItems="center" height="200px">
        <Image 
          src={product.Image_Link}
          alt={product.Name} 
          boxSize="200px"
          objectFit="cover"
        />
      </Flex>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.Brand}
          </Badge>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          {product.Name}
        </Box>
        <Box>
          {product.Price}
          {product.Discount_rate !== "N/A" && (
          <Box as="span" color="gray.600" fontSize="sm">
            {` - ${product.Discount_rate} off`}
          </Box>
          )}
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Text as="span" ml="2" color="gray.600" fontSize="sm">
            {product.Rating} stars
          </Text>
        </Box>
        <Box d="flex" mt="2" alignItems="center">
          <Text as="span" ml="2" color="gray.600" fontSize="sm">
            Đã bán: {product.Sales} sản phẩm
          </Text>
        </Box>
        <Button mt={4} colorScheme="teal" onClick={() => window.location.href = product.Link}>
          Xem chi tiết
        </Button>
      </Box>
    </Box>
  );
};

export default SmallMenu;