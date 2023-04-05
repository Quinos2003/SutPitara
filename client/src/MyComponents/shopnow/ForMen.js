import React from 'react'
// import React from "react";
// import NavBar from "./NavBar";
// import { useEffect } from "react";
// import Banner from "./Banner";
// import Slide from "./Slide";
import Slide from '../home/Slide';
import { Box, Grid, styled } from "@mui/material";
// import {useDispatch, useSelector} from'react-redux'
// import MidSlide from "./MidSlide";
import { useEffect } from "react";
// import {getProducts } from '../../redux/actions/productActions'

import FilterSection from './FilterSection';
import ProductList from './ProductList';
// import Sort from './Sort';


// const Component = styled(Box)`
//   padding: 10px;
//   background: #f7ede1;
//   // background: red;
  
// `;

const Wrapper = styled(Box)`
.grid-filter-column{
  grid-template-columns: 0.2fr 1fr;
  display: grid;
  padding: 0 55px;
  background: #f7ede1;

}`



const Container = styled(Grid)(({ theme }) => ({
  // background: '#FFFFFF',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
      display: 'none',
  }
}))


// @media(max-width: ${({theme}) => theme.media.mobile}){
  // .grid-filter-column{
    // grid-template-columns:  1fr;
//  
  // }

  
  

export default function ForMen() {
  

  return (

    <>
     
     <Wrapper>


       <Box className='container grid grid-filter-column'>


        <Container>
        <FilterSection/>
        </Container>
        <Box className='product-view--sort'>
          
          <Box className="main-product">
            <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>
          </Box>
        </Box>

       </Box>

     </Wrapper>
    </>
  );
  
}



   