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
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f7ede1;
}`

const PanelList=styled(Box)`
display: flex;
flex: 1;
overflow-y: auto;
`
const Panel=styled(Box)`
flex-basis: 280px;
padding: 1rem;
overflow-y: auto;

`
const List=styled(Box)`
flex: 1;
padding: 1rem;
// overflow-y: auto;

`




// @media(max-width: ${({theme}) => theme.media.mobile}){
  // .grid-filter-column{
    // grid-template-columns:  1fr;
//  
  // }

  
  

export default function ForMen() {
  

  return (

    <>
     
     <Wrapper className='home'>


       <PanelList className='home_panelList-wrap'>


        <Panel className="home_panel-wrap">
          <FilterSection/>
        </Panel>
        
        
        <List className="home_list-wrap">
          
             <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>
            <ProductList/>

        </List>
          
          
          
        

       </PanelList>

     </Wrapper>
    </>
  );
  
}



   