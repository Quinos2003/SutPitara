import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { products } from '../constants/data';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)(({ theme }) => ({
  marginTop: 10,
  background: '#f7ede1',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
}));

const Deal = styled(Box)(({ theme }) => ({
  padding: '15px 20px',
  display: 'flex',
  background: '#f7ede1',
}));

const Timer = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginLeft: 10,
  alignItems: 'center',
  color: '#7f7f7f',
}));

const DealText = styled(Typography)(({ theme }) => ({
  fontSize: 22,
  fontWeight: 600,
  marginRight: 25,
  lineHeight: 32,
}));

const ViewAllButton = styled(Button)(({ theme }) => ({
  marginLeft: 'auto',
  background: '#2874f0',
  borderRadius: 2,
  fontSize: 13,
  fontWeight: 600,
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '250px',
  objectFit: 'contain',
  [theme.breakpoints.down('sm')]: {
    // objectFit: 'contain',
    // height: 180
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  marginTop: 5,
}));

const RenderTimer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const ProductList = ({ data, timer, title, minPrice, maxPrice, rating, condition }) => {
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <RenderTimer variant="span">
        {hours} : {minutes} : {seconds} Left
      </RenderTimer>
    );
  };

  const filteredProducts = products.filter((product) => {
    if (minPrice && product.price < minPrice) {
      return false;
    }
    if (maxPrice && product.price > maxPrice) {
      return false;
    }
    if (rating && product.rating < rating) {
      return false;
    }
    if (condition && product.condition !== condition) {
      return false;
    }
    return true;
  });

  return (
    <Component>
      {filteredProducts.slice(0, 4).map((product) => (
        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }} key={product.id}>
          <Box textAlign="center" style={{ padding: '25px 40px' }}>
            <Image src={product.url} alt={product.title.shortTitle} />
            <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
            <Text style={{ color: 'green' }}>{product.discount}</Text>
            <Text style={{ color: '#212121', opacity: 0.6 }}>{product.tagline}</Text>
          </Box>
        </Link>
      ))}
    </Component>
  );
};

export default ProductList;
