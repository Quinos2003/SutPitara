import React from 'react'
// import React from "react";
// import NavBar from "./NavBar";
// import { useEffect } from "react";
// import Banner from "./Banner";
// import Slide from "./Slide";
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
  background: #f7ede1;
  min-height: 100vh;
}`

const PanelList=styled(Box)`
display: flex;
justify-content: space-evenly;
position: relative;

@media screen and (min-width: 768px) and (max-width: 1023px) {
  /* Styles for tablet */
  flex-direction: column;
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  /* Styles for smartphone landscape */
  flex-direction: column;
}

@media screen and (min-width: 300px) and (max-width: 479px) {
  /* Styles for smartphone portrait */
  flex-direction: column;
}
`
const Panel=styled(Box)`
padding: 1rem;
`
const List=styled(Box)`
padding: 1rem;

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
        </List>

       </PanelList>
     </Wrapper>
    </>
  );
  
}



   