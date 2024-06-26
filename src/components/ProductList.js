import React from 'react';
import { Box, Button, Image, Text, Badge, VStack } from '@chakra-ui/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    Id: "66604a8615910ccbd4e48f3a",
    Product_ID: 274718589,
    Name: "Áo Thun Nam Ngắn Tay 5S FASHION, Chất Cotton Mềm Mát, Thiết Kế Khỏe Khoắn, In Trẻ Trung, Năng Động (ATS24045)",
    Brand: "5S",
    Price: "139.000₫",
    Discount_rate: "33%",
    Sales: "11",
    Rating: 4.3,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/36/48/e6/f4ffdecc61abce770684b0f21a4164dd.jpg.webp",
    Link: "222",
    DateTime: "2024-06-05T18:22:46.998Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3b",
    Product_ID: 138748093,
    Name: "Áo thun nam cổ tim ngắn tay đẹp nhiều màu đủ size ( có size lớn cho người 100 kg )",
    Brand: "OEM",
    Price: "89.000₫",
    Discount_rate: "10%",
    Sales: "346",
    Rating: 4.2,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/07/76/bd/9e4c38b7af8807a44127f7b404cc8083.jpg.webp",
    Link: "111",
    DateTime: "2024-06-05T18:22:47.114Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3c",
    Product_ID: 74493672,
    Name: "[ Có Ảnh Thật ] Áo thun trơn tay lỡ form rộng unisex - Phông trơn",
    Brand: "OEM",
    Price: "69.000₫",
    Discount_rate: "45%",
    Sales: "144",
    Rating: 5,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/3f/11/62/3dc260b0f407dcf1bb40ac401ec84e86.jpg.webp",
    Link: "234",
    DateTime: "2024-06-05T18:22:47.214Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3d",
    Product_ID: 176251118,
    Name: "Combo 2 Áo thun nam Cotton Compact Premium trẻ trung thấm hút mồ hôi, co giãn 4 chiều MRM Manlywear",
    Brand: "MRM MANLYWEAR",
    Price: "279.000₫",
    Discount_rate: "44%",
    Sales: "511",
    Rating: 4.8,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/1c/9b/16/cba8a92606d3f41466c89d9f32b6dbe7.jpg.webp",
    Link: "123",
    DateTime: "2024-06-05T18:22:47.347Z"
  },
  {
    Id: "66604a8615910ccbd4e48f3a",
    Product_ID: 274718589,
    Name: "Áo Thun Nam Ngắn Tay 5S FASHION, Chất Cotton Mềm Mát, Thiết Kế Khỏe Khoắn, In Trẻ Trung, Năng Động (ATS24045)",
    Brand: "5S",
    Price: "139.000₫",
    Discount_rate: "33%",
    Sales: "11",
    Rating: 4.3,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/36/48/e6/f4ffdecc61abce770684b0f21a4164dd.jpg.webp",
    Link: "222",
    DateTime: "2024-06-05T18:22:46.998Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3b",
    Product_ID: 138748093,
    Name: "Áo thun nam cổ tim ngắn tay đẹp nhiều màu đủ size ( có size lớn cho người 100 kg )",
    Brand: "OEM",
    Price: "89.000₫",
    Discount_rate: "10%",
    Sales: "346",
    Rating: 4.2,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/07/76/bd/9e4c38b7af8807a44127f7b404cc8083.jpg.webp",
    Link: "111",
    DateTime: "2024-06-05T18:22:47.114Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3c",
    Product_ID: 74493672,
    Name: "[ Có Ảnh Thật ] Áo thun trơn tay lỡ form rộng unisex - Phông trơn",
    Brand: "OEM",
    Price: "69.000₫",
    Discount_rate: "45%",
    Sales: "144",
    Rating: 5,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/3f/11/62/3dc260b0f407dcf1bb40ac401ec84e86.jpg.webp",
    Link: "234",
    DateTime: "2024-06-05T18:22:47.214Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3d",
    Product_ID: 176251118,
    Name: "Combo 2 Áo thun nam Cotton Compact Premium trẻ trung thấm hút mồ hôi, co giãn 4 chiều MRM Manlywear",
    Brand: "MRM MANLYWEAR",
    Price: "279.000₫",
    Discount_rate: "44%",
    Sales: "511",
    Rating: 4.8,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/1c/9b/16/cba8a92606d3f41466c89d9f32b6dbe7.jpg.webp",
    Link: "123",
    DateTime: "2024-06-05T18:22:47.347Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3c",
    Product_ID: 74493672,
    Name: "[ Có Ảnh Thật ] Áo thun trơn tay lỡ form rộng unisex - Phông trơn",
    Brand: "OEM",
    Price: "69.000₫",
    Discount_rate: "45%",
    Sales: "144",
    Rating: 5,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/3f/11/62/3dc260b0f407dcf1bb40ac401ec84e86.jpg.webp",
    Link: "234",
    DateTime: "2024-06-05T18:22:47.214Z"
  },
  {
    Id: "66604a8715910ccbd4e48f3d",
    Product_ID: 176251118,
    Name: "Combo 2 Áo thun nam Cotton Compact Premium trẻ trung thấm hút mồ hôi, co giãn 4 chiều MRM Manlywear",
    Brand: "MRM MANLYWEAR",
    Price: "279.000₫",
    Discount_rate: "44%",
    Sales: "511",
    Rating: 4.8,
    Category: "Áo thun nam",
    Image: "https://salt.tikicdn.com/cache/750x750/ts/product/1c/9b/16/cba8a92606d3f41466c89d9f32b6dbe7.jpg.webp",
    Link: "123",
    DateTime: "2024-06-05T18:22:47.347Z"
  }
];

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: "block", background: "black", position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <Button
      className={className}
      style={{ ...style, display: "block", background: "black", position: 'absolute', top: '50%', transform: 'translateY(-50%)' }}
      onClick={onClick}
    />
  );
};

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Box maxW="1250px" mx="auto" mt="4">
      <Slider {...settings}>
        {children}
      </Slider>
    </Box>
  );
};

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="5" width="250px" height="400px">
      <Image 
        src={product.Image} 
        alt={product.Name} 
        boxSize="200px" // Cố định kích thước của hình ảnh
        objectFit="cover" // Đảm bảo hình ảnh không bị vỡ
      />      
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
          <Box as="span" color="gray.600" fontSize="sm">
            {` - ${product.Discount_rate} off`}
          </Box>
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
      </Box>
    </Box>
  );
};

const ProductList = () => {
  return (
    <Box maxW="2250px" mx="auto" mt="4">
      <Carousel>
        {products.map((product) => (
          <VStack key={product.Id} spacing="24px" alignItems={'center'} justifyContent={'center'}>
            <ProductCard product={product} />
          </VStack>
        ))}
      </Carousel>
    </Box>
  );
};

export default ProductList;